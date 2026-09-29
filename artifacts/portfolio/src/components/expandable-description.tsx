import { useState } from "react";

export function ExpandableDescription({ description, preview, details, className = "" }: { description: string; preview?: string; details?: string[]; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const summary = preview ?? description.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? description;
  const hasMore = summary !== description || Boolean(details?.length);

  return (
    <div className={className}>
      <p className="text-muted-foreground leading-relaxed">{expanded ? description : summary}</p>
      {expanded && details && (
        <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
          {details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
      {hasMore && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}