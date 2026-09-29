import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams } from "wouter";
import { PageMeta } from "@/components/page-meta";
import { writingNotes } from "@/data/writing-notes";
import NotFound from "./not-found";

export default function WritingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const note = writingNotes.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!note) return <NotFound />;

  const backUrl = `${import.meta.env.BASE_URL}#blog`;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <PageMeta title={`${note.title} | Writing | Vaishali Goel`} description={note.summary} />
      <main className="max-w-3xl mx-auto px-6 md:px-12 pt-16 pb-24">
        <a href={backUrl} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <ArrowLeft size={16} /> Back to Writing
        </a>
        <article>
          <header className="mt-16 mb-12">
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Product Note · {note.readTime}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">{note.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{note.summary}</p>
            <div className="flex flex-wrap gap-2 mt-8">
              {note.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">{tag}</span>
              ))}
            </div>
          </header>
          <div className="bg-card rounded-2xl border border-card-border p-8 md:p-12">
            {note.sections.map((section, index) => (
              <section key={index} className={index < note.sections.length - 1 ? "mb-10" : ""}>
                {section.heading && <h2 className="text-xl font-bold mb-4">{section.heading}</h2>}
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 mt-4">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
        <a href={backUrl} className="inline-flex items-center gap-2 mt-10 text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <ArrowLeft size={16} /> Back to Writing
        </a>
      </main>
    </div>
  );
}