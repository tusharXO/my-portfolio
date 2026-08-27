import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export interface GeneratedProjectData {
  title: string;
  tagline: string;
  category: string;
  description: string;
  detailedPoints: string[];
  techStack: string[];
}

// Strict JSON schema definition for Gemini
const projectSchema: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: {
      type: SchemaType.STRING,
      description:
        "Clean, professional, title-cased project name (e.g., 'NEXUS RTC', 'CreatorStore'). Avoid raw slugs.",
    },
    tagline: {
      type: SchemaType.STRING,
      description:
        "High-impact, technical one-line subtitle emphasizing architecture and systems engineering.",
    },
    category: {
      type: SchemaType.STRING,
      description:
        "Project domain category (e.g. 'Distributed Systems & Real-Time Engineering', 'Enterprise Backend & APIs', 'Cloud & DevOps').",
    },
    description: {
      type: SchemaType.STRING,
      description:
        "Comprehensive 2-3 sentence overview of the system, its architecture, and problem solved.",
    },
    detailedPoints: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description:
        "Exactly 4 high-impact technical implementation bullet points highlighting architecture, concurrency, database modeling, protocols, and performance.",
    },
    techStack: {
      type: SchemaType.ARRAY,
      items: { type: SchemaType.STRING },
      description:
        "Accurate, normalized list of core technologies, frameworks, and databases detected (e.g. ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker']).",
    },
  },
  required: [
    "title",
    "tagline",
    "category",
    "description",
    "detailedPoints",
    "techStack",
  ],
};

export async function analyzeRepoWithGemini(repoContext: {
  repoName: string;
  githubDescription: string | null;
  topics: string[];
  readmeContent: string;
  dependenciesContent: string;
  fileTree: string[];
}): Promise<GeneratedProjectData> {
  const modelName = process.env.GEMINI_MODEL || "gemini-3.6-flash";
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: projectSchema,
      temperature: 0.2, // Low temperature for factual, technical accuracy
    },
  });

  const prompt = `
You are a Staff Technical Recruiter and Principal Backend Systems Architect reviewing a senior software engineer's portfolio project.

Analyze the following GitHub repository context and generate a premier technical project card entry.

### REPOSITORY METADATA:
- Repository Name: ${repoContext.repoName}
- GitHub Description: ${repoContext.githubDescription || "N/A"}
- GitHub Topics/Tags: ${repoContext.topics.join(", ") || "N/A"}

### DEPENDENCY MANIFEST (package.json / pom.xml / go.mod):
\`\`\`
${repoContext.dependenciesContent.slice(0, 3000)}
\`\`\`

### DIRECTORY & FILE STRUCTURE:
\`\`\`
${repoContext.fileTree.slice(0, 80).join("\n")}
\`\`\`

### README.md CONTENT:
\`\`\`markdown
${repoContext.readmeContent.slice(0, 6000)}
\`\`\`

### INSTRUCTIONS:
1. Extract the core architectural highlights, protocols (e.g. WebRTC, WebSockets, gRPC, REST), databases, and concurrency models.
2. Formulate 4 robust, resume-grade 'detailedPoints' using action verbs (Architected, Engineered, Implemented, Structured, Containerized).
3. Do not include fluff or generic claims; focus on verifiable technical implementation.
`;

  const result = await model.generateContent(prompt);
  const responseText = result.response.text();
  return JSON.parse(responseText) as GeneratedProjectData;
}
