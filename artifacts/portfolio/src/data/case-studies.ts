import { projects, shippedProjects } from "./content";

export type CaseStudy = {
  slug: string;
  title: string;
  status: string;
  overview: string;
  problem: string;
  role: string;
  approach: string;
  decisions: string[];
  technicalContext: string;
  impact: string;
  learned: string;
  tags: string[];
  section: "projects" | "shipped";
  externalLink?: string;
  detailSections?: { heading: string; blocks: (string | string[])[] }[];
};

const print = projects[0];
const intake = projects[1];
const legacy = projects[2];
const compliance = projects[3];
const warehouse = projects[4];
const reporting = projects[5];
const integration = projects[6];
const mentoring = projects[7];
const pantry = shippedProjects[0];
const career = shippedProjects[1];

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-print-modernization",
    title: print.title,
    status: print.status,
    overview: "Led product and technical delivery for an enterprise print transformation spanning discovery, requirements, vendor integration, testing, and production rollout.",
    problem: "Enterprise print volumes were declining while fixed operational costs remained high. The organization was also preparing for a facility transition, making it increasingly difficult to justify continued investment in internal print infrastructure. Any transition had to preserve business continuity while moving complex production workflows to an external vendor.",
    role: "Led product and technical delivery across discovery, requirements, solution design, engineering coordination, vendor integration, testing, deployment, and production rollout.",
    approach: "I worked with business leaders, operations, engineering, QA, managers, directors, and Fiserv to understand the business drivers, existing workflows, technical dependencies, and migration risks. Because multiple systems and teams were involved, I broke the transition into manageable changes and ensured existing internal printing could continue while vendor workflows were validated.",
    decisions: [
      "Balance migration speed with business continuity",
      "Maintain existing print paths until external workflows were proven",
      "Define requirements and testing across multiple environments",
      "Coordinate dependencies between internal teams and Fiserv",
      "Design the transition around long-term operational sustainability, not just technical migration",
    ],
    technicalContext: "Enterprise order-processing systems, vendor integrations, batch processing, Control-M, file transfers, Java applications, and production print workflows.",
    impact: "Supported an enterprise transformation estimated to deliver ~$1.5M in annual savings while shifting the organization from a largely fixed-cost print model toward a more flexible variable-cost model.",
    learned: "Large product decisions are rarely purely technical. The best solution must balance economics, operational risk, technical feasibility, customer impact, and organizational change.",
    tags: print.tags,
    section: "projects",
  },
  {
    slug: "centralized-work-intake",
    title: intake.title,
    status: intake.status,
    overview: "Led discovery and MVP definition for a centralized enterprise intake process connecting user requests to JIRA work.",
    problem: "The organization wanted a centralized intake process where users could submit work through a form and have Workfront Fusion automatically create the appropriate JIRA epics and stories. The challenge was that the business teams themselves were still determining what the form, workflow, field mappings, and MVP should look like.",
    role: "Led product discovery and requirements definition across multiple business teams and translated an ambiguous idea into an implementation-ready workflow for engineering.",
    approach: "Rather than waiting for requirements to become finalized, I created structure around the ambiguity. I held working sessions with stakeholders, mapped the process visually in Visio, and used the flow to expose missing decisions, dependencies, and open questions. I separated MVP needs from future enhancements and maintained a Confluence page containing the current state, proposed future state, decisions, field mappings, assumptions, and unresolved questions.",
    decisions: [
      "Define the minimum information required for the initial intake form",
      "Separate MVP requirements from future enhancements",
      "Determine how form fields map into JIRA epics and stories",
      "Clarify which decisions belonged to the business versus the integration layer",
      "Establish one shared source of truth for requirements and open questions",
    ],
    technicalContext: "Workfront, Workfront Fusion, JIRA, workflow automation, field mappings, Visio process diagrams, and Confluence documentation.",
    impact: "Created a developer-ready definition of a workflow operating within a Workfront ecosystem supporting approximately 590 users and 22K projects annually. The documentation gave business and engineering teams a common understanding of what needed to be built and reduced ambiguity before implementation.",
    learned: "Ambiguity becomes manageable once assumptions and unanswered questions are made visible. Visual workflows were especially effective because stakeholders could react to something concrete rather than trying to agree on an abstract process.",
    tags: intake.tags,
    section: "projects",
  },
  {
    slug: "legacy-platform-modernization",
    title: legacy.title,
    status: legacy.status,
    overview: "Architected and led modernization of a 20+ year legacy order printing fulfillment platform, eliminating 40K+ lines of DAO code through JPA migration.",
    problem: "A critical enterprise order-processing platform had been running for more than 20 years. Years of accumulated code, legacy database access patterns, aging dependencies, and complex deployment processes made the application harder to maintain and slower to change.",
    role: "Helped lead the modernization effort across application architecture, database access, deployment, platform upgrades, and production reliability.",
    approach: "Rather than treating modernization as a single rewrite, we reduced complexity incrementally. I worked on removing obsolete code, converting legacy prepared statements to JPA, modernizing Java and deployment patterns, and improving the way batch components were packaged and released. I also looked for changes that produced immediate developer and operational value while reducing future maintenance burden.",
    decisions: [
      "Modernize incrementally instead of pursuing a risky full rewrite",
      "Remove unused code before adding new architecture",
      "Replace legacy database access with maintainable JPA patterns",
      "Simplify deployment through packaged artifacts",
      "Preserve stability while modernizing a business-critical system",
    ],
    technicalContext: "Java, Spring, JPA/Hibernate, SQL, batch processing, Docker, CI/CD, RHEL, GitHub, and enterprise integrations.",
    impact: "Removed 40K+ lines of legacy DAO code and reduced application deployment time by more than 90% — from roughly 1–2 hours to under 5 minutes.",
    learned: "Modernization does not always require a dramatic rewrite. Consistently removing complexity, improving deployment, and replacing fragile patterns can deliver meaningful value while keeping a critical platform stable.",
    tags: legacy.tags,
    section: "projects",
  },
  {
    slug: "state-filing-compliance-experience",
    title: compliance.title,
    status: compliance.status,
    overview: "Designed and delivered a searchable, permissioned compliance experience to replace a fragmented spreadsheet and automation workflow.",
    problem: "Users relied on a fragmented process involving spreadsheets, Workfront Fusion, and multiple steps to understand and manage state-filing compliance rules. Information was difficult to search and interpret, and visibility into the rules needed improvement.",
    role: "Owned requirements, workflow design, UI concepts, API/data integration decisions, implementation, testing, and release readiness for the compliance-rules experience.",
    approach: "I first worked with users to understand how they reviewed rules and where the existing process created friction. I created mockups and translated those needs into a centralized experience. The solution pulled regulatory-rule information from PerformLine, mapped the data through Workfront Fusion, and surfaced it in an interface where users could search, filter, and view understandable rule information.",
    decisions: [
      "Replace a fragmented workflow with one centralized experience",
      "Make compliance rules searchable and filterable",
      "Present understandable names instead of system abbreviations",
      "Support visibility into rule details, notes, and terms",
      "Include user validation before production release",
    ],
    technicalContext: "PerformLine APIs, Workfront Fusion, webhooks, UI development, data mapping, filters, compliance data, and customer acceptance testing.",
    impact: "Simplified regulatory-rule review and improved visibility, usability, and auditability by moving users away from a fragmented spreadsheet-driven workflow.",
    learned: "Technical integration is only part of a product solution. Translating system-level data into terminology and interactions users actually understand can create just as much value as the underlying API work.",
    tags: compliance.tags,
    section: "projects",
  },
  {
    slug: "warehouse-application-portfolio-strategy",
    title: warehouse.title,
    status: warehouse.status,
    overview: "Helped shape the roadmap for ~10 warehouse applications by evaluating which systems should be retired, maintained, or modernized.",
    problem: "The team supported a portfolio of approximately 10 warehouse applications with different levels of age, business value, technical debt, and support needs. Continuing to treat every application the same made it difficult to determine where modernization investment should go.",
    role: "Helped shape the portfolio roadmap by evaluating applications and contributing recommendations about which systems should be retired, maintained, or modernized.",
    approach: "I looked at each application through both a technical and business lens: current usage, supportability, aging technology, operational importance, maintenance burden, and potential future direction. Rather than focusing on individual enhancements alone, we considered the portfolio as a whole and identified different lifecycle strategies for different applications.",
    decisions: [
      "Identify systems suitable for retirement",
      "Separate applications needing maintenance from those needing modernization",
      "Consider business importance alongside technical condition",
      "Reduce unnecessary investment in low-value or aging systems",
      "Focus modernization effort where it would create the most long-term value",
    ],
    technicalContext: "Approximately 10 enterprise warehouse applications spanning legacy platforms, web applications, integrations, batch workflows, infrastructure, and vendor-supported systems.",
    impact: "Created clearer portfolio direction across approximately 10 applications and contributed to decisions around retirement, maintenance, and modernization, with approximately $178K in estimated annual savings associated with the portfolio strategy.",
    learned: "Product strategy is also about deciding what not to build. Portfolio management requires balancing customer value, technical health, operating cost, and future investment rather than treating every system as equally important.",
    tags: warehouse.tags,
    section: "projects",
  },
  {
    slug: "cloud-native-reporting-pipeline",
    title: reporting.title,
    status: reporting.status,
    overview: "Built serverless data pipelines to automate enterprise reporting across teams.",
    problem: "Business reporting relied on processes that required significant manual data preparation and movement. The team needed a scalable way to move Workfront data into an analytics environment that could support Tableau reporting.",
    role: "Helped design and build the reporting architecture and data pipeline while learning and applying AWS serverless technologies to solve the problem.",
    approach: "I mapped the reporting architecture and worked through how data should move from Workfront into the reporting platform. I built an AWS Lambda flow that pulled data from the Workfront API, stored JSON in S3, and triggered a second transformation step to convert the data into Parquet for downstream reporting. I also worked with Snowflake and Tableau to enable reporting access and queries.",
    decisions: [
      "Automate recurring data movement rather than rely on manual processes",
      "Separate ingestion from transformation",
      "Store raw data in S3 before downstream processing",
      "Convert JSON into analytics-friendly Parquet",
      "Build reusable reporting infrastructure rather than one-off reports",
    ],
    technicalContext: "AWS Lambda, Amazon S3, Python, Workfront APIs, JSON, Parquet, Snowflake, SQL, and Tableau.",
    impact: "Created a serverless reporting pipeline that supported enterprise analytics and contributed to an estimated 70% reduction in manual reporting effort.",
    learned: "Good data products are not just dashboards. Reliable reporting requires designing the ingestion, transformation, storage, and access layers so that business users can trust the information they receive.",
    tags: reporting.tags,
    section: "projects",
  },
  {
    slug: "technical-architecture-and-integration",
    title: integration.title,
    status: integration.status,
    overview: "Translated customer-review data needs into implementation-ready technical requirements.",
    problem: "A customer-review integration needed to be built from upstream data provided by another team, but engineering did not yet have clear implementation requirements for how the data should be stored or exposed.",
    role: "Translated upstream business and data requirements into developer-ready technical requirements covering database design and API integration.",
    approach: "I reviewed the source data and worked backward from what the consuming application needed. I documented how the information should be structured, what new database components were required, and how the integration should be exposed through MuleSoft. The goal was to reduce the interpretation engineering would have to do during implementation.",
    decisions: [
      "Translate source-system data into an application-ready data model",
      "Define database requirements before implementation",
      "Clarify the responsibilities of the MuleSoft integration layer",
      "Resolve questions early rather than during development",
      "Give engineering enough detail to begin implementation confidently",
    ],
    technicalContext: "Customer-review data, REST APIs, MuleSoft, relational databases, data mapping, technical requirements, and enterprise integration.",
    impact: "Reduced ambiguity between business requirements and engineering implementation by providing a clear technical definition of the integration before development began.",
    learned: "One of the most valuable things a Technical PM can do is reduce the number of decisions engineers have to rediscover during implementation without dictating how every line of the solution should be built.",
    tags: integration.tags,
    section: "projects",
  },
  {
    slug: "ai-project-mentor-future-world-alliance",
    title: mentoring.title,
    status: mentoring.status,
    overview: "Mentoring teams building AI Launchpad, knowledge-bot, and automation-workflow projects.",
    problem: "Volunteer teams were building AI products including an AI Launchpad, knowledge bot, and automation workflows. Teams had different levels of AI and software-development experience and needed structure around product definition, technical decisions, and delivery.",
    role: "Serve as a technical mentor, product/project lead, and engineering advisor, helping teams move from initial ideas toward working AI prototypes.",
    approach: "I helped teams clarify the user problem before choosing technology, then worked with them on solution architecture, project breakdown, and execution. I established JIRA structures for projects, helped break ideas into actionable work, reviewed proposed technical approaches, asked questions about tradeoffs, and mentored team members when they encountered implementation challenges.",
    decisions: [
      "Start with the user problem instead of the AI technology",
      "Define manageable MVPs before expanding scope",
      "Match AI architecture to the actual use case",
      "Create clear ownership and execution structure",
      "Encourage evaluation and validation instead of relying only on demo quality",
    ],
    technicalContext: "AI agents, LLM applications, RAG, workflow automation, JIRA, product discovery, architecture design, prompt engineering, and AI-assisted development.",
    impact: "Helped multiple teams move from ideas to working AI prototypes while improving structure around product thinking, solution design, and execution.",
    learned: "AI projects can become technology-led very quickly. The most important product discipline is often asking whether AI is actually solving the user's problem, what should remain deterministic, where human review belongs, and how the team will know whether the system is working.",
    tags: mentoring.tags,
    section: "projects",
  },
  {
    slug: "careerfolio-ai-career-intelligence-platform",
    title: career.title,
    status: career.status,
    overview: "Conceived and built an AI-powered career intelligence product, from strategy and PRD to system design and a working prototype.",
    problem: "The product opportunity called for a practical way to turn an AI career-intelligence concept into a working experience.",
    role: "Owned product strategy, PRD, high-level and low-level design, execution planning, prototyping, and iteration.",
    approach: "Used prompt-driven development and multi-agent AI experimentation to move from product discovery through solution design to a working product.",
    decisions: [
      "Define the product strategy and PRD before building",
      "Plan both high-level and low-level system design",
      "Iterate through working prototypes and AI experimentation",
    ],
    technicalContext: "The product was developed using AI/LLM and multi-agent experimentation, with a high-level and low-level design guiding implementation.",
    impact: career.impact,
    learned: "Working prototypes make product assumptions and technical tradeoffs concrete enough to evaluate and improve.",
    tags: career.tags,
    section: "shipped",
    externalLink: career.link,
    detailSections: [
      {
        heading: "At a Glance",
        blocks: [[
          "Role: Product Creator / Strategy & AI Product Lead",
          "Type: 0→1 AI Product",
          "Impact: FWA AI Hackathon Winner — 1st Place",
          "Core Concept: Resume → Mirror · Map · Motion",
          "Architecture: Eight-agent AI workflow",
        ]],
      },
      {
        heading: "The Problem",
        blocks: [
          "The original idea was to create an AI portfolio builder.",
          "But during discovery, I realized the deeper problem was not that professionals lacked tools for creating portfolio websites.",
          "The real problem was that people often do not know how to turn their experience into credible evidence of what they can do.",
          "They can list responsibilities and projects, but struggle to communicate impact, identify differentiators, create strong career stories, or connect their experience to future opportunities. CareerFolio shifted from “build a portfolio” to “build career credibility.”",
        ],
      },
      {
        heading: "My Role",
        blocks: [
          "I conceived the product opportunity and owned:",
          [
            "product strategy",
            "problem definition",
            "PRD",
            "high-level design",
            "low-level design",
            "execution planning",
            "AI workflow design",
            "rapid prototyping",
            "MVP prioritization",
            "UX iteration",
          ],
        ],
      },
      {
        heading: "How I Approached It",
        blocks: [
          "The first important decision was to challenge the original solution.",
          "Instead of asking:",
          "“How do we build a better portfolio generator?”",
          "I reframed the question:",
          "“How do we help people prove what they can do using evidence they already have?”",
          "That led to the Mirror · Map · Motion framework:",
          "Mirror — What does my experience actually say about me?",
          "Map — What roles and directions fit that evidence?",
          "Motion — What should I do next to move toward those opportunities?",
          "CareerFolio then uses an eight-agent AI pipeline, where specialized agents handle tasks such as resume parsing, brand analysis, career-story generation, portfolio creation, diagnostics, and personalized roadmaps. Together they transform one resume into connected career views grounded in the user's own evidence.",
        ],
      },
      {
        heading: "Key Product Decisions",
        blocks: [[
          "Pivot from a generic portfolio builder to an evidence-backed career intelligence product",
          "Ground outputs in the user's existing experience rather than inventing accomplishments",
          "Split complex career analysis across specialized AI agents",
          "Organize output around Mirror, Map, and Motion rather than presenting a wall of AI-generated insights",
          "Prioritize an MVP that delivered the core experience within a six-day hackathon timeline",
          "Remove non-essential features such as authentication and persistence so the team could focus on product value",
        ]],
      },
      {
        heading: "Product Experience",
        blocks: [
          "From one resume, CareerFolio can generate:",
          [
            "evidence-backed portfolio content",
            "strengths and differentiators",
            "recruiter-ready resume bullets",
            "STAR stories",
            "elevator pitches",
            "case studies",
            "portfolio scoring",
            "evidence-gap analysis",
            "three role-matched career paths",
            "personalized growth roadmaps",
          ],
        ],
      },
      {
        heading: "The Biggest Product Pivot",
        blocks: [
          "One of the most important moments happened midway through development.",
          "Our initial implementation generated a lot of useful analysis—but users were left asking:",
          "“What am I supposed to do with all of this?”",
          "That led to redesigning the experience around Mirror, Map, and Motion so that insight naturally progressed into direction and then action.",
          "For me, this was a strong reminder that more AI output does not automatically mean more user value.",
        ],
      },
      {
        heading: "Constraints & Tradeoffs",
        blocks: [
          "The hackathon had a six-day delivery window, so scope discipline mattered.",
          "We deliberately removed features such as authentication and persistent accounts to protect the core experience.",
          "We were also using AI-assisted development tools with limited credits, so each iteration had a real cost. That forced us to prioritize high-impact product and UX changes instead of spending cycles on cosmetic improvements.",
          "AI-generated structured outputs were not always reliable either. Documentation could omit requirements and structured responses occasionally failed, so we strengthened the process with detailed PRD, HLD, LLD, execution documents, and iterative prompt refinement.",
        ],
      },
      {
        heading: "Outcome / Impact",
        blocks: [
          "CareerFolio reduced a process that could otherwise involve hours of writing, coaching, and iteration into a roughly 90-second AI workflow that returns career diagnostics, role-matched paths, interview-ready assets, and growth recommendations grounded in the user's existing evidence.",
          "The project won 1st place in the FWA AI Hackathon.",
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          "My biggest learning was that AI products need product architecture as much as technical architecture.",
          "The model can generate enormous amounts of information very quickly. The PM's job is to determine:",
          [
            "which information actually helps the user",
            "how outputs should be organized",
            "what should be grounded in evidence",
            "when to constrain the AI",
            "how to convert insight into action",
            "what not to build in the MVP",
          ],
          "CareerFolio started as an AI portfolio generator.",
          "It became an AI career intelligence platform because we kept returning to the user's actual problem rather than staying attached to our first solution.",
        ],
      },
      {
        heading: "What’s Next",
        blocks: [
          "The future roadmap could extend CareerFolio into a persistent career workspace with:",
          [
            "role-specific resume and branding generation",
            "AI mock interviews",
            "multi-perspective hiring assessment",
            "shareable portfolio generation",
            "job matching and skills-gap analysis",
            "personalized learning and career roadmaps",
          ],
        ],
      },
    ],
  },
  {
    slug: "pantry-to-plan",
    title: pantry.title,
    status: pantry.status,
    overview: "Turn a pantry photo into a 3 to 5 day dinner plan and a consolidated shopping list.",
    problem: "Planning dinners from ingredients on hand involves recognizing what is available, choosing recipes that fit preferences, and tracking what remains to buy.",
    role: "Worked on image-based ingredient detection, a human review step, preference-aware planning, pantry depletion, and shopping-list aggregation.",
    approach: "Built a Streamlit workflow that identifies pantry ingredients from a photo, lets a person review them, then produces a multi-day plan and combined shopping list.",
    decisions: [
      "Include human review after image-based detection",
      "Account for preferences when planning recipes",
      "Track pantry depletion before consolidating the shopping list",
    ],
    technicalContext: "The application uses Streamlit, vision parsing, persistence, LangSmith, and a human-in-the-loop step.",
    impact: pantry.impact,
    learned: "Human review helps keep an image-driven planning workflow useful when ingredient detection needs correction.",
    tags: pantry.tags,
    section: "shipped",
    externalLink: pantry.link,
    detailSections: [
      {
        heading: "At a Glance",
        blocks: [[
          "Role: Product Lead / AI Product Builder",
          "Type: 0→1 AI Product",
          "Impact: The Gen Academy Mastering Agentic AI Demo Day — 1st Place",
          "Core Stack: OpenAI · Pinecone · Python · Streamlit · LangSmith · Human-in-the-Loop",
        ]],
      },
      {
        heading: "The Problem",
        blocks: [
          "Meal planning sounds simple until it has to account for what someone already has, dietary constraints, cuisine preferences, calorie goals, pantry depletion, and a shopping list that is actually correct.",
          "I wanted to explore whether AI could reduce that planning overhead without creating a system that simply generated plausible-looking recipes.",
          "The product goal became: turn a pantry photo into a trustworthy 3–5 day dinner plan and a consolidated shopping list, while keeping the user in control of what the system detected and ensuring important constraints were enforced reliably.",
        ],
      },
      {
        heading: "My Role",
        blocks: [
          "I designed and built the product end to end, including:",
          [
            "product workflow and interaction model",
            "pantry-image parsing",
            "human confirmation",
            "recipe retrieval",
            "planning and scoring logic",
            "hard dietary constraints",
            "pantry depletion",
            "shopping-list reconciliation",
            "AI-assisted planning",
            "evaluation strategy",
          ],
        ],
      },
      {
        heading: "How I Approached It",
        blocks: [
          "I broke the experience into four clear steps:",
          "Pantry photo → confirm inventory → set preferences → generate plan + shopping list",
          "A key decision was not to trust vision output automatically. After image parsing, users review the detected ingredients, confidence, mapping status, and quantities before anything enters the planner. Low-confidence or incomplete detections are explicitly surfaced for review.",
          "I also separated what AI should do from what needed to remain deterministic.",
          "AI is useful for:",
          [
            "understanding pantry images",
            "retrieving relevant recipe candidates",
            "proposing planning strategies",
          ],
          "But exact eligibility, scoring, pantry arithmetic, hard vegetarian constraints, and shopping-list reconciliation remain deterministic in Python. The governing design principle became:",
          "“Agent proposes, deterministic core disposes.”",
        ],
      },
      {
        heading: "Key Product Decisions",
        blocks: [[
          "Require human confirmation before using AI-detected pantry items",
          "Treat vegetarian preference as a hard constraint, never something the model can relax",
          "Use retrieval to narrow the recipe space, but keep the typed recipe corpus as the source of truth",
          "Separate AI recommendations from deterministic inventory and scoring logic",
          "Make constraint misses and fallbacks visible instead of silently hiding them",
          "Preserve a fully local deterministic mode so the product can still run without external AI services",
        ]],
      },
      {
        heading: "Technical / System Context",
        blocks: [
          "The architecture combines:",
          [
            "GPT-4o for image understanding and structured output",
            "Pinecone + embeddings for recipe retrieval",
            "TF-IDF local retrieval as a deterministic fallback",
            "Python for scoring, constraints, pantry depletion, and shopping-list calculations",
            "Streamlit session state for the active workflow",
            "strict Pydantic schemas for contracts across the system",
          ],
          "The planner retrieves recipe candidates based on pantry state and preferences, then scores them using cuisine match, calorie distance, pantry coverage, and recipe reuse. Pantry quantities are updated after each planned meal before generating the next day.",
        ],
      },
      {
        heading: "Evaluation & Trust",
        blocks: [
          "I did not want success to mean “the demo looks good.”",
          "The project includes 23 evaluation scenarios covering normal cases, vegetarian exhaustion, tight calorie bands, sparse pantries, join mismatches, sizing edge cases, and noisy vision inputs. The suite checks deterministic invariants such as hard-constraint compliance, pantry quantities never going negative, exact calorie deltas, and valid shopping-list shortages.",
        ],
      },
      {
        heading: "Outcome / Impact",
        blocks: [
          "The result was an explainable end-to-end planning experience that combines AI where it adds value with deterministic logic where correctness matters.",
          "The project won 1st place at The Gen Academy Mastering Agentic AI Demo Day.",
          "More importantly, it gave me a practical framework for building trustworthy AI products rather than simply adding an LLM to an existing workflow.",
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          "The biggest lesson was that AI does not need to control the entire workflow to create value.",
          "For consequential or constraint-heavy decisions, the stronger architecture is often hybrid:",
          "AI for interpretation and exploration.",
          "Deterministic systems for rules and arithmetic.",
          "Humans for confirmation and judgment.",
          "That separation made the product easier to explain, evaluate, debug, and trust.",
        ],
      },
    ],
  },
];

export const caseStudyByTitle = new Map(caseStudies.map((study) => [study.title, study]));