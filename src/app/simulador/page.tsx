import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SimuladorForm } from "@/components/forms/simulador";

export const metadata: Metadata = { title: "Simulador de Ruta Soberana", description: "Diagnóstico preliminar de viabilidad con enfoque prudente y operativo." };

export default function SimuladorPage() {
  return <PageShell title="Simulador Guardian" description="Herramienta educativa para evaluar viabilidad operativa y nivel de preparación."><SimuladorForm /></PageShell>;
}
