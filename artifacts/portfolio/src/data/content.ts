// ============================================================
// Portfolio content — update fields marked with TODO to finalize
// ============================================================

export const personal = {
  name: "Vaishali Goel",
  title: "Senior Software Engineer → Technical Product Manager",
  tagline:
    "15+ years building enterprise software — now channeling that depth into product leadership that bridges technical rigor with real business outcomes.",
  email: "vaishali221@gmail.com",
  github: "https://github.com/vaish222",
  linkedin: "https://www.linkedin.com/in/vaishaligoel221/",
  resumeUrl: "/resume.pdf", // TODO: upload your resume PDF and update this path
  photo: "/photo.jpg", // TODO: upload your headshot to artifacts/portfolio/public/photo.jpg
  location: "Cupertino, CA",
  availabilityTags: ["Open to PM roles"],
  stats: [
    { value: "15+", label: "years engineering" },
    { value: "6", label: "enterprise products shipped" },
    { value: "1st", label: "FWA AI Hackathon" },
    { value: "$70K", label: "cost savings delivered" },
  ],
  bio: `I'm a Senior Software Engineer with 15+ years of experience designing, modernizing, and scaling enterprise applications — most recently across Insurance and Transportation domains. I've led large-scale platform migrations, built cloud-native data pipelines, architected distributed systems, and mentored engineers through complex, high-stakes deliveries.

Over time, my role has naturally expanded beyond engineering. I've been driving product discovery, leading impact analysis, translating ambiguous business needs into requirements and roadmaps, and owning cross-functional delivery end-to-end. That dual scope — spanning business analysis, product thinking, and engineering execution — is where I've done some of my best work.

I'm now making that shift official: moving fully into Product Management. My technical fluency means I speak engineering's language, build trust quickly with development teams, and understand tradeoffs at a level most PMs can't. My product instincts come from years of sitting in discovery, caring about why features exist, and seeing firsthand how the gap between business intent and engineering execution creates waste.

I bring structure to ambiguous problems, alignment to cross-functional teams, and a track record of shipping things that actually move the needle.`,
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
      "Owned end-to-end delivery of a high-visibility enterprise print modernization initiative — driving architecture, requirements, implementation, testing, deployment, and production support. Managed vendor transition and cross-functional alignment across engineering, operations, and business partners.",
    status: "Launched" as const,
    tags: ["Enterprise Platform", "Java", "Cross-functional Delivery", "Vendor Management"],
    impact: "~$70K annual operational savings · zero-incident rollout",
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
      "Architected and led modernization of a 20+ year legacy insurance platform, eliminating 40K+ lines of DAO code through JPA migration. Spearheaded Java 11/17, Docker, GitHub, RHEL, and CI/CD adoption across the organization.",
    status: "Launched" as const,
    tags: ["Java", "JPA", "Docker", "CI/CD", "Platform Migration"],
    impact: "60% reduction in deployment effort · zero critical downtime",
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
      "Created a privacy-conscious, RAG-powered family knowledge assistant that connects schedules, deadlines, invitations, activities, meals, learning, volunteering, and household tasks through one conversational interface. Answers are grounded in source documents and clarify when information is insufficient.",
    status: "Launched" as const,
    tags: ["RAG", "Python", "Streamlit", "Pinecone", "Ollama"],
    impact: "One grounded interface for fragmented family commitments",
    year: "2026",
    link: "https://github.com/vaish222/i-got-this-ai-rag",
    eyebrow: "Privacy-first RAG",
    ownership: [
      "Product concept & use cases",
      "Knowledge architecture",
      "Grounded answer experience",
      "Quality & latency evaluation",
    ],
  },
  {
    id: 9,
    title: "StayOps AI",
    description:
      "Designed a multi-agent operations manager for self-managing short-term rental hosts. Specialized agents analyze bookings, guest messages, turnovers, and maintenance across eight properties, prioritize risks, and require human approval before consequential actions.",
    status: "Launched" as const,
    tags: ["Multi-Agent", "LangGraph", "LangChain", "HITL", "LangSmith"],
    impact: "One prioritized operations view across eight properties",
    year: "2026",
    link: "https://github.com/vaish222/stayops-ai",
    eyebrow: "Agentic operations",
    ownership: [
      "Product requirements",
      "Multi-agent architecture",
      "Human-in-the-loop safety",
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
    "Product Discovery & Strategy",
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
    "Vendor Management",
  ],
  tools: [
    "GitHub Copilot",
    "AI Agents & MCP",
    "RAG & Vector Databases",
    "Prompt Engineering",
    "Tableau",
    "JIRA / Workfront",
    "Databricks",
    "SonarQube",
    "Jenkins",
    "Git / Bitbucket",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Mutual of Omaha",
    role: "Engineer II / Engineer I / Application Systems Analyst",
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
    role: "Technical Team Lead / Onsite Coordinator / Team Lead / Software Developer",
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
