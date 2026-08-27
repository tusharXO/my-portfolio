import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDatabase } from "@/lib/mongodb";
import { fetchRepoContext } from "@/lib/github-analyzer";
import { analyzeRepoWithGemini } from "@/lib/gemini";

function verifySignature(
  payload: string,
  signature: string | null,
  secret: string,
): boolean {
  if (!signature || !secret) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = `sha256=${hmac.update(payload).digest("hex")}`;
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET || "";
  const signature = req.headers.get("x-hub-signature-256");
  const rawBody = await req.text();

  // 1. Signature Verification
  if (secret && !verifySignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const repo = payload.repository;

  if (!repo) {
    return NextResponse.json(
      { message: "No repository in payload" },
      { status: 200 },
    );
  }

  const owner = repo.owner?.login || process.env.GITHUB_USERNAME || "tusharXO";
  const repoName = repo.name;
  const topics: string[] = (repo.topics || []).map((t: string) =>
    t.toLowerCase(),
  );
  const hasPortfolioTopic = topics.includes("portfolio");

  const db = await getDatabase();
  const projectsCollection = db.collection("projects");

  // 2. Handle Topic Removal (Cleanup)
  if (!hasPortfolioTopic) {
    await projectsCollection.deleteOne({ githubRepoId: repo.id });
    return NextResponse.json({
      message: `Repository ${repoName} is not tagged with 'portfolio'. Cleaned up if existed.`,
    });
  }

  // 3. Process Tagged Repository with Gemini AI
  try {
    console.log(`[Webhook Worker] Processing tagged repository: ${repoName}`);

    const context = await fetchRepoContext(owner, repoName);
    const aiData = await analyzeRepoWithGemini({
      repoName,
      githubDescription: repo.description,
      topics,
      readmeContent: context.readmeContent,
      dependenciesContent: context.dependenciesContent,
      fileTree: context.fileTree,
    });

    const projectDocument = {
      githubRepoId: repo.id,
      id: repoName.toLowerCase(),
      title: aiData.title,
      tagline: aiData.tagline,
      category: aiData.category,
      featured: true,
      description: aiData.description,
      detailedPoints: aiData.detailedPoints,
      techStack: aiData.techStack,
      githubUrl: repo.html_url,
      demoUrl:
        repo.homepage && repo.homepage.trim() !== ""
          ? repo.homepage
          : undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: new Date(),
    };

    // Upsert into MongoDB
    await projectsCollection.updateOne(
      { githubRepoId: repo.id },
      { $set: projectDocument },
      { upsert: true },
    );

    return NextResponse.json({
      success: true,
      message: `Successfully analyzed and saved ${repoName} to database.`,
      project: projectDocument,
    });
  } catch (error) {
    console.error(`[Webhook Worker] Error processing ${repoName}:`, error);
    return NextResponse.json(
      { error: "Failed to process repository with AI" },
      { status: 500 },
    );
  }
}
