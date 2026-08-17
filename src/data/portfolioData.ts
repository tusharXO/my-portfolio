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
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  hasArchitectureDiagram: boolean;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
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
  role: "Software Developer | Full-Stack & Systems Engineer",
  availabilityStatus: "Available for Full-Time SWE Roles (Open to Relocation)",
  location: "New Delhi, India (Open to relocation)",
  email: "iamtushar2004@gmail.com",
  phone: "(+91) 7011106209",
  github: "https://github.com/tusharXO",
  linkedin: "https://www.linkedin.com/in/tusharkumarx/",
  bio: "Results-oriented Software Developer with a passion for creating innovative solutions, cloud-hosted infrastructure, and real-time systems using JavaScript, React, Node.js, and SQL databases.",
  fullBio:
    "Results-oriented Software Developer with a passion for creating innovative solutions, cloud-hosted infrastructure, and real-time systems using JavaScript, React, Node.js, and SQL databases. Proven track record in startup environments creating intuitive user dashboards, optimizing data workflows, and deploying resilient applications on AWS (EC2). Driven to apply analytical skills to develop efficient, data-driven applications.",
  resumeUrl: "/Tushar_Kumar_Resume.pdf",
};

export const METRIC_HIGHLIGHTS: MetricItem[] = [
  {
    id: "payment-throughput",
    value: "1,000+",
    label: "Daily Payin / Payout Transactions",
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
    highlightTag: "High-Throughput FinTech Engine",
    description:
      "Architecting core payment processing pipelines, hybrid database ledger persistence, and cryptographic security across cloud infrastructure.",
    achievements: [
      "Engineered High-Throughput Payment Engine: Architected core payment processing pipelines handling 1,000+ daily payin/payout transactions, integrating multi-rail payment gateways with idempotent webhook listeners to ensure zero double-spend or transaction dropping during peak traffic spikes.",
      "Designed Hybrid Persistence Architecture: Structured ACID-compliant MySQL schemas with strict isolation levels and row-level locking for wallet ledger balances, paired with MongoDB for asynchronous event-driven audit logging, enabling low-overhead query traces across financial workflows.",
      "Hardened Multi-Layer Security & Cryptography: Implemented fine-grained OTP authentication with rate-limiting and encrypted sensitive payloads end-to-end using AES-256/RSA cryptography across all REST endpoints to mitigate MITM attacks and comply with financial security standards.",
      "Built Dynamic Role-Based Multi-Dashboard Suite: Developed RBAC-enforced administrative and end-user dashboards featuring contextual UI layouts, dynamic permission gating, and granular transaction access controls across distinct user tiers.",
      "Automated Financial Reporting & Reconciliation Engine: Built an asynchronous batch reporting worker generating downloadable, audit-ready financial summaries (PDF/CSV/Excel) for admins and account-level reconciliation statements for end-users without blocking primary API threads.",
      "Deployed AI-Driven Proactive Telegram Alerting: Integrated a real-time Telegram monitoring bot backed by automated error pattern detection to flag unauthorized access attempts, transaction failures, and server anomalies, reducing Mean Time to Resolution (MTTR) to <5 minutes.",
      "Optimized Infrastructure & Process Load Balancing: Deployed node microservices via PM2 Cluster Mode on cloud instances, utilizing IPC process coordination and memory management to achieve continuous sub-20ms API response latency and maximum CPU core utilization.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "PM2",
      "AWS",
      "Webhooks",
      "AES-256 / RSA Cryptography",
      "Telegram Bot API",
    ],
    metrics: "1,000+ daily transactions, <5 min MTTR, sub-20ms API response",
  },
  {
    id: "airfleet",
    company: "AirFleet Managers",
    role: "Web Developer Intern",
    period: "02/2025 – 08/2025",
    location: "Gurugram, Haryana",
    type: "Internship",
    highlightTag: "Aviation Asset Management & Real-Time Comms",
    description:
      "Built enterprise aviation fleet management portal with multi-tenant data isolation, real-time messaging, and high-density automated export engines.",
    achievements: [
      "Designed an Aviation Asset Management Portal with granular Role-Based Access Control (RBAC), enforcing multi-tenant data isolation and dynamic dashboard permission models across Airlines, Lessors, and MROs.",
      "Engineered a low-latency messaging infrastructure supporting direct and group channels for instant cross-organization communications, eliminating reliance on external messaging tools.",
      "Implemented automated report generation engine capable of rendering production-ready, stakeholder-grade PDFs, PPTs, and Excel sheets with embedded analytical charts, optimizing rendering pipelines to keep file sizes under 10MB even for multi-page datasets.",
      "Developed interactive real-time data visualizers and dynamic Gantt charts to track project milestones, utilizing live data feeds and client-side role filtering to restrict internal progress views to staff while keeping external stakeholder dashboards clean.",
      "Containerized Redis and core microservices via Docker, standardizing multi-environment CI/CD deployments and trimming base image sizes down to <250MB.",
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
    metrics: "Sub-15ms latency, <10MB export engine, <250MB container images",
  },
  {
    id: "sanrachna",
    company: "Sanrachna Foundation",
    role: "Web Developer Intern",
    period: "06/2024 – 07/2024",
    location: "South West Delhi, Delhi",
    type: "Internship",
    highlightTag: "Digital Publication & Gamified UX",
    description:
      "Re-engineered high-traffic digital publication platform, dynamic automated content categorization pipelines, and gamified visual storytelling.",
    achievements: [
      "Redesigned a publication portal that boosted user engagement by 30%, reaching over 10,000 monthly active users.",
      "Automated content distribution pipelines by implementing dynamic categorization and integrated newsletter workflows, reducing manual efforts by 50%.",
      "Developed a centralized planning tool, reducing editorial turnaround by 35%.",
      "Created a gamified web experience that transformed abstract psychological topics into accessible visual narratives, raising engagement duration by 40%.",
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
    period: "08/2025 – Present",
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
    id: "nexus-rtc",
    title: "NEXUS RTC",
    tagline: "Cross-Platform Enterprise Desktop Collaboration Suite",
    category: "Real-Time Systems & Desktop Engineering",
    featured: true,
    description:
      "A high-performance desktop collaboration suite built with Electron, React, and TypeScript, delivering low-latency peer-to-peer real-time video, audio, and desktop screen sharing with a high-throughput WebSockets signaling cluster.",
    detailedPoints: [
      "Engineered a cross-platform desktop application using Electron, React, and TypeScript, delivering low-latency peer-to-peer real-time video, audio, and desktop screen sharing.",
      "Developed a high-performance signaling server using Node.js, Express, and WebSockets, optimizing WebRTC communication by handling 10,000+ daily SDP and ICE candidate transmissions.",
      "Integrated native OS screen-sharing capabilities using Electron's desktopCapturer API and IPC contextBridge communication for dynamic source selection with real-time frame previews.",
      "Built real-time media controls enabling dynamic track enabling/disabling for microphone muting and camera toggles without tearing down peer connections.",
      "Containerized backend services with multi-stage Docker builds on Linux base images, ensuring predictable deployment environments and seamless network port exposure.",
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
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Daily Transmissions", value: "10,000+ SDP/ICE" },
      { label: "Screen Capture", value: "Native OS API" },
      { label: "Signaling Server", value: "Node + WebSockets" },
      { label: "Packaging", value: "Multi-stage Docker" },
    ],
    githubUrl: "https://github.com/tusharXO",
    demoUrl: "https://github.com/tusharXO",
    hasArchitectureDiagram: true,
    architectureHighlights: [
      {
        title: "1. WebSockets Signaling & Session Negotiation",
        description:
          "Node.js & Express WebSocket signaling cluster handles secure peer handshakes, room orchestration, and 10,000+ daily SDP Offer/Answer exchanges.",
      },
      {
        title: "2. P2P WebRTC Mesh & ICE Traversal",
        description:
          "STUN/TURN candidate gathering establishes direct peer-to-peer UDP channels with dynamic candidate pairing for low-latency transmission.",
      },
      {
        title: "3. Electron Desktop Capture & IPC Bridge",
        description:
          "Native screen capture via Electron desktopCapturer API and secure contextBridge communication for dynamic source selection and real-time previews.",
      },
      {
        title: "4. Real-Time Media Controls & Docker Deployments",
        description:
          "Dynamic audio/video track toggling without tearing down sessions, packaged via multi-stage Docker builds on optimized Linux base images.",
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for systems & applications",
    skills: [
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: false },
      { name: "Go", highlight: false },
      { name: "C", highlight: false },
      { name: "SQL", highlight: true },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "Frontend & backend frameworks and modern application libraries",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Redux / Context API", highlight: false },
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Jest / Unit Testing", highlight: false },
      { name: "Tailwind CSS", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Electron", highlight: true },
      { name: "Framer Motion", highlight: false },
    ],
  },
  {
    category: "Databases & Caching",
    description: "ACID transactional databases, NoSQL engines, and in-memory caches",
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
    description: "Distributed architectures, communication protocols, and security",
    skills: [
      { name: "REST APIs", highlight: true },
      { name: "Database Design", highlight: true },
      { name: "System Monitoring", highlight: true },
      { name: "WebSockets", highlight: true },
      { name: "WebRTC", highlight: true },
      { name: "Cryptography (AES-256 / RSA)", highlight: true },
      { name: "Webhooks (Idempotent)", highlight: true },
      { name: "Role-Based Access Control (RBAC)", highlight: true },
    ],
  },
];
