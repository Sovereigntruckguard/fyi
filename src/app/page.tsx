import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/cta-link";
import { Card } from "@/components/ui/card";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Infraestructura Guardian para Owner-Operators",
  description: "Filtrado, diagnóstico y activación institucional para camioneros latinos con ambición empresarial en EE. UU.",
  alternates: { canonical: "/" }
};

const pillars = ["Gobierno de caja", "Arquitectura legal", "Control de riesgo", "Operación por procesos"];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sovereign TruckGuard LLC",
            url: "https://sovereigntruckguard.com",
            description: "Trucking Guardian Infrastructure para owner-operators.",
            areaServed: ["TX", "FL", "IL", "GA", "NJ", "PA"]
          })
        }}
      />

      <section className="section pt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Trucking Guardian Infrastructure</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold text-white md:text-6xl">Construimos empresas de trucking sólidas, no trámites.</h1>
        <p className="mt-6 max-w-2xl text-slate-300">Modelo Guardian para operadores con CDL activa y decisión empresarial real.</p>
        <div className="mt-8 flex gap-3">
          <CtaLink href="/simulador" event="home_cta_click">Inicia tu Ruta Soberana</CtaLink>
          <Button variant="outline" asChild size="lg"><Link href="/metodo">Conocer el Ecosistema</Link></Button>
        </div>
      </section>

      <section className="section grid gap-4 md:grid-cols-4">
        {pillars.map((p) => <Card key={p}><p className="text-sm text-slate-200">{p}</p></Card>)}
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <Card><h2 className="text-2xl text-white">Método 1–7 fases</h2><p className="mt-2 text-slate-300">Del diagnóstico a membership con control de cumplimiento, caja y expansión.</p><Button className="mt-4" asChild><Link href="/metodo">Ver método</Link></Button></Card>
        <Card><h2 className="text-2xl text-white">Simulador estratégico</h2><p className="mt-2 text-slate-300">Evalúa viabilidad con variables reales: costos por milla, riesgo operativo y sensibilidad de diésel.</p><CtaLink href="/simulador" event="home_cta_click">Simular tu Ruta</CtaLink></Card>
        <Card><h2 className="text-2xl text-white">Academy</h2><p className="mt-2 text-slate-300">Educación para permanencia y expansión disciplinada.</p><Button className="mt-4" asChild variant="outline"><Link href="/academy">Explorar Academy</Link></Button></Card>
        <Card><h2 className="text-2xl text-white">Comunidad Guardian</h2><p className="mt-2 text-slate-300">Red de operadores con estándares institucionales altos.</p><Button className="mt-4" asChild variant="outline"><Link href="/comunidad">Entrar a Comunidad</Link></Button></Card>
      </section>

      <section className="section">
        <Card>
          <h2 className="text-3xl text-white">Aplicar al Diagnóstico</h2>
          <p className="mt-2 text-slate-300">Diagnóstico obligatorio ($397), Activation ($4,800), Membership ($1,000/mes). Cartera cerrada.</p>
          <div className="mt-5 flex gap-3"><Button asChild><Link href="/contacto">Aplicar al Diagnóstico</Link></Button><Button variant="outline" asChild><Link href="/respaldo">Respaldo institucional</Link></Button></div>
          <p className="mt-4 text-xs text-slate-400">No prometemos retornos financieros. Evaluamos ajuste estratégico y disciplina operativa.</p>
        </Card>
      </section>

      <section className="section pt-0">
        <h3 className="mb-3 text-xl text-white">Suscripción estratégica</h3>
        <NewsletterForm />
      </section>
    </>
  );
}
