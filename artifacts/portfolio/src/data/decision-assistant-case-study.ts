import type { CaseStudy } from "./case-studies";
import { shippedProjects } from "./content";

const assistant = shippedProjects[2];

export const decisionAssistantCaseStudy: CaseStudy = {
  slug: "ai-product-decision-assistant",
  title: assistant.title,
  status: assistant.status,
  overview: "A decision-support product that combines project and enterprise context with AI-assisted analysis and deterministic scoring to help teams compare technical options transparently.",
  problem: "Technical teams often need to choose between tools, frameworks, or architecture options, but decisions can become opinion-driven. Different stakeholders care about cost, delivery speed, maintainability, security, integration, and existing enterprise constraints.",
  role: "Product Creator / Technical Product Lead. Conceived and built the product independently, from product strategy and workflow through scoring logic, recommendation UX, testing, and validation.",
  approach: "Users provide the decision, options, project context, and enterprise constraints. AI proposes evaluation criteria and analyzes each option, while application code calculates weights, weighted scores, ranking, and the final recommendation.",
  decisions: [
    "Separate AI reasoning from scoring: AI provides qualitative analysis and 1–5 ratings; application code performs the math.",
    "Prevent recommendation bias: AI cannot rank options while generating criteria, and criterion weights are hidden from the model during scoring.",
    "Include enterprise context: Recommendations consider existing technologies and organizational constraints, not just technical capability.",
    "Make recommendations explainable: The UI separates user facts, AI inferences, deterministic calculations, and the final recommendation.",
    "Support local AI: Ollama is the default provider, with OpenAI available as an alternative.",
  ],
  technicalContext: "React/Vite · Node.js · Ollama · OpenAI API · Structured JSON",
  impact: "The project created a reusable framework for comparing technical options based on business needs, project context, enterprise constraints, and transparent scoring rather than preference or AI opinion alone.",
  learned: "AI is most useful for qualitative reasoning, while deterministic code is better for calculations and ranking. Guardrails are stronger when enforced through system architecture rather than prompting alone.",
  tags: assistant.tags,
  section: "shipped",
  externalLink: assistant.link,
  preserveCardDescription: true,
  detailSections: [
    {
      heading: "At a Glance",
      blocks: [[
        "Role: Product Creator / Technical Product Lead",
        "Type: 0→1 AI Decision-Support Product",
        "Origin: Inspired by a real technology-selection need from my work with FWA",
        "Ownership: End-to-End Product Design, AI Workflow, Scoring Logic, UX, Testing",
        "Tech: React/Vite · Node.js · Ollama · OpenAI API · Structured JSON",
      ]],
    },
    {
      heading: "The Problem",
      blocks: [
        "Technical teams often need to choose between tools, frameworks, or architecture options, but decisions can become opinion-driven. Different stakeholders care about cost, delivery speed, maintainability, security, integration, and existing enterprise constraints.",
        "I built this product to turn those discussions into a structured, transparent decision process.",
      ],
    },
    {
      heading: "My Role",
      blocks: [
        "I conceived and built the product independently, including:",
        [
          "Product strategy and workflow",
          "Project and enterprise context capture",
          "AI-assisted evaluation criteria",
          "Option analysis",
          "Deterministic weighting and scoring",
          "Recommendation UX",
          "Ollama/OpenAI provider support",
          "Testing and validation",
        ],
      ],
    },
    {
      heading: "How It Works",
      blocks: [
        "Define Decision → Project Context → Enterprise Context → Evaluation Criteria → Option Analysis → Deterministic Scoring → Recommendation",
        "Users provide the decision, options, project context, and enterprise constraints. AI proposes evaluation criteria and analyzes each option, while application code calculates weights, weighted scores, ranking, and the final recommendation.",
      ],
    },
    {
      heading: "Key Product Decisions",
      blocks: [[
        "Separate AI reasoning from scoring: AI provides qualitative analysis and 1–5 ratings; application code performs the math.",
        "Prevent recommendation bias: AI cannot rank options while generating criteria, and criterion weights are hidden from the model during scoring.",
        "Include enterprise context: Recommendations consider existing technologies and organizational constraints, not just technical capability.",
        "Make recommendations explainable: The UI separates user facts, AI inferences, deterministic calculations, and the final recommendation.",
        "Support local AI: Ollama is the default provider, with OpenAI available as an alternative.",
      ]],
    },
    {
      heading: "Outcome",
      blocks: [
        "The project created a reusable framework for comparing technical options based on business needs, project context, enterprise constraints, and transparent scoring rather than preference or AI opinion alone.",
      ],
    },
    {
      heading: "What I Learned",
      blocks: [
        "The strongest AI decision-support products do not simply ask a model, “What should we choose?”",
        "They create structure around the decision.",
        "I learned that AI is most useful for qualitative reasoning, while deterministic code is better for calculations and ranking. Guardrails are also stronger when enforced through system architecture rather than prompting alone.",
      ],
    },
    {
      heading: "Key Product Principle",
      blocks: [
        "AI informs the decision. Deterministic logic calculates it. Humans remain accountable for it.",
      ],
    },
  ],
};