export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  source: string;
  iconName: string;
  badgeText: string;
  accent: "emerald" | "sky" | "amber" | "indigo";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlightTag: string;
  description: string;
  achievements: string[];
  techStack: string[];
  metrics?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  badgeText?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  description: string;
  detailedPoints: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Tushar Kumar",
  role: "Backend Developer | Microservices & Distributed Systems",
  availabilityStatus: "Available for Full-Time Backend / SWE Roles (Open to Relocation)",
  location: "New Delhi, India (Open to relocation)",
  email: "iamtushar2004@gmail.com",
  phone: "(+91) 7011106209",
  github: "https://github.com/tusharXO",
  linkedin: "https://www.linkedin.com/in/tusharkumarx/",
  bio: "Backend Developer with hands-on experience architecting low-latency microservices, monorepo codebases, and distributed systems using Node.js, Java (Spring Boot), and TypeScript. Experienced in implementing ACID-compliant transactional ledgers, atomic order pipelines, and containerized cloud deployments on AWS.",
  fullBio:
    "Backend Developer with hands-on experience architecting low-latency microservices, monorepo codebases, and distributed systems using Node.js, Java (Spring Boot), and TypeScript. Experienced in implementing ACID-compliant transactional ledgers, atomic order pipelines, and containerized cloud deployments on AWS.",
  resumeUrl: "/Tushar_Kumar_Resume.pdf",
};

