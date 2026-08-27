import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { fetchRepoContext } from "@/lib/github-analyzer";
import { analyzeRepoWithGemini } from "@/lib/gemini";

export async function GET(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.nextUrl.searchParams.get("key");
  const secretKey = process.env.SYNC_SECRET_KEY;

  if (
    secretKey &&
    authHeader !== secretKey &&
    authHeader !== `Bearer ${secretKey}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const username = process.env.GITHUB_USERNAME || "tusharXO";
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-Manual-Sync",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers },
    );
    if (!reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub repos" },
        { status: 500 },
      );
    }

    const repos = await reposRes.json();
    const portfolioRepos = repos.filter(
      (r: { topics?: string[]; archived?: boolean }) => {
        if (r.archived) return false;
        const topics = (r.topics || []).map((t) => t.toLowerCase());
        return topics.includes("portfolio");
      },
    );

    const db = await getDatabase();
    const collection = db.collection("projects");
    const results = [];

    for (const repo of portfolioRepos) {
      const context = await fetchRepoContext(username, repo.name);
      const aiData = await analyzeRepoWithGemini({
        repoName: repo.name,
        githubDescription: repo.description,
        topics: repo.topics || [],
        readmeContent: context.readmeContent,
        dependenciesContent: context.dependenciesContent,
        fileTree: context.fileTree,
      });

      const doc = {
        githubRepoId: repo.id,
        id: repo.name.toLowerCase(),
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

      await collection.updateOne(
        { githubRepoId: repo.id },
        { $set: doc },
        { upsert: true },
      );
      results.push(doc);
    }

    return NextResponse.json({
      success: true,
      syncedCount: results.length,
      projects: results,
    });
  } catch (error) {
    console.error("[Manual Sync] Error:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
