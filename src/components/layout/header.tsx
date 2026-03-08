import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#090f1d]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-site items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-100">
          Sovereign TruckGuard LLC
        </Link>
        <nav className="hidden gap-5 md:flex">
          {siteConfig.nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild size="lg">
          <Link href="/simulador">{siteConfig.ctaPrimary}</Link>
        </Button>
      </div>
    </header>
  );
}