export const METRIC_HIGHLIGHTS: MetricItem[] = [
  {
    id: "payment-throughput",
    value: "20+ TPS",
    label: "Concurrent Payment Transactions Processed",
    sublabel: "Processed with AES-256 encryption, RSA signatures, and idempotent webhook listeners",
    source: "TruesTech IT Solution",
    iconName: "CreditCard",
    badgeText: "High Concurrency",
    accent: "emerald",
  },
  {
    id: "api-latency",
    value: "<20ms",
    label: "Continuous API Latency on AWS EC2",
    sublabel: "Achieved via PM2 process clustering, Redis microservices, and IPC coordination",
    source: "Infrastructure Optimization",
    iconName: "Zap",
    badgeText: "Sub-20ms Speed",
    accent: "sky",
  },
  {
    id: "webrtc-transmissions",
    value: "10,000+",
    label: "Daily SDP & ICE Transmissions",
    sublabel: "Peer-to-peer real-time video, audio, and desktop screen sharing with 60 FPS capture",
    source: "NEXUS RTC Project",
    iconName: "Radio",
    badgeText: "Real-Time Systems",
    accent: "indigo",
  },
  {
    id: "active-users",
    value: "10,000+",
    label: "Monthly Active Users Scaled",
    sublabel: "30% engagement lift through dynamic publication portals and automated distribution",
    source: "Sanrachna Foundation",
    iconName: "Users",
    badgeText: "+30% Engagement",
    accent: "amber",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "truestech",
    company: "TruesTech IT Solution Pvt Ltd.",
    role: "Software Developer Intern",
    period: "12/2025 – Present",
    location: "Gurugram, Haryana",
    type: "Internship",
    highlightTag: "FinTech Payment Pipelines & Security",
    description:
      "Scaling core payment processing pipelines, ACID-compliant ledger persistence, and cryptographic security across cloud infrastructure.",
    achievements: [
      "Scaled core payment processing pipelines handling consistent 20+ transactions per second (TPS) across multi-rail gateways, integrating idempotent webhook listeners to eliminate double-spend and dropped events under high-concurrency conditions.",
      "Structured ACID-compliant MySQL schemas with row-level locking for wallet ledger balances, combined with MongoDB for asynchronous audit logging and AES-256/RSA payload encryption with rate-limited OTP auth across all REST endpoints.",
      "Architected RBAC-enforced administrative and user dashboards with contextual UI layouts, granular transaction permissions, and an asynchronous batch reporting worker generating audit-ready PDF/CSV/Excel summaries without blocking primary API threads.",
      "Integrated an AI-driven Telegram monitoring bot backed by automated error pattern detection to flag unauthorized access, server anomalies, and transaction failures, reducing MTTR to <5 minutes.",
      "Deployed Node microservices via PM2 Cluster Mode on cloud instances, utilizing IPC process coordination and memory management to achieve continuous sub-20ms API response latency and maximum CPU core utilization.",
    ],
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "PM2",
      "AWS",
      "Webhooks",
      "Cryptography (AES-256 / RSA)",
      "Telegram Bot API",
    ],
    metrics: "20+ TPS, <5 min MTTR, sub-20ms API latency",
  },
  {
    id: "airfleet",
    company: "AirFleet Managers",
    role: "Backend Developer Intern",
    period: "02/2025 – 08/2025",
    location: "Gurugram, Haryana",
    type: "Internship",
    highlightTag: "Aviation Asset Portal & Reporting Engine",
    description:
      "Designed aviation asset management portal with multi-tenant data isolation, real-time messaging, and high-performance export engines.",
    achievements: [
      "Designed an Aviation Asset Management Portal with multi-tenant data isolation and granular RBAC permission models, integrating low-latency direct and group messaging infrastructure for instant cross-organization communication.",
      "Authored an automated reporting engine rendering analytical PDFs, PPTs, and Excel sheets with embedded charts (keeping file sizes <10MB), alongside interactive real-time data visualizers and Gantt charts with client-side role filtering.",
      "Containerized Redis and core microservices via Docker, standardizing multi-environment CI/CD deployment pipelines and trimming base image sizes down to <250MB.",
      "Configured PM2 cluster mode across multi-core AWS EC2 instances, establishing request load balancing and process management to maintain sub-15ms response times and high system availability.",
    ],
    techStack: [
      "React",
      "MongoDB",
      "REST APIs",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "EC2",
      "PM2",
      "Docker",
      "Redis",
    ],
    metrics: "Sub-15ms response latency, <10MB export engine, <250MB container images",
  },
  {
    id: "sanrachna",
    company: "Sanrachna Foundation",
    role: "Web Developer Intern",
    period: "06/2024 – 07/2024",
    location: "South West Delhi, Delhi",
    type: "Internship",
    highlightTag: "Publication Platform & Distribution Pipelines",
    description:
      "Redesigned high-traffic publication portal, automated content distribution pipelines, and centralized editorial workflows.",
    achievements: [
      "Redesigned a high-traffic publication portal that boosted user engagement by 30% for 10,000+ monthly active users, creating gamified visual narratives that raised engagement duration by 40%.",
      "Automated content distribution pipelines with dynamic categorization and newsletter integrations, cutting manual publishing efforts by 50%.",
      "Spearheaded a centralized planning and editorial workflow tool that reduced publication turnaround times by 35%.",
    ],
    techStack: [
      "React",
      "MongoDB",
      "REST APIs",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "WordPress",
    ],
    metrics: "10,000+ MAU, +30% user engagement, +40% session duration",
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "SGT University",
    location: "Gurugram, HR",
    period: "08/2025 – 08/2027",
    status: "Available for full-time job",
    badgeText: "Pursuing • Available Full-Time",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SGT University",
    location: "Gurugram, HR",
    period: "08/2022 – 08/2025",
    status: "Graduated",
    badgeText: "Graduated",
  },
];

