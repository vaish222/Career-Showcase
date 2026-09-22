// ============================================================
// Portfolio content — update fields marked with TODO to finalize
// ============================================================

export const personal = {
  name: "Vaishali Goel",
  title: "Senior Software Engineer | Technical Product Leader | AI Builder",
  tagline:
    "15+ years building enterprise software, leading complex technical initiatives, and translating business needs into shipped solutions. Now bringing that depth to technical product leadership across AI, platforms, and enterprise systems.",
  email: "vaishali221@gmail.com",
  github: "https://github.com/vaish222",
  linkedin: "https://www.linkedin.com/in/vaishaligoel221/",
  resumeUrl: "/resume.pdf", // TODO: upload your resume PDF and update this path
  photo: "/photo.jpg",
  location: "Cupertino, CA",
  availabilityTags: ["Open to Technical PM & AI Product roles"],
  stats: [
    { value: "15+", label: "Years in Enterprise Technology" },
    { value: "6", label: "Major Products & Platforms Shipped" },
    { value: "1st place", label: "FWA AI Hackathon" },
    { value: "$70K", label: "Annual Savings Delivered" },
  ],
  bio: `I'm a Senior Software Engineer with 15+ years of experience building and modernizing enterprise applications across insurance and transportation.
My work has increasingly expanded beyond engineering into product discovery, impact analysis, requirements, solution design, stakeholder alignment, and cross-functional delivery. I've often worked in the space between business intent and engineering execution — turning ambiguous problems into solutions teams can actually ship.
Today, I'm focused on Technical Product Management and AI Product roles, where I can combine deep engineering fluency with product thinking, customer outcomes, and execution.

What I bring: Technical depth · Product discovery · AI solution design · Cross-functional leadership · Enterprise delivery`,
};

export const projects = [
  {
    id: 1,
    title: "CareerFolio — AI Career Intelligence Platform",
    description:
      "Conceived the product opportunity, created the strategy, PRD, high-level/low-level design, and execution plan for an AI-powered career intelligence platform. Built the working product through prompt-driven development and multi-agent AI experimentation — demonstrating hands-on product discovery, solution design, rapid prototyping, and iteration.",
    status: "Launched" as const,
    tags: ["Product Strategy", "AI/LLM", "Multi-Agent", "PRD", "Prototyping"],
    impact: "FWA AI Hackathon Winner — 1st place",
    year: "2024",
    link: "https://careerfolio-fwa.lovable.app/",
  },
  {
    id: 2,
    title: "Enterprise Print Modernization",
    description:
      "Led the modernization of a high-visibility enterprise print workflow, translating business and operational requirements into architecture, implementation, testing, vendor coordination, and production rollout.",
    status: "Launched" as const,
    tags: ["Enterprise Platform", "Java", "Cross-functional Delivery", "Vendor Management"],
    impact: "~$70K+ annual operational savings · Zero-incident rollout",
    year: "2023",
    link: null,
  },
  {
    id: 3,
    title: "Cloud-Native Reporting Pipeline",
    description:
      "Designed and built serverless data pipelines using AWS Lambda, S3, Snowflake, and Tableau to automate enterprise reporting workflows that previously required significant manual effort across multiple teams.",
    status: "Launched" as const,
    tags: ["AWS Lambda", "Snowflake", "Tableau", "Data Engineering"],
    impact: "70% reduction in manual reporting effort",
    year: "2022",
    link: null,
  },
  {
    id: 4,
    title: "AI Project Mentor — Future World Alliance",
    description:
      "Mentoring teams building AI Launchpad, knowledge-bot, and automation-workflow projects. Guide solution design and engineering choices, establish JIRA and project execution structure, and help teams translate ideas into actionable delivery plans.",
    status: "In Progress" as const,
    tags: ["AI Agents", "Mentorship", "Product Leadership", "LLM"],
    impact: "Multiple teams shipped working AI prototypes",
    year: "2024",
    link: null,
  },
  {
    id: 5,
    title: "Legacy Platform Modernization",
    description:
      "Architected and led modernization of a 20+ year legacy order printing fulfillment platform, eliminating 40K+ lines of DAO code through JPA migration. Spearheaded Java 11/17, Docker, GitHub, RHEL, and CI/CD adoption across the team.",
    status: "Launched" as const,
    tags: ["Java", "JPA", "Docker", "CI/CD", "Platform Migration"],
    impact: "Reduced application deployment time by over 90%, from 1–2 hours to under 5 minutes.",
    year: "2021",
    link: null,
  },
  {
    id: 6,
    title: "State-Filing Compliance Experience",
    description:
      "Gathered user needs, created UI mockups, defined API and data requirements, implemented filters and rule visibility, and coordinated customer acceptance testing and release readiness for a regulatory compliance workflow.",
    status: "Launched" as const,
    tags: ["Product Discovery", "UX Mockups", "Compliance", "API Design"],
    impact: "Streamlined state-filing process across multiple markets",
    year: "2023",
    link: null,
  },
];

