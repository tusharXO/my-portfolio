export interface RepoContextResult {
  readmeContent: string;
  dependenciesContent: string;
  fileTree: string[];
}

export async function fetchRepoContext(
  owner: string,
  repo: string,
): Promise<RepoContextResult> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-AI-Sync",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // 1. Fetch README.md
  let readmeContent = "";
  try {
    const readmeRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers },
    );
    if (readmeRes.ok) {
      const readmeData = await readmeRes.json();
      if (readmeData.content) {
        readmeContent = Buffer.from(readmeData.content, "base64").toString(
          "utf-8",
        );
      }
    }
  } catch (err) {
    console.warn(`[GitHub Context] Could not fetch README for ${repo}:`, err);
  }

  // 2. Fetch File Tree
  let fileTree: string[] = [];
  try {
    const treeRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/git/trees/HEAD?recursive=1`,
      { headers },
    );
    if (treeRes.ok) {
      const treeData = await treeRes.json();
      if (Array.isArray(treeData.tree)) {
        fileTree = treeData.tree.map((item: { path: string }) => item.path);
      }
    }
  } catch (err) {
    console.warn(`[GitHub Context] Could not fetch tree for ${repo}:`, err);
  }

  // 3. Fetch Dependency Manifests (checks pom.xml, package.json, go.mod, requirements.txt)
  let dependenciesContent = "";
  const candidateFiles = [
    "pom.xml",
    "package.json",
    "go.mod",
    "requirements.txt",
    "build.gradle",
  ];
  for (const filename of candidateFiles) {
    if (fileTree.includes(filename)) {
      try {
        const fileRes = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`,
          { headers },
        );
        if (fileRes.ok) {
          const fileData = await fileRes.json();
          if (fileData.content) {
            dependenciesContent = Buffer.from(
              fileData.content,
              "base64",
            ).toString("utf-8");
            break;
          }
        }
      } catch {
        // continue to next candidate
      }
    }
  }

  return {
    readmeContent,
    dependenciesContent,
    fileTree,
  };
}