export const SPOKEN_LANGUAGES = [
  { language: "English", proficiency: "Professional / Fluent" },
  { language: "Hindi", proficiency: "Native / Fluent" },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "creatorstore",
    title: "CreatorStore",
    tagline: "Enterprise E-Commerce & Order Processing API",
    category: "Enterprise Backend & Distributed APIs",
    featured: true,
    description:
      "A multi-tiered e-commerce backend built with Spring Boot 3 and Java 21, featuring atomic transactional checkout pipelines, JPA/Hibernate PostgreSQL modeling, and automated JUnit 5 test suites.",
    detailedPoints: [
      "Architected a multi-tiered e-commerce backend in Spring Boot 3 using constructor-based dependency injection, centralized exception handling (@RestControllerAdvice), and structured DTO request/response mapping.",
      "Implemented atomic transactional checkout pipelines (@Transactional) with real-time stock validation, automated inventory deduction, and server-side price calculations to prevent order race conditions.",
      "Structured relational JPA/Hibernate data models with PostgreSQL, indexing product categories and keyword searches for efficient catalog querying.",
      "Integrated interactive OpenAPI 3 (Swagger UI) documentation and built automated test suites with JUnit 5 and H2 in-memory databases.",
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Maven",
      "Swagger/OpenAPI",
      "JUnit 5",
    ],
    githubUrl: "https://github.com/tusharXO",
    demoUrl: "https://github.com/tusharXO",
  },
  {
    id: "nexus-rtc",
    title: "NEXUS RTC",
    tagline: "Cross-Platform Enterprise Desktop Collaboration Suite",
    category: "Real-Time Systems & Desktop Engineering",
    featured: true,
    description:
      "A cross-platform desktop application delivering low-latency peer-to-peer real-time video, audio, and desktop screen sharing with a high-throughput WebSockets signaling cluster.",
    detailedPoints: [
      "Engineered a cross-platform desktop application using Electron, React, and TypeScript, delivering low-latency peer-to-peer real-time video, audio, and desktop screen sharing.",
      "Developed a high-performance signaling server using Node.js, Express, and WebSockets to broker SDP Offer/Answer handshakes and ICE candidate gathering.",
      "Integrated native OS screen-sharing capabilities using Electron's desktopCapturer API and IPC contextBridge communication with real-time frame previews.",
      "Built real-time media controls enabling dynamic track enabling/disabling for microphone muting and camera toggles without tearing down peer connections.",
      "Containerized backend services with multi-stage Docker builds on Linux base images for predictable network port exposures and lightweight deployments.",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Electron",
      "Node.js",
      "Express",
      "WebSockets",
      "WebRTC",
      "Docker",
    ],
    githubUrl: "https://github.com/tusharXO",
    demoUrl: "https://github.com/tusharXO",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for systems & applications",
    skills: [
      { name: "Java (Java 21)", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: false },
      { name: "Go", highlight: false },
      { name: "C", highlight: false },
      { name: "SQL", highlight: true },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "Backend architectures, enterprise frameworks, and client-side tooling",
    skills: [
      { name: "Spring Boot 3", highlight: true },
      { name: "Hibernate / JPA", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "NestJS", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "React.js", highlight: true },
      { name: "React Native", highlight: false },
      { name: "Redux / Context API", highlight: false },
      { name: "Jest / Unit Testing", highlight: false },
      { name: "Tailwind CSS", highlight: true },
    ],
  },
  {
    category: "Databases & Caching",
    description: "ACID transactional relational databases, NoSQL engines, and caches",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL (ACID / Row-Locking)", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Redis", highlight: true },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure, containerization, process orchestration, and CI/CD",
    skills: [
      { name: "AWS (EC2)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Kubernetes", highlight: false },
      { name: "GitHub Actions", highlight: true },
      { name: "PM2 (Cluster Mode)", highlight: true },
      { name: "Git", highlight: true },
      { name: "Linux", highlight: true },
    ],
  },
  {
    category: "Core Concepts & Architecture",
    description: "Distributed architectures, communication protocols, and engineering practices",
    skills: [
      { name: "REST APIs", highlight: true },
      { name: "Database Design", highlight: true },
      { name: "System Monitoring", highlight: true },
      { name: "Agile & Scrum", highlight: false },
      { name: "CI/CD Pipelines", highlight: true },
      { name: "Test-Driven Development", highlight: false },
      { name: "GitFlow", highlight: false },
      { name: "Cryptography (AES-256 / RSA)", highlight: true },
    ],
  },
];
