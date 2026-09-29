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
};

const print = projects[0];
const intake = projects[1];
const compliance = projects[3];
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
    slug: "state-filing-compliance-experience",
    title: compliance.title,
    status: compliance.status,
    overview: "Designed and delivered a searchable, permissioned compliance experience to replace a fragmented spreadsheet and automation workflow.",
    problem: "Regulatory-rule review was spread across spreadsheets and automation, making it harder to find information and track changes.",
    role: "Defined requirements and mockups, shaped the experience, and coordinated the data integration.",
    approach: "Introduced filtering and clearer rule terminology for users, with a centralized interface designed for visibility and auditability.",
    decisions: [
      "Replace the fragmented workflow with one searchable interface",
      "Use permissions and auditability in the review experience",
      "Make rule terminology and filtering clearer for users",
    ],
    technicalContext: "PerformLine API data was integrated through Workfront Fusion into the compliance experience.",
    impact: compliance.impact,
    learned: "A useful compliance tool must make the rules easy to find and understand while preserving visibility into how they are reviewed.",
    tags: compliance.tags,
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
  },
];

export const caseStudyByTitle = new Map(caseStudies.map((study) => [study.title, study]));