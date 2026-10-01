import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ArrowDown, Calendar, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { personal, projects, shippedProjects, skills, experience, education } from "@/data/content";
import { writingNotes } from "@/data/writing-notes";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { caseStudyByTitle } from "@/data/case-studies";
import { ExpandableDescription } from "@/components/expandable-description";
import { PageMeta } from "@/components/page-meta";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.15 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const shippedPreviews: Record<number, string> = {
  11: "Built a RAG assistant grounded in family source documents.",
  13: "Designed an AI operations manager that prioritizes work across eight properties.",
};

// Profile photo with initials fallback
function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);
  if (!imgError) {
    return (
      <img
        src={personal.photo}
        alt={personal.name}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-muted/30">
      <span className="text-6xl font-bold text-primary/60 font-mono">VG</span>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const section = window.location.hash.slice(1);
    if (section === "projects" || section === "shipped" || section === "blog") {
      requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView());
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <PageMeta title="Vaishali Goel | Product Manager, Engineering & AI" description={personal.tagline} />
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto"
        >
          <div className="w-full grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
            {/* Left: Text */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              {/* Availability tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                {personal.availabilityTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border/60 bg-muted/30 text-muted-foreground"
                  >
                    {tag === personal.availabilityTags[0] && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86e5b4] inline-block" />
                    )}
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]"
              >
                {personal.name}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light"
              >
                {personal.tagline}
              </motion.p>
              
            </motion.div>

            {/* Right: Photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden md:flex flex-col items-center"
            >
              <div className="relative w-64 h-72 rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-black/40">
                <ProfilePhoto />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground">{personal.name}</p>
                <p className="text-sm text-muted-foreground">{personal.title}</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href={`mailto:${personal.email}`} className="p-2 rounded-full bg-muted/40 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                  <Mail size={16} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted/40 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted/40 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  <SiGithub size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 animate-bounce text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-card/60 border-y border-border/50 py-10 px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {personal.stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid md:grid-cols-[1fr_2fr] gap-12"
          >
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">01. About</h2>
              <h3 className="text-3xl font-bold mb-6">Engineering Depth. Product Mindset</h3>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              {personal.bio.split('\n\n').map((paragraph, i) => (
                <motion.p key={i} variants={itemVariants}>{paragraph}</motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WORK / PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">02. Enterprise Impact</h2>
              <h3 className="text-3xl font-bold">Selected Work</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between bg-card rounded-2xl p-8 border border-card-border hover:border-primary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h4>
                    </div>
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        project.status === 'Launched' ? 'bg-[#2b4c3b]/30 text-[#86e5b4] border-[#86e5b4]/20' : 
                        project.status === 'In Progress' ? 'bg-[#5c4015]/30 text-[#f5a840] border-[#f5a840]/20' :
                        'bg-muted text-muted-foreground border-border'
                      }`}>
                        {project.status}
                      </span>
                      {"year" in project && project.year && <span className="ml-3 text-sm text-muted-foreground font-mono">{project.year}</span>}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{caseStudyByTitle.get(project.title)!.overview}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-4 pt-4 border-t border-border/50">
                      <span className="text-primary">Impact:</span> <span className="text-muted-foreground font-normal">{project.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${caseStudyByTitle.get(project.title)!.slug}`}
                      className="inline-flex items-center mt-6 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      View case study →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUCTS I SHIPPED MYSELF */}
        <section id="shipped" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                From Idea to Working Product: {" "} Builds
                <span className="text-primary">0 → 1.</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                Self-initiated product work — from idea to shipped. Pricing, positioning, cold-start, knowing when to pivot. The parts of product you can't learn from a ticket queue.
              </p>
            </div>

            <div className="grid gap-6">
            {shippedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group block relative rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="grid md:grid-cols-[2fr_1fr] gap-0">
                  <div className="p-10 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">
                        {project.eyebrow}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[#2b4c3b]/30 text-[#86e5b4] border-[#86e5b4]/20">
                        {project.status}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                      {project.link && <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" />}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h4>
                    {caseStudyByTitle.has(project.title) && !caseStudyByTitle.get(project.title)!.preserveCardDescription ? (
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{caseStudyByTitle.get(project.title)!.overview}</p>
                    ) : (
                      <ExpandableDescription description={project.description} preview={shippedPreviews[project.id]} details={project.ownership} className="text-lg mb-8" />
                    )}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                      {caseStudyByTitle.get(project.title) && (
                        <Link href={`/work/${caseStudyByTitle.get(project.title)!.slug}`} className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                          View case study →
                        </Link>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        Visit project ↗
                      </a>
                    </div>
                  </div>
                  <div className="md:border-l border-border/50 flex flex-col justify-center p-10 bg-muted/10">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Impact</p>
                    <p className="text-lg font-semibold text-[#d4a843] mb-6">{project.impact}</p>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">What I owned</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.ownership.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">03. Skills</h2>
              <h3 className="text-3xl font-bold">Toolkit & Expertise</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-border/50">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Engineering
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.engineering.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-card border border-card-border rounded-lg text-sm text-card-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-border/50">
                  <span className="w-2 h-2 rounded-full bg-[#f5a840]"></span>
                  Product
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.product.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-card border border-card-border rounded-lg text-sm text-card-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-border/50">
                  <span className="w-2 h-2 rounded-full bg-[#f5a840]"></span>
                  AI Product & Engineering
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.aiProduct.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-card border border-card-border rounded-lg text-sm text-card-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-border/50">
                  <span className="w-2 h-2 rounded-full bg-[#86e5b4]"></span>
                  Delivery & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.delivery.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-card border border-card-border rounded-lg text-sm text-card-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-16">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">04. Experience</h2>
              <h3 className="text-3xl font-bold">Where I've Been</h3>
            </div>

            <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 space-y-16 py-4">
              {experience.map((job) => (
                <motion.div key={job.id} variants={itemVariants} className="relative pl-8 md:pl-12">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary"></span>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                    <span className="text-sm font-mono text-muted-foreground mt-1 md:mt-0 flex items-center gap-1.5">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                  </div>
                  <h5 className="text-primary font-medium mb-4">{job.company}</h5>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="relative pl-5 text-sm text-muted-foreground/90">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">05. Education</h2>
              <h3 className="text-3xl font-bold">Academic & Continued</h3>
            </div>

            <div className="grid gap-6">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-muted/20 border border-border/50"
                >
                  <div>
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <h5 className="text-primary text-sm mb-2">{edu.institution}</h5>
                    <p className="text-sm text-muted-foreground">{edu.notes}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-sm font-mono text-muted-foreground whitespace-nowrap">
                    {edu.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* HOW I THINK WHEN NOBODY ASKS — Writing/Blog */}
        <section id="blog" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">06. Writing</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                How I Think About {" "}
                <span className="text-primary">Products.</span>
              </h3>
              <p className="text-lg text-muted-foreground font-light max-w-2xl">
                Product thinking, engineering lessons, and perspectives from the space between user problems and technical execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {writingNotes.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={itemVariants}
                  className="h-full"
                >
                  <Link
                    href={`/writing/${post.slug}`}
                    className="group flex flex-col justify-between p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    aria-label={`Read note: ${post.title}`}
                  >
                    <div>
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                        Product Note · {post.readTime}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-foreground">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {post.summary}
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-block mt-5 text-sm font-medium text-primary group-hover:underline">Read note →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">07. Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h3>
            <p className="text-lg text-muted-foreground mb-10 font-light">
              Open to Product Management and AI Product opportunities where deep technical understanding, product discovery, and cross-functional execution matter.
            </p>
            
            <a 
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/25"
            >
              Say Hello
            </a>

            <div className="flex items-center gap-6 mt-16 pt-8 border-t border-border/50 w-full justify-center">
              <a 
                href={personal.github} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
              <a 
                href={personal.linkedin} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
