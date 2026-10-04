import { projects, shippedProjects } from "./content";
import { stayOpsCaseStudy } from "./stayops-case-study";
import { decisionAssistantCaseStudy } from "./decision-assistant-case-study";
import { iGotThisCaseStudy } from "./i-got-this-case-study";

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
  preserveCardDescription?: boolean;
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
  stayOpsCaseStudy,
  decisionAssistantCaseStudy,
  iGotThisCaseStudy,
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
    problem: "Volunteer teams were building AI products including a knowledge bot, enrollment automation, and AI workflow systems. Team members had different levels of AI and software-development experience, while launch dates were fixed. The teams needed more structure around product definition, technical decisions, ownership, risk management, and delivery.",
    role: "Served as a Technical Mentor, Product/Project Lead, and Engineering Advisor, helping teams move from product requirements and early ideas toward reliable, launch-ready AI systems. I supported teams across product discovery, architecture, execution planning, staffing, technical tradeoffs, and delivery.",
    approach: "I started with the user problem and business requirements before choosing technology, then helped teams translate those requirements into executable plans.",
    decisions: [
      "Start with the problem, not the AI technology — define the user need before selecting the model or architecture.",
      "Reuse before rebuilding — an early audit showed approximately 85–90% of the existing knowledge bot could be reused.",
      "Define the MVP around the deadline — launch-critical enrollment functionality was prioritized first, while nonessential work moved to later milestones.",
      "Measure, don’t just demo — introduced a 150+ question evaluation set with targets for groundedness, citation accuracy, and zero incorrect prices or dates.",
      "Keep critical facts deterministic — prices, dates, and policy-driven information come from structured sources rather than model inference.",
      "Keep humans in control where judgment matters — decisions such as scholarships and access removal remain human-controlled.",
      "Design for failure — events are persisted before processing, retries are idempotent, automated emails can be stopped quickly, and launch-day processing is rehearsed in advance.",
    ],
    technicalContext: "AI & Product: RAG, LLM evaluation, AI agents, prompt engineering, product discovery, architecture design. Engineering: Python, FastAPI, Supabase, PostgreSQL, Edge Functions, queues, webhooks, React. Delivery: Jira, sprint planning, dependency management, technical mentoring, AI-assisted development.",
    impact: "Helped multiple teams move from requirements and early prototypes toward structured, launch-ready AI systems. The work introduced clearer ownership, stronger delivery planning, measurable AI quality gates, and safer boundaries between AI reasoning, deterministic logic, and human judgment. The current launch is scheduled for November 15, 2026, with post-launch metrics including enrollment processing performance, duplicate rate, email accuracy, groundedness, and citation quality.",
    learned: "AI projects can become technology-led very quickly. The most valuable questions are often not “Which model should we use?” but: What should remain deterministic? Where should a human decide? What happens when the system fails? And how will we know it works before users discover that it doesn’t? This project reinforced that strong AI products require product thinking, evaluation, operational reliability, and disciplined delivery—not just a capable model.",
    tags: mentoring.tags,
    section: "projects",
    detailSections: [
      {
        heading: "The Problem",
        blocks: [
          "Volunteer teams were building AI products including a knowledge bot, enrollment automation, and AI workflow systems. Team members had different levels of AI and software-development experience, while launch dates were fixed.",
          "The teams needed more structure around product definition, technical decisions, ownership, risk management, and delivery.",
        ],
      },
      {
        heading: "My Role",
        blocks: [
          "Served as a Technical Mentor, Product/Project Lead, and Engineering Advisor, helping teams move from product requirements and early ideas toward reliable, launch-ready AI systems.",
          "I supported teams across product discovery, architecture, execution planning, staffing, technical tradeoffs, and delivery.",
        ],
      },
      {
        heading: "How I Approached It",
        blocks: [
          "I started with the user problem and business requirements before choosing technology, then helped teams translate those requirements into executable plans.",
          "Key contributions included:",
          [
            "Converted two PRDs into 27 epics and 124 Jira stories with acceptance criteria, dependencies, owners, and milestones.",
            "Planned work backward from launch deadlines, prioritizing launch-critical functionality first.",
            "Identified architecture, security, timeline, and vendor risks early and converted them into investigation tasks.",
            "Created architecture, process-flow, and delivery diagrams to align engineering, mentors, and operations.",
            "Advised on staffing, placing experienced engineers on critical AI and reliability work while creating growth opportunities for newer volunteers.",
            "Reviewed technical approaches and coached engineers through implementation tradeoffs and blockers.",
          ],
        ],
      },
      {
        heading: "Key Product & Technical Decisions",
        blocks: [[
          "Start with the problem, not the AI technology — define the user need before selecting the model or architecture.",
          "Reuse before rebuilding — an early audit showed approximately 85–90% of the existing knowledge bot could be reused.",
          "Define the MVP around the deadline — launch-critical enrollment functionality was prioritized first, while nonessential work moved to later milestones.",
          "Measure, don’t just demo — introduced a 150+ question evaluation set with targets for groundedness, citation accuracy, and zero incorrect prices or dates.",
          "Keep critical facts deterministic — prices, dates, and policy-driven information come from structured sources rather than model inference.",
          "Keep humans in control where judgment matters — decisions such as scholarships and access removal remain human-controlled.",
          "Design for failure — events are persisted before processing, retries are idempotent, automated emails can be stopped quickly, and launch-day processing is rehearsed in advance.",
        ]],
      },
      {
        heading: "Technical / System Context",
        blocks: [
          "AI & Product: RAG, LLM evaluation, AI agents, prompt engineering, product discovery, architecture design",
          "Engineering: Python, FastAPI, Supabase, PostgreSQL, Edge Functions, queues, webhooks, React",
          "Delivery: Jira, sprint planning, dependency management, technical mentoring, AI-assisted development",
        ],
      },
      {
        heading: "Outcome / Impact",
        blocks: [
          "Helped multiple teams move from requirements and early prototypes toward structured, launch-ready AI systems.",
          "The work introduced clearer ownership, stronger delivery planning, measurable AI quality gates, and safer boundaries between AI reasoning, deterministic logic, and human judgment.",
          "The current launch is scheduled for November 15, 2026, with post-launch metrics including enrollment processing performance, duplicate rate, email accuracy, groundedness, and citation quality.",
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          "AI projects can become technology-led very quickly.",
          "The most valuable questions are often not “Which model should we use?” but:",
          "What should remain deterministic? Where should a human decide? What happens when the system fails? And how will we know it works before users discover that it doesn’t?",
          "This project reinforced that strong AI products require product thinking, evaluation, operational reliability, and disciplined delivery—not just a capable model.",
        ],
      },
    ],
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
    problem: "AI-generated pantry detections could be incomplete or inaccurate. The experience also needed to be more visual, and the team needed repeatable ways to evaluate image recognition and planning correctness.",
    role: "Contributed UX and visual enhancements, recipe imagery and details, the human-in-the-loop pantry confirmation experience, developer documentation, image-based golden datasets, and AI evaluation.",
    approach: "Helped refine the pantry review flow, added visual assets and recipe imagery, documented how to run and understand the application, and created image-based golden datasets for repeatable evaluation.",
    decisions: [
      "Require users to review AI-detected pantry items before meal planning",
      "Surface low-confidence detections instead of hiding uncertainty",
      "Use images to improve comprehension and engagement throughout the product",
      "Show recipe imagery together with ingredients and cooking instructions",
      "Make the application easy for another developer to set up and run",
      "Create image-specific JSON ground truth for repeatable vision evaluation",
      "Evaluate vision recognition separately from downstream planning correctness",
      "Use golden datasets and repeatable evals rather than relying only on manual testing",
    ],
    technicalContext: "GPT-4o, Pinecone, OpenAI embeddings, TF-IDF fallback, Python, Streamlit, Pydantic, LangSmith, and JSON-based golden datasets.",
    impact: pantry.impact,
    learned: "Visual UX reduces cognitive effort, human review makes AI uncertainty visible, and image-based ground truth makes AI quality measurable before improvements are judged.",
    tags: pantry.tags,
    section: "shipped",
    externalLink: pantry.link,
    detailSections: [
      {
        heading: "At a Glance",
        blocks: [[
          "Role: AI Product Contributor",
          "Type: 0→1 AI Product",
          "Impact: The Gen Academy Mastering Agentic AI Demo Day — 1st Place",
          "My Focus: UX Enhancement · Visual Experience · Human-in-the-Loop Design · Documentation · Golden Dataset · AI Evaluation",
        ]],
      },
      {
        heading: "The Problem",
        blocks: [
          "Pantry to Plan was designed to turn a pantry photo into a 3–5 day dinner plan and a consolidated shopping list. The product combines image-based ingredient detection, user preferences, recipe retrieval, pantry depletion, and shopping-list aggregation in one workflow.",
          "A key challenge was making the experience both trustworthy and enjoyable to use. AI-generated pantry detections could be incomplete or inaccurate, so users needed a clear way to review and correct what the system detected before meal planning began.",
          "The experience also needed to feel more visual and intuitive. A meal-planning product is easier to understand when users can see what they are working with and what the final meal looks like, rather than interacting with text alone.",
          "Finally, the team needed a repeatable way to evaluate whether the vision model was correctly identifying ingredients from uploaded pantry images and whether the downstream planner respected its constraints.",
        ],
      },
      {
        heading: "My Role",
        blocks: [
          "My ownership focused on improving the user experience, visual design, documentation, and evaluation quality of the product.",
          "I worked on:",
          [
            "UX enhancements and user-flow refinement",
            "Adding visual assets to improve the overall look and feel",
            "Adding recipe images to generated meal-plan results",
            "Presenting recipe ingredients and cooking instructions alongside each recipe",
            "Human-in-the-loop pantry confirmation experience",
            "README and developer run documentation",
            "Creating image-based golden datasets in JSON",
            "Running evals and validating vision and planning results",
          ],
        ],
      },
      {
        heading: "How I Approached It",
        blocks: [
          "I approached the project from three perspectives:",
          [
            "Make the experience easier to use.",
            "Make the output more engaging and understandable.",
            "Make the AI behavior measurable.",
          ],
          "For the UX, I helped improve the flow so users could review and correct pantry items before the planner used them. The confirmation step exposes detected ingredients, confidence, mapping status, and quantities, while low-confidence or incomplete detections are surfaced for additional review.",
          "This created an explicit human checkpoint between AI perception and downstream planning rather than assuming that image recognition would always be correct.",
        ],
      },
      {
        heading: "Improving the Visual Experience",
        blocks: [
          "I also enhanced the UI by adding imagery throughout the application to make the experience more polished, inviting, and easier to understand.",
          "For the generated meal plan, I added recipe images alongside the recipe name, ingredients, and cooking instructions. The application already supports recipe cards with matching images and expandable ingredient and cooking details.",
          "This was an important product decision because food is inherently visual. A user can understand and evaluate a meal much faster when they can see the finished dish rather than reading a recipe title alone.",
          "Images also help:",
          [
            "make the generated plan feel more tangible",
            "help users quickly scan meals",
            "create stronger visual hierarchy",
            "make ingredients and instructions easier to associate with the final outcome",
            "improve the overall perceived quality of the product",
          ],
          "It reinforced something I strongly believe about UX: visuals are not just decoration; when used intentionally, they reduce cognitive effort and help users understand a product faster.",
        ],
      },
      {
        heading: "Documentation & Developer Experience",
        blocks: [
          "I updated the README so someone new to the project could understand the product flow, architecture, setup requirements, and how to run the application locally.",
          "The documentation includes:",
          [
            "environment setup",
            "dependency installation",
            "Streamlit launch instructions",
            "retrieval configuration",
            "AI and local fallback behavior",
            "application architecture",
            "evaluation instructions",
          ],
          "The README documents the full four-step experience and the supporting application structure.",
          "I considered documentation part of the product quality because a working application is much less useful if another developer cannot easily understand, reproduce, or evaluate it.",
        ],
      },
      {
        heading: "Creating the Golden Dataset",
        blocks: [
          "One of my key contributions was creating a golden dataset specifically for evaluating pantry-image recognition.",
          "I created expected results in JSON for representative pantry images. Each image had a known set of ingredients that should be identifiable.",
          "This gave us a clear comparison:",
          "Uploaded pantry image → AI-detected ingredients → Expected ingredients from golden JSON",
          "Instead of manually looking at an image and deciding whether the result “seemed correct,” we could compare the model output against an expected ground truth.",
          "The goal was to answer questions such as:",
          [
            "Did the model identify the ingredients actually visible in the image?",
            "Which expected ingredients were missed?",
            "Did the model introduce ingredients that were not present?",
            "Were ingredient names normalized correctly?",
            "Which detections had low confidence and required human review?",
          ],
          "This complemented the broader evaluation suite, which also includes vision-noise and poorly labeled pantry scenarios.",
        ],
      },
      {
        heading: "Key Product Decisions",
        blocks: [[
          "Require users to review AI-detected pantry items before meal planning",
          "Surface low-confidence detections instead of hiding uncertainty",
          "Use images to improve comprehension and engagement throughout the product",
          "Show recipe imagery together with ingredients and cooking instructions",
          "Make the application easy for another developer to set up and run",
          "Create image-specific JSON ground truth for repeatable vision evaluation",
          "Evaluate vision recognition separately from downstream planning correctness",
          "Use golden datasets and repeatable evals rather than relying only on manual testing",
        ]],
      },
      {
        heading: "Technical / System Context",
        blocks: [
          "The application combines:",
          [
            "GPT-4o for pantry-image understanding",
            "Pinecone + OpenAI embeddings for recipe retrieval",
            "TF-IDF as a local retrieval fallback",
            "Python for scoring, constraints, inventory depletion, and shopping-list calculations",
            "Streamlit for the user experience",
            "Pydantic for structured data contracts",
            "LangSmith for evaluation workflows",
            "JSON-based fixtures and golden datasets for repeatable testing",
          ],
          "The user journey is:",
          "Upload Pantry Photo → Review & Correct Ingredients → Set Preferences → Generate Visual Meal Plan → Review Recipes → Get Shopping List",
        ],
      },
      {
        heading: "Evaluation & Quality",
        blocks: [
          "I worked on evaluation at two different levels.",
          "1. Vision evaluation",
          "For pantry-image parsing, I created JSON-based expected outputs for test images and compared those expected ingredients with the ingredients produced by the vision pipeline.",
          "This allowed us to evaluate ingredient identification systematically rather than relying on visual inspection alone.",
          "2. Planning evaluation",
          "The broader golden evaluation suite validates behaviors such as:",
          [
            "vegetarian constraints are never violated",
            "calorie calculations are correct",
            "pantry inventory never goes negative",
            "shopping lists contain only actual shortages",
            "incomplete plans only occur when hard constraints prevent completion",
            "invalid schema values are rejected",
          ],
          "The project also uses a LangSmith evaluation harness so individual test cases can be executed and traced consistently.",
        ],
      },
      {
        heading: "Outcome / Impact",
        blocks: [
          "The final product delivered more than an AI-generated meal plan.",
          "It provided a visual, human-reviewed, and measurable end-to-end experience:",
          "Pantry image → AI detection → Human confirmation → Preference-aware planning → Visual recipes → Ingredients & instructions → Consolidated shopping list",
          "The project won 1st place at The Gen Academy Mastering Agentic AI Demo Day.",
          "My contributions helped make the product:",
          [
            "easier and more enjoyable to use",
            "more visually polished",
            "easier for developers to understand and reproduce",
            "more transparent when AI was uncertain",
            "more objectively measurable through golden datasets and evals",
          ],
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          "This project reinforced three important lessons for me about AI products.",
          "First, UX matters as much as model capability.",
          "Even a technically strong AI workflow can feel difficult to use if information is not presented clearly. Adding visual assets and recipe imagery made the experience easier to scan, understand, and engage with.",
          "Second, humans need visibility into AI uncertainty.",
          "Instead of silently accepting image detections, giving users the ability to review and correct them created a more trustworthy workflow.",
          "Third, AI quality needs ground truth.",
          "Creating expected ingredient sets for pantry images in JSON changed evaluation from:",
          "“This looks approximately right.”",
          "to:",
          "“These are the ingredients we expected. What did the model correctly identify, miss, or incorrectly add?”",
          "That reinforced one of my biggest lessons from building AI products:",
          "AI quality should be defined before it is measured.",
          "Once expected behavior, ground truth, and hard constraints are explicit, teams can make product improvements based on evidence rather than intuition.",
        ],
      },
    ],
  },
];

export const caseStudyByTitle = new Map(caseStudies.map((study) => [study.title, study]));