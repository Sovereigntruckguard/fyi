import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { siteUrl } from "@/lib/utils";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sovereign TruckGuard LLC | Guardian Infrastructure",
    template: "%s | Sovereign TruckGuard LLC"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Sovereign TruckGuard LLC",
    description: siteConfig.description,
    url: siteUrl,
    siteName: "Sovereign TruckGuard LLC",
    locale: "es_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign TruckGuard LLC",
    description: siteConfig.description
  },
  alternates: { canonical: siteUrl }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
