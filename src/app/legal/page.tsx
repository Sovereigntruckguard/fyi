import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Legal", description: "Política de privacidad, términos y disclaimers de Sovereign TruckGuard LLC." };

export default function LegalPage() {
  return (
    <PageShell title="Legal y Cumplimiento" description="Marco legal base para captura de leads y uso informativo del sitio.">
      <div className="space-y-5 text-sm text-slate-300">
        <section><h2 className="text-lg text-white">Privacy Policy</h2><p>Recopilamos datos enviados voluntariamente en formularios para contacto comercial y evaluación de ajuste. Puedes solicitar eliminación vía contacto.</p></section>
        <section><h2 className="text-lg text-white">Terms & Conditions</h2><p>El contenido es educativo e informativo. El acceso al modelo Guardian está sujeto a evaluación y disponibilidad de cartera.</p></section>
        <section><h2 className="text-lg text-white">Disclaimer financiero/comercial</h2><p>No ofrecemos promesas de ingresos ni garantías de resultados. Toda decisión de negocio es responsabilidad del operador.</p></section>
        <section><h2 className="text-lg text-white">Consentimiento y no garantía</h2><p>Al enviar formularios autorizas contacto por medios electrónicos y telefónicos con fines de diagnóstico y seguimiento.</p></section>
      </div>
    </PageShell>
  );
}
