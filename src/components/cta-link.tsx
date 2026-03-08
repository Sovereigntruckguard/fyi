"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackEvent } from "@/components/analytics";
import { Button } from "@/components/ui/button";

export function CtaLink({ href, event, children, variant = "default" }: { href: string; event: string; children: ReactNode; variant?: "default" | "outline" }) {
  return (
    <Button asChild variant={variant} onClick={() => trackEvent(event)}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
