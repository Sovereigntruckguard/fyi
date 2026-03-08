import { ReactNode } from "react";

export function PageShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <section className="section pb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Sovereign TruckGuard LLC</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{description}</p>
      </section>
      <section className="section pt-8">{children}</section>
    </>
  );
}
