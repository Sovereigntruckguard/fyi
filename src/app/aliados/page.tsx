import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { AliadoForm } from "@/components/forms/aliado-form";

export const metadata: Metadata = { title: "Aliados", description: "Red de proveedores y partners estratégicos alineados al estándar Guardian." };

export default function AliadosPage() {
  return <PageShell title="Red de aliados" description="Aplicación para integrarse a la red orquestada de servicios."><AliadoForm /></PageShell>;
}
