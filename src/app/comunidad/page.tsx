import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Comunidad Guardian", description: "Pertenencia, accountability y retención para operadores bajo estándar institucional." };

export default function ComunidadPage() {
  return <PageShell title="Comunidad Guardian" description="Entorno privado para operadores comprometidos con crecimiento sostenible."><p className="text-slate-300">Sesiones mensuales, revisión de KPI y soporte táctico entre miembros.</p></PageShell>;
}
