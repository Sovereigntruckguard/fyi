import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Academy", description: "Educación aplicable para disciplina de caja, compliance y expansión." };

export default function AcademyPage() {
  return <PageShell title="Sovereign Academy" description="Programas de formación orientados a permanencia y decisiones de negocio."><p className="text-slate-300">Currículum enfocado en números operativos, gestión documental y liderazgo de flota temprana.</p></PageShell>;
}
