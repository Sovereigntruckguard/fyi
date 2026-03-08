import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { DiagnosticoForm } from "@/components/forms/diagnostico-form";
import { ContactoForm } from "@/components/forms/contacto-form";

export const metadata: Metadata = { title: "Contacto y Diagnóstico", description: "Canal formal para iniciar el proceso Guardian o resolver consultas institucionales." };

export default function ContactoPage() {
  return <PageShell title="Contacto formal" description="Completa tu aplicación al diagnóstico o envía una consulta institucional."><div className="grid gap-6 lg:grid-cols-2"><DiagnosticoForm /><ContactoForm /></div></PageShell>;
}
