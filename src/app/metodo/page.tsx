import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = { title: "Método Guardian 1–7", description: "Arquitectura de fases para filtrar, activar y sostener operaciones de trucking." };

export default function MetodoPage() {
  const fases = ["Filtrado", "Diagnóstico", "Arquitectura legal", "Activation", "Membership", "Control KPI", "Expansión unidad 2"];
  return <PageShell title="Método Guardian" description="Estructura institucional para convertir intención en operación sostenible."><ol className="grid gap-3">{fases.map((f,i)=><li key={f} className="rounded-lg border border-slate-800 p-4">Fase {i+1}: {f}</li>)}</ol><div className="mt-6"><CtaLink href="/simulador" event="metodo_cta_click">Simular tu Ruta</CtaLink></div></PageShell>;
}
