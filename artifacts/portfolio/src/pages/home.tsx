import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ArrowDown, Download, MapPin, Calendar, Clock, ArrowUpRight, Linkedin } from "lucide-react";
import { personal, projects, skills, experience, education, blogPosts } from "@/data/content";
import { Navbar } from "@/components/navbar";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-6xl mx-auto"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]"
            >
              {personal.name}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10 font-light"
            >
              {personal.tagline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a 
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a 
                href={personal.github}
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <SiGithub size={22} />
              </a>
              <a 
                href={personal.linkedin}
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-12 animate-bounce text-muted-foreground"
          >
            <ArrowDown size={24} />
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
              <h3 className="text-3xl font-bold mb-6">The Transition</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground border border-border/50">
                <MapPin size={14} />
                {personal.location}
              </div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              {personal.bio.split('\n\n').map((paragraph, i) => (
                <motion.p key={i} variants={itemVariants}>{paragraph}</motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">02. Projects</h2>
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
                      <h4 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      {project.link && <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />}
                    </div>
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        project.status === 'Launched' ? 'bg-[#2b4c3b]/30 text-[#86e5b4] border-[#86e5b4]/20' : 
                        project.status === 'In Progress' ? 'bg-[#5c4015]/30 text-[#f5a840] border-[#f5a840]/20' :
                        'bg-muted text-muted-foreground border-border'
                      }`}>
                        {project.status}
                      </span>
                      <span className="ml-3 text-sm text-muted-foreground font-mono">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-foreground mb-4 pt-4 border-t border-border/50">
                      Impact: <span className="text-muted-foreground font-normal">{project.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} className="absolute inset-0 z-10 rounded-2xl" target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} />
                  )}
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
                  <span className="w-2 h-2 rounded-full bg-[#86e5b4]"></span>
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(skill => (
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

        {/* BLOG SECTION */}
        <section id="blog" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="mb-12">
              <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">06. Writing</h2>
              <h3 className="text-3xl font-bold">Thoughts & Essays</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  variants={itemVariants}
                  className="group flex flex-col justify-between p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 relative h-full"
                >
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12}/> {post.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {post.url && (
                    <a href={post.url} className="absolute inset-0 z-10 rounded-2xl" target="_blank" rel="noreferrer" aria-label={`Read ${post.title}`} />
                  )}
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
              Open to PM opportunities — reach out. Whether you have a question or just want to say hi, I'll try my best to get back to you!
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
