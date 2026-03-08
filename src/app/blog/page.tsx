import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Blog", description: "Contenido técnico y estratégico para operadores en etapa de consolidación." };

export default function BlogPage() {
  const posts = ["Break-even prudente para owner-operators", "Factoring sin ahogar caja", "Checklist de compliance inicial"];
  return <PageShell title="Blog Sovereign" description="Repositorio editorial para educación continua y tráfico orgánico."><ul className="space-y-3">{posts.map((p)=><li key={p} className="rounded border border-slate-800 p-4">{p}</li>)}</ul></PageShell>;
}
