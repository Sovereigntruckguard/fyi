"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactoSchema, type ContactoInput } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { trackEvent } from "@/components/analytics";

export function ContactoForm() {
  const [status, setStatus] = useState("");
  const form = useForm<ContactoInput>({ resolver: zodResolver(contactoSchema), defaultValues: { consent: false, website: "" } });
  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("Enviando...");
    const res = await fetch("/api/forms/contacto", { method: "POST", body: JSON.stringify(values) });
    setStatus(res.ok ? "Mensaje enviado." : "No se pudo enviar.");
    if (res.ok) trackEvent("contacto_submit");
  });

  return <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-800 p-6">
    <input type="text" className="hidden" {...form.register("website")} />
    <Input placeholder="Nombre" {...form.register("name")} />
    <Input placeholder="Email" {...form.register("email")} />
    <Input placeholder="Teléfono" {...form.register("phone")} />
    <Textarea placeholder="Mensaje" {...form.register("message")} />
    <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.watch("consent")} onCheckedChange={(v)=>form.setValue("consent", Boolean(v))}/> Acepto tratamiento de datos.</label>
    <Button type="submit">Enviar contacto</Button>
    <p className="text-sm text-slate-300">{status}</p>
  </form>;
}
