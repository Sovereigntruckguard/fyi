"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [status, setStatus] = useState("");
  const form = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema), defaultValues: { website: "" } });
  const onSubmit = form.handleSubmit(async (values) => {
    const res = await fetch("/api/forms/newsletter", { method: "POST", body: JSON.stringify(values) });
    setStatus(res.ok ? "Suscripción registrada." : "No se pudo procesar.");
  });
  return <form onSubmit={onSubmit} className="flex gap-2"><input type="text" className="hidden" {...form.register("website")} /><Input placeholder="Email" {...form.register("email")} /><Button type="submit">Suscribirme</Button><span className="text-xs">{status}</span></form>;
}