export const shippedProjects = [
  {
    ...projects[0],
    eyebrow: "0→1 AI product",
    ownership: [
      "Product strategy & PRD",
      "System design (HLD + LLD)",
      "Execution & delivery",
      "Multi-agent AI prototyping",
    ],
  },
  {
    id: 7,
    title: "AI Product Decision Assistant",
    description:
      "Built a transparent decision-support product that helps teams define a decision, capture project and enterprise context, generate evaluation criteria, compare options, and reach a recommendation. The experience clearly separates user facts, AI inferences, validated ratings, and deterministic weighted calculations.",
    status: "Launched" as const,
    tags: ["Product Decisions", "AI Evaluation", "React", "OpenAI", "Ollama"],
    impact: "Explainable recommendations with deterministic scoring",
    year: "2026",
    link: "https://github.com/vaish222/ai-product-decision-assistant",
    eyebrow: "Explainable AI",
    ownership: [
      "Decision workflow design",
      "Enterprise constraint modeling",
      "AI criteria generation",
      "Transparent scoring logic",
    ],
  },
  {
    id: 8,
    title: "I Got This — What's Next?",
    description:
      "Built a RAG assistant that grounds answers in family source documents and evaluates whether retrieved evidence is strong enough to answer, rather than generating unsupported responses.",
    status: "Launched" as const,
    tags: ["RAG", "Python", "Streamlit", "Pinecone", "Ollama"],
    impact: "One grounded interface for fragmented family commitments",
    year: "2026",
    link: "https://github.com/vaish222/i-got-this-ai-rag",
    eyebrow: "Privacy-first RAG",
    ownership: [
      "Product concept & use cases",
      "Hybrid retrieval architecture",
      "Grounding & evidence gating",
      "RAG evaluation",
    ],
  },
  {
    id: 9,
    title: "StayOps AI",
    description:
      "Designed an AI operations manager that prioritizes work across eight properties while explicitly separating recommendations from consequential actions requiring human approval.",
    status: "Launched" as const,
    tags: ["Multi-Agent", "LangGraph", "LangChain", "HITL", "LangSmith"],
    impact: "One prioritized operations view across eight properties",
    year: "2026",
    link: "https://github.com/vaish222/stayops-ai",
    eyebrow: "Agentic operations",
    ownership: [
      "Product requirements",
      "Workflow & agent boundaries (multi agent)",
      "Risk/escalation design",
      "Human-in-the-loop controls",
      "Evaluation framework",
    ],
  },
  {
    id: 10,
    title: "Pantry to Plan",
    description:
        "Turn a pantry photo into a 3 to 5 day dinner plan and a consolidated shopping list. The application combines image-based ingredient detection, a human review step, preference-aware recipe planning, pantry depletion, and shopping-list aggregation in one Streamlit workflow.",
    status: "Launched" as const,
    tags: ["Product Decisions", "Vision Parsing", "StreamLit", "Persistence", "LangSmith", "HITL"],
    impact: "Pantry to Plan converts a pantry photo into a three to five day dinner plan and a consolidated shopping list",
    year: "2026",
    link: "https://github.com/ericsu13/pantry-to-plan",
    eyebrow: "Agentic Operations",
    ownership: [
      "Product requirements",
      "Multi agent and MCP",
      "Risk/escalation design",
      "Human-in-the-loop controls",
      "Evaluation framework",
    ],
  },
];

export const skills = {
  engineering: [
    "Java / Spring Boot",
    "Python",
    "SQL",
    "JavaScript / Vue.js",
    "REST APIs",
    "MuleSoft",
    "AWS Lambda & S3",
    "Docker & CI/CD",
    "Oracle / SQL Server / Snowflake",
    "Distributed Systems & MQ",
    "JPA / Hibernate",
    "Selenium / JUnit",
  ],
  product: [
    "Product Discovery",
    "Requirements & Impact Analysis",
    "Current / Future State Mapping",
    "User Stories & JIRA Delivery",
    "Stakeholder Alignment",
    "Cross-Functional Delivery",
    "UAT & Release Readiness",
    "Risk & Dependency Analysis",
    "Prototyping & Mockups",
    "Product Analytics & Reporting",
    "Agile / Scrum",
    "Prioritization"
  ],
  aiProduct: [
    "RAG",
    "AI Agents",
    "LLM Evaluation",
    "Prompt Engineering",
    "MCP",
    "Vector Databases",
    "Human-in-the-Loop",
    "Evals",
    "Fine-tuning"
  ],
  delivery: [
    "GitHub/Bitbucket",
    "JIRA",
    "CI/CD",
    "Jenkins",
    "Docker",
    "Tableau",
    "Snowflake"
  ],
};

export const experience = [
  {
    id: 1,
    company: "Mutual of Omaha",
    role: "Engineer II — Product & Engineering",
    period: "Feb 2019 – Present",
    description:
      "Current scope spans business analysis, product discovery, engineering delivery, testing, and production support across enterprise Insurance applications.",
    highlights: [
      "Led discovery and impact analysis, translating ambiguous business requests into requirements, current/future-state flows, risks, mockups, JIRA stories, and implementation plans",
      "Owned architecture, implementation, and delivery of enterprise print modernization — $70K annual savings, zero-incident rollout",
      "Designed cloud-native AWS Lambda/Snowflake/Tableau pipelines, reducing manual reporting effort by 70%",
      "Architected Selenium/Jenkins automation, reducing manual validation by 80% and post-production defects by 40%",
      "Led platform modernization to Java 11/17, Docker, GitHub, RHEL, and CI/CD — zero critical downtime",
      "Optimized distributed integrations (REST APIs, MuleSoft, MQ), improving response times by 35%",
    ],
  },
  {
    id: 2,
    company: "Tech Mahindra (formerly Mahindra Satyam)",
    role: "Technical Team Lead / Onsite Coordinator",
    period: "Jan 2008 – Feb 2016",
    description:
      "Led globally distributed engineering teams delivering enterprise workforce-management capabilities supporting Union Pacific Railroad operations across 23 states.",
    highlights: [
      "Led development of enterprise workforce management platform enabling employee licensing, compliance, incident reporting, training, and performance management",
      "Designed and architected scalable Java/Spring/Hibernate applications for high-volume transportation workflows",
      "Engineered resilient distributed processing solutions using JMS messaging and Spring Quartz scheduling",
      "Reduced infrastructure utilization through Domain-Driven Design principles and separation of infrastructure responsibilities",
      "Modernized SDLC with Maven-based builds and reusable Apache Wicket components, accelerating feature delivery",
    ],
  },
];

export const education = [
  {
    institution: "University of Nebraska at Omaha",
    degree: "M.S., Management Information Systems (Data Analytics)",
    period: "2018 – 2021",
    notes: "Graduate Certificate, Systems Analysis & Design",
  },
  {
    institution: "Pt. Ravishankar Shukla University",
    degree: "Bachelor of Engineering, Computer Science",
    period: "2003 – 2007",
    notes: "",
  },
  {
    institution: "Certifications & AI Credentials",
    degree: "FWA AI Hackathon Winner · Google 5-Day AI Agents Intensive · AWS Scholars Program (AI Productivity App)",
    period: "",
    notes: "Also: Claude Code in Action · Introduction to MCP · Sun Certified Java Developer (SCJP) · Machine Learning Specialization (DeepLearning.AI) · RAG with LangChain",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "What 15 Years of Engineering Taught Me About Product",
    excerpt:
      "The patterns I kept seeing — where engineering and product diverge, and where they must align — shaped how I think about building the right things, not just building things right.",
    date: "2024",
    readTime: "6 min read",
    tags: ["Career", "Product Management", "Engineering"],
    url: null,
  },
  {
    id: 2,
    title: "From Code Reviews to Product Discovery: Skills That Transfer",
    excerpt:
      "Technical depth isn't a liability in product — it's a superpower. Here's how the skills I built as an engineer map directly onto the work I now do as a product leader.",
    date: "2024",
    readTime: "5 min read",
    tags: ["Career Transition", "Product Management"],
    url: null,
  },
  {
    id: 3,
    title: "Why Ambiguity Is a Product Feature, Not a Bug",
    excerpt:
      "The best discovery work doesn't eliminate ambiguity — it turns it into a shared understanding. A framework I use to bring structure to the messiest early-stage problems.",
    date: "2024",
    readTime: "5 min read",
    tags: ["Product Discovery", "Frameworks"],
    url: null,
  },
  {
    id: 4,
    title: "AI Agents in the Enterprise: What I Learned Building at a Hackathon",
    excerpt:
      "Winning the FWA AI Hackathon taught me as much about product thinking as it did about AI. What happens when you have to go from idea to working demo in 48 hours.",
    date: "2024",
    readTime: "7 min read",
    tags: ["AI", "Product", "Hackathon"],
    url: null,
  },
];
