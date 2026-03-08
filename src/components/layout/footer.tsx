import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b15]">
      <div className="mx-auto grid w-full max-w-site gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-white">Sovereign TruckGuard LLC</p>
          <p className="mt-2 text-sm text-slate-400">Trucking Guardian Infrastructure.</p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <Link href="/legal">Privacidad y Términos</Link>
          <br />
          <Link href="/contacto">Contacto formal</Link>
          <br />
          <Link href="/aliados">Aplicación a aliados</Link>
        </div>
        <div className="text-sm text-slate-400">
          Operamos con cartera cerrada y diagnóstico obligatorio. No garantizamos resultados financieros.
        </div>
      </div>
    </footer>
  );
}
