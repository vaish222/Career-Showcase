import { useEffect } from "react";

function setMeta(selector: string, attribute: string, value: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    const [name, key] = selector.includes("property=")
      ? ["property", selector.match(/property="([^"]+)"/)?.[1]]
      : ["name", selector.match(/name="([^"]+)"/)?.[1]];
    if (key) meta.setAttribute(name, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute(attribute, value);
}

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", window.location.href.split("#")[0]);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description]);
  return null;
}