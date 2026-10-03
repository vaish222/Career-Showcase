// ============================================================
// Portfolio content — update fields marked with TODO to finalize
// ============================================================

export const personal = {
  name: "Vaishali Goel",
  title: "Product Manager | Engineering & AI",
  tagline:
    "15+ years turning complex business and technical problems into products that ship. I combine deep engineering experience with product discovery, strategy, technical architecture, and cross-functional execution across enterprise platforms and AI.",
  email: "vaishali221@gmail.com",
  github: "https://github.com/vaish222",
  linkedin: "https://www.linkedin.com/in/vaishaligoel221/",
  resumeUrl: "/resume.pdf", // TODO: upload your resume PDF and update this path
  photo: "/photo.jpg",
  location: "Cupertino, CA",
  availabilityTags: ["Open to Technical PM & AI Product roles"],
  stats: [
    { value: "15+", label: "Years Across Engineering & Product" },
    { value: "2× Winner", label: "FWA AI Hackathon + The Gen Academy Mastering Agentic AI - Demo Day" },
    { value: "$1.5M", label: "Annual Savings from Print Transformation" },
  ],
  bio: `I’m a technical product leader with 15+ years across enterprise engineering and product delivery. My career started in software engineering, but my work has increasingly centered on product discovery, requirements, system design, stakeholder alignment, prioritization, and cross-functional execution.
I’m often brought into problems where the business need is still ambiguous. I translate those problems into current/future-state workflows, product requirements, technical architecture, risks, tradeoffs, and implementation plans that engineering teams can execute.
That combination of engineering depth and product thinking lets me move comfortably between users, business stakeholders, designers, engineers, vendors, and leadership—and still go deep into APIs, data, integrations, cloud, and AI when the problem requires it.

What I bring: Product discovery · Technical strategy · 0→1 execution · AI product design · Cross-functional leadership · Enterprise platforms`,
};

export const projects = [
  {
    id: 1,
    title: "Enterprise Print Modernization",
    description:
        "Led product and technical delivery for the transition of enterprise print operations to Fiserv, turning business pressures around declining print volume and fixed operating costs into requirements, solution design, vendor integrations, testing, and production rollout.",
    status: "Launched" as const,
    tags: ["Product Strategy", "Cross-functional Delivery", "Vendor Management", "Technical Solution"],
    impact: "~$1.5M estimated annual savings",
    link: null,
  },
  {
    id: 2,
    title: "Centralized Work Intake",
    description:
        "Led discovery for a centralized enterprise intake process where user-submitted requests flowed through Workfront Fusion into JIRA epics and stories. Worked through initially ambiguous requirements with multiple business teams, aligned stakeholders on the MVP, mapped current/future-state workflows, documented field mappings and open questions, and produced developer-ready Visio and Confluence documentation.",
    status: "Launched" as const,
    tags: ["Product Discovery", "MVP Definition", "Process Design"],
    impact: "Workfront ecosystem supporting ~590 users and ~22K projects annually",
    link: null,
  },
  {
    id: 3,
    title: "Legacy Platform Modernization",
    description:
        "Architected and led modernization of a 20+ year legacy order printing fulfillment platform, eliminating 40K+ lines of DAO code through JPA migration. Spearheaded Java 11/17, Docker, GitHub, RHEL, and CI/CD adoption across the team.",
    status: "Launched" as const,
    tags: ["Java", "JPA", "Docker", "CI/CD", "Platform Migration"],
    impact: "Reduced application deployment time by over 90%, from 1–2 hours to under 5 minutes.",
    link: null,
  },
  {
    id: 4,
    title: "State-Filing Compliance Experience",
    description:
        "Designed and delivered a centralized compliance experience that replaced a fragmented spreadsheet and automation workflow with a searchable, permissioned, auditable interface. Defined requirements and mockups, integrated PerformLine API data through Workfront Fusion, and introduced filtering and clearer rule terminology for users.",
    status: "Launched" as const,
    tags: ["Product Discovery", "UX", "Compliance", "API Design"],
    impact: "Simplified regulatory-rule review and improved visibility and auditability",
    link: null,
  },
  {
    id: 5,
    title: "Warehouse Application Portfolio Strategy",
    description:
      "Helped shape the roadmap for ~10 warehouse applications by evaluating which systems should be retired, maintained, or modernized. Combined technical condition, supportability, business needs, and future-state considerations to guide portfolio priorities.",
    status: "Launched" as const,
    tags: ["Product Strategy", "Roadmapping", "Portfolio Management", "Modernization"],
    impact: "~$178,000 estimated annual savings",
    year: "2026",
    link: null,
  },
  {
    id: 6,
    title: "Cloud-Native Reporting Pipeline",
    description:
        "Designed and built serverless data pipelines using AWS Lambda, S3, Snowflake, and Tableau to automate enterprise reporting workflows that previously required significant manual effort across multiple teams.",
    status: "Launched" as const,
    tags: ["AWS Lambda", "Snowflake", "Tableau", "Data Engineering"],
    impact: "70% reduction in manual reporting effort",
    link: null,
  },
  {
    id: 7,
    title: "Technical Architecture & Integration",
    description:
      "Translated upstream customer-review data into implementation-ready technical requirements, defining the database and MuleSoft API integration needed for engineering delivery.",
    status: "Launched" as const,
    tags: ["Product discovery", "Database design", "API documentation"],
    impact: "Reduced ambiguity between business requirements and engineering implementation",
    link: null,
  },
  {
    id: 8,
    title: "Project Mentor - Future World Alliance",
    description:
        "Mentoring teams building AI Launchpad, knowledge-bot, and automation-workflow projects. Guide solution design and engineering choices, establish JIRA and project execution structure, and help teams translate ideas into actionable delivery plans.",
    status: "In Progress" as const,
    tags: ["AI Agents", "Mentorship", "Product Leadership", "LLM", "RAG", "Product and UX designing"],
    impact: "Multiple teams shipped working AI prototypes",
    year: "2026",
    link: null,
  },
];
export const shippedProjects = [
  {
    id: 12,
    title: "Pantry to Plan",
    description:
        "Turn a pantry photo into a 3 to 5 day dinner plan and a consolidated shopping list. The application combines image-based ingredient detection, a human review step, preference-aware recipe planning, pantry depletion, and shopping-list aggregation in one Streamlit workflow.",
    status: "Launched" as const,
    tags: ["Product Decisions", "Vision Parsing", "StreamLit", "Persistence", "LangSmith", "HITL"],
    impact: "The Gen Academy Demo day Winner - 1st Place",
    year: "2026",
    link: "https://pantry-to-plan-my-repo-rhkyqbttvn7lrunakbnxjq.streamlit.app/",
    eyebrow: "0→1 product",
    ownership: [
      "Image-based ingredient detection",
      "Human review step",
      "Preference-aware recipe planning",
      "Pantry depletion & shopping-list aggregation",
    ],
  },
  {
    id: 9,
    title: "CareerFolio — AI Career Intelligence Platform",
    description:
        "Conceived the product opportunity, created the strategy, PRD, high-level/low-level design, and execution plan for an AI-powered career intelligence platform. Built the working product through prompt-driven development and multi-agent AI experimentation — demonstrating hands-on product discovery, solution design, rapid prototyping, and iteration.",
    status: "Launched" as const,
    tags: ["Product Strategy", "AI/LLM", "Multi-Agent", "PRD", "Prototyping"],
    impact: "FWA AI Hackathon Winner — 1st place",
    year: "2026",
    link: "https://careerfolio-fwa.lovable.app/",
    eyebrow: "0→1 product",
    ownership: [
      "Idea to product generation",
      "Product strategy & PRD",
      "System design (HLD + LLD)",
      "Execution & delivery",
    ],
  },
  {
    id: 10,
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
    id: 11,
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
    id: 13,
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
];

export const skills = {
  product: [
    "Product Discovery",
    "Requirements, PRDs & Impact Analysis",
    "MVP definition",
    "Current / Future State Mapping",
    "User Stories & JIRA Delivery",
    "Stakeholder Alignment",
    "Cross-Functional Delivery",
    "UAT & Release Readiness",
    "Risk & Dependency Analysis",
    "Prototyping & Mockups",
    "Product Metrics & Evaluation",
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
  engineering: [
    "Java / Spring Boot",
    "Python",
    "SQL",
    "JavaScript / Vue.js",
    "REST APIs",
    "MuleSoft",
    "AWS Lambda & S3",
    "Kubernetes & CI/CD",
    "Oracle / SQL Server / Snowflake",
    "Distributed Systems & MQ",
    "JPA / Hibernate",
    "Selenium / JUnit",
    "Data Pipeline"
  ],
  delivery: [
    "GitHub/Bitbucket",
    "JIRA",
    "CI/CD",
    "Jenkins",
    "Kubernetes",
    "Visio",
    "Confluence"
  ],
};

export const experience = [
  {
    id: 1,
    company: "Mutual of Omaha",
    role: "Technical Lead — Product & Engineering",
    period: "2019 – Present",
    description:
      "Current scope spans technical product discovery, engineering delivery, enterprise integrations, modernization, and production ownership.",
    highlights: [
      "Led product and technical delivery for an enterprise print-operations transformation to Fiserv, supporting an initiative delivering ~$1.5M in annual savings.",
      "Led discovery and MVP definition for centralized work intake across a Workfront ecosystem supporting ~590 users and ~22K projects annually, mapping Workfront/Fusion/JIRA workflows and delivering implementation-ready requirements.",
      "Designed and delivered a State Filing compliance experience, transforming a fragmented spreadsheet/Fusion workflow into a searchable, permissioned, auditable product.",
      "Helped shape lifecycle strategy across ~10 warehouse applications, evaluating systems for retirement, maintenance, or modernization.",
      "Defined technical architecture and implementation requirements for API/data integrations spanning MuleSoft, enterprise databases, Workfront, and downstream systems.",
      "Maintained hands-on technical depth across Java/Spring Boot, APIs, SQL, automation, distributed systems, and production troubleshooting.",
    ],
  },
  {
    id: 2,
    company: "Tech Mahindra (formerly Mahindra Satyam)",
    role: "Technical Team Lead / Onsite Coordinator",
    period: "2008 – 2016",
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
    degree: "Mastering Agentic AI: Certification by The Gen Academy· Google 5-Day AI Agents Intensive · AWS AI Practitioner Challenge",
    period: "",
    notes: "Also: Claude Code in Action · Introduction to MCP · Claude 101 · Machine Learning Specialization (DeepLearning.AI) · RAG with LangChain (DataCamp) · FWA AI launchpad",
  },
];
