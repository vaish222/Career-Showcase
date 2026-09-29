import { useEffect } from "react";
import { useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { PageMeta } from "@/components/page-meta";
import NotFound from "./not-found";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <NotFound />;

  const backUrl = `${import.meta.env.BASE_URL}#${study.section === "shipped" ? "shipped" : "projects"}`;
  const sections = [
    ["The Problem", study.problem],
    ["My Role", study.role],
    ["How I Approached It", study.approach],
    ["Technical / System Context", study.technicalContext],
    ["Outcome / Impact", study.impact],
    ["What I Learned", study.learned],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <PageMeta title={`${study.title} | Case Study | Vaishali Goel`} description={study.overview} />
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-24">
        <a href={backUrl} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <ArrowLeft size={16} /> Back to Work
        </a>
        <header className="mt-16 mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">{study.section === "shipped" ? "0 → 1 Builds" : "Selected Work"} / Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">{study.title}</h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[#2b4c3b]/30 text-[#86e5b4] border-[#86e5b4]/20">{study.status}</span>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">{study.overview}</p>
        </header>
        <div className="bg-card rounded-2xl border border-card-border p-8 md:p-12">
          {study.detailSections ? (
            study.detailSections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.blocks.map((block, index) =>
                    typeof block === "string" ? (
                      <p key={index}>{block}</p>
                    ) : (
                      <ul key={index} className="space-y-2 list-disc pl-5">
                        {block.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))
          ) : (
            <>
              {sections.slice(0, 3).map(([heading, text]) => (
                <section key={heading} className="mb-10">
                  <h2 className="text-xl font-bold mb-3">{heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </section>
              ))}
              <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Key Product Decisions</h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                  {study.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </section>
              {sections.slice(3).map(([heading, text]) => (
                <section key={heading} className="mb-10">
                  <h2 className="text-xl font-bold mb-3">{heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </section>
              ))}
            </>
          )}
          <section>
            <h2 className="text-xl font-bold mb-4">Skills / Tags</h2>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">{tag}</span>)}
            </div>
          </section>
        </div>
        <div className="flex flex-wrap gap-6 mt-10">
          <a href={backUrl} className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><ArrowLeft size={16} /> Back to Work</a>
          {study.externalLink && <a href={study.externalLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Visit project <ArrowUpRight size={16} /></a>}
        </div>
      </main>
    </div>
  );
}