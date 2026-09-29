export type WritingSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type WritingNote = {
  slug: string;
  title: string;
  readTime: string;
  summary: string;
  tags: string[];
  sections: WritingSection[];
};

export const writingNotes: WritingNote[] = [
  {
    slug: "engineering-to-product",
    title: "What 15 Years of Engineering Taught Me About Product",
    readTime: "3 min read",
    summary: "Building the right thing matters as much as building it right.",
    tags: ["Product Thinking", "Engineering", "Technical Product Management"],
    sections: [
      {
        paragraphs: [
          "I spent much of my career thinking about systems in terms of reliability, maintainability, performance, and architecture. Over time, I realized that technically excellent software can still fail if it does not solve the right problem.",
          "Some of my most valuable engineering experiences were not about writing code. They were about asking why a feature was needed, understanding how users actually worked, questioning requirements that did not make sense, and helping teams simplify a solution before implementation began.",
          "That changed the way I think about product.",
        ],
      },
      {
        heading: "Three lessons engineering taught me",
      },
      {
        heading: "1. Requirements are rarely the real problem.",
        paragraphs: [
          "A stakeholder may ask for a feature, but the underlying problem is often different. Understanding the workflow and asking “why?” usually produces a better solution than immediately implementing the request.",
        ],
      },
      {
        heading: "2. Every product decision creates technical consequences.",
        paragraphs: [
          "A seemingly small product decision can affect APIs, data models, integrations, security, testing, and long-term maintenance. My engineering background helps me recognize those tradeoffs early.",
        ],
      },
      {
        heading: "3. Shipping is only the beginning.",
        paragraphs: [
          "Production support taught me that a product has to work reliably after launch. Monitoring, failure scenarios, operational workflows, and supportability are part of the user experience too.",
        ],
      },
      {
        heading: "How this shapes me as a product leader",
        paragraphs: [
          "Today, I try to work in the space between business intent and engineering execution.",
          "I want to understand the user problem first, but I also want to understand what it will take to build, operate, scale, and maintain the solution.",
          "My goal is not just to help teams build things right.",
          "It is to help them build the right things—and make sure those things actually work in the real world.",
        ],
      },
    ],
  },
  {
    slug: "code-reviews-to-product-discovery",
    title: "From Code Reviews to Product Discovery: Skills That Transfer",
    readTime: "3 min read",
    summary: "Technical depth can be a product advantage.",
    tags: ["Career Transition", "Product Management", "Engineering Leadership"],
    sections: [
      {
        paragraphs: [
          "Moving toward product leadership did not mean leaving engineering behind. I found that many of the skills I developed as an engineer transferred directly into product work.",
          "The context changed, but the underlying thinking did not.",
        ],
      },
      {
        heading: "Code reviews taught me to ask better questions",
        paragraphs: ["A good code review is not simply about finding errors. You ask:"],
        list: [
          "Why was this approach chosen?",
          "What happens in an edge case?",
          "Is there a simpler solution?",
          "What assumptions are we making?",
          "How will this behave when something fails?",
        ],
      },
      {
        paragraphs: [
          "Those are also product questions.",
          "During product discovery, I use the same mindset when reviewing workflows, requirements, and proposed solutions.",
        ],
      },
      {
        heading: "Debugging taught me how to work through ambiguity",
        paragraphs: [
          "When debugging a production issue, you rarely begin with complete information. You gather signals, form hypotheses, test assumptions, eliminate possibilities, and progressively narrow the problem.",
          "Product discovery often works the same way.",
          "The answer is usually not sitting in the initial requirement. You have to uncover it.",
        ],
      },
      {
        heading: "Architecture taught me to think in systems",
        paragraphs: [
          "Products rarely exist independently.",
          "A user-facing change may depend on APIs, databases, third-party vendors, automation workflows, security constraints, or another team's platform.",
          "My engineering background helps me see those relationships early and communicate more effectively with technical teams.",
        ],
      },
      {
        heading: "What transferred most",
        paragraphs: [
          "The biggest transferable skill was not coding.",
          "It was learning how to break complicated problems into smaller decisions, expose assumptions, evaluate tradeoffs, and create enough clarity for a team to move forward.",
          "That is just as important in product management as it is in engineering.",
        ],
      },
    ],
  },
  {
    slug: "ambiguity-product-feature",
    title: "Why Ambiguity Is a Product Feature, Not a Bug",
    readTime: "3 min read",
    summary: "Good discovery doesn't eliminate ambiguity immediately. It gives the team a way to work through it.",
    tags: ["Product Discovery", "Ambiguity", "Frameworks", "Stakeholder Alignment"],
    sections: [
      {
        paragraphs: [
          "One project reminded me of this clearly.",
          "I was asked to help define a centralized intake process. A user would submit a form, Workfront Fusion would process the request, and JIRA epics and stories would then be created automatically.",
          "It sounded straightforward.",
          "It wasn't.",
          "The business teams were still deciding what the form should contain, what information was required, how fields should map between systems, and what should be included in the first release.",
          "There wasn't a finalized requirement document waiting for engineering.",
        ],
      },
      {
        heading: "My framework: make uncertainty visible",
        paragraphs: [
          "Instead of waiting for every answer, I started mapping the workflow.",
          "I created a Visio diagram showing:",
          "Form → Workfront → Fusion → JIRA → downstream process",
          "Once people could see the process visually, gaps became much easier to identify.",
          "We started asking concrete questions:",
        ],
        list: [
          "What fields are actually required?",
          "Who owns each decision?",
          "What belongs in the MVP?",
          "Which requirements can wait?",
          "What happens when information is missing?",
          "How should form fields map to JIRA?",
          "Which assumptions still need validation?",
        ],
      },
      {
        paragraphs: [
          "I documented those decisions, open questions, mappings, and current/future-state workflows in Confluence.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "The diagram became more than documentation.",
          "It became a decision-making tool.",
          "Stakeholders could react to something tangible, disagreements surfaced earlier, and the group gradually aligned around an MVP.",
          "By the end, engineering had a much clearer implementation starting point.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Ambiguity is not necessarily evidence that discovery has failed.",
          "Early product work is often ambiguous by nature.",
          "The PM's job is not to magically know the answer. It is to create a process that turns uncertainty into:",
          "questions → decisions → shared understanding → execution",
          "That is now one of the frameworks I use when approaching unclear problems.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-hackathon",
    title: "AI Agents in the Enterprise: What I Learned Building at a Hackathon",
    readTime: "3 min read",
    summary: "Going from an idea to a working AI product quickly changes how you think about both AI and product.",
    tags: ["AI Product", "Hackathon", "AI Evaluation"],
    sections: [
      {
        paragraphs: [
          "During an FWA AI Hackathon, I worked on CareerFolio, an AI-powered career platform designed around a problem I had observed: people often know what they have done but struggle to turn that experience into credible evidence of their skills and impact.",
          "The challenge was not simply “build something with AI.”",
          "We needed to decide what problem was worth solving, what the product should actually do, and what we could realistically demonstrate within a very short time.",
        ],
      },
      {
        heading: "Starting with the problem",
        paragraphs: [
          "Before building, I worked through the product strategy, PRD, high-level design, low-level design, and execution approach.",
          "That helped separate:",
          "what AI could do",
          "from",
          "what the user actually needed",
          "We then used AI-assisted development and rapid prototyping to move from concept to a working experience.",
        ],
      },
      {
        heading: "What AI accelerated",
        paragraphs: ["AI dramatically increased the speed at which I could:"],
        list: [
          "explore product ideas",
          "draft requirements",
          "prototype workflows",
          "generate implementation starting points",
          "test different approaches",
          "iterate on the experience",
        ],
      },
      {
        paragraphs: [
          "But speed also introduced a new risk.",
          "AI can produce something convincing very quickly—even when the underlying logic is incomplete.",
        ],
      },
      {
        heading: "The biggest lesson",
        paragraphs: [
          "Building AI products made me think much more carefully about evaluation.",
          "For traditional software, many outputs are deterministic.",
          "With AI, teams also have to ask:",
        ],
        list: [
          "Was the answer grounded?",
          "Did the model follow the user's constraints?",
          "Is the result useful, not just plausible?",
          "What should be deterministic?",
          "Where is human review necessary?",
          "How do we know the model is improving?",
        ],
      },
      {
        paragraphs: [
          "That thinking carried into my later AI work, where I increasingly used explicit constraints, human-in-the-loop steps, and evaluation criteria.",
        ],
      },
      {
        heading: "What I took away",
        paragraphs: [
          "The biggest lesson from the hackathon was that the differentiator is rarely just access to a model.",
          "The real product work is deciding:",
          "where AI adds value, what users should control, how the system should behave when uncertain, and how success will be measured.",
          "Winning was exciting.",
          "Learning how differently AI products need to be designed was more valuable.",
        ],
      },
    ],
  },
];