"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { aliadoSchema, type AliadoInput } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function AliadoForm() {
  const [status, setStatus] = useState("");
  const form = useForm<AliadoInput>({ resolver: zodResolver(aliadoSchema), defaultValues: { website: "" } });
  const onSubmit = form.handleSubmit(async (values) => {
    const res = await fetch("/api/forms/aliado", { method: "POST", body: JSON.stringify(values) });
    setStatus(res.ok ? "Aplicación recibida." : "Error al enviar.");
  });

  return <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-slate-800 p-6"><input className="hidden" {...form.register("website")} /><Input placeholder="Empresa" {...form.register("company")} /><Input placeholder="Nombre de contacto" {...form.register("contactName")} /><Input placeholder="Email" {...form.register("email")} /><Input placeholder="Tipo de servicio" {...form.register("serviceType")} /><Textarea placeholder="Mensaje" {...form.register("message")} /><Button type="submit">Aplicar como aliado</Button><p className="text-sm text-slate-300">{status}</p></form>;
}
