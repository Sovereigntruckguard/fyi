import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Sobre Nosotros", description: "Liderazgo, principios y estándar institucional de Sovereign TruckGuard LLC." };

export default function SobreNosotrosPage() {
  return <PageShell title="Sobre Sovereign TruckGuard" description="Equipo enfocado en diseñar operaciones resilientes para owner-operators latinos."><p className="text-slate-300">Priorizamos exclusividad, caja, procesos y tecnología integrada.</p></PageShell>;
}
