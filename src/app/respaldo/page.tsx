import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Respaldo Institucional", description: "Autoridad operativa, tecnología integrada y confianza para toma de decisiones." };

export default function RespaldoPage() {
  return <PageShell title="Respaldo institucional" description="Estructura de compliance, tecnología y marco financiero disciplinado."><p className="text-slate-300">Diseñado para reducir improvisación y elevar predictibilidad operativa.</p></PageShell>;
}
