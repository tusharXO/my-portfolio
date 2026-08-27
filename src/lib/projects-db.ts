import { getDatabase } from "@/lib/mongodb";
import { FEATURED_PROJECTS, ProjectItem } from "@/data/portfolioData";

export async function getPortfolioProjects(): Promise<ProjectItem[]> {
  try {
    if (!process.env.MONGODB_URI) {
      return FEATURED_PROJECTS;
    }

    const db = await getDatabase();
    const projects = await db
      .collection("projects")
      .find({})
      .sort({ updatedAt: -1 })
      .toArray();

    const dbProjects: ProjectItem[] = (projects || []).map((p) => ({
      id: String(p.id || p._id),
      title: p.title,
      tagline: p.tagline,
      category: p.category || "Backend Engineering",
      featured: p.featured ?? true,
      description: p.description,
      detailedPoints: p.detailedPoints || [],
      techStack: p.techStack || [],
      githubUrl: p.githubUrl,
      demoUrl: p.demoUrl,
    }));

    // Retain static curated projects (like CreatorStore, NEXUS RTC) alongside dynamically synced repos
    const dbProjectIds = new Set(dbProjects.map((p) => p.id.toLowerCase()));
    const additionalStatic = FEATURED_PROJECTS.filter(
      (p) => !dbProjectIds.has(p.id.toLowerCase()),
    );

    return [...dbProjects, ...additionalStatic];
  } catch (err) {
    console.error(
      "[Projects DB] Failed to query MongoDB. Using static fallback.",
      err,
    );
    return FEATURED_PROJECTS;
  }
}
