"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { diagnosticoSchema, type DiagnosticoInput } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { trackEvent } from "@/components/analytics";

export function DiagnosticoForm() {
  const [status, setStatus] = useState<string>("");
  const form = useForm<DiagnosticoInput>({
    resolver: zodResolver(diagnosticoSchema),
    defaultValues: { consent: false, hasCdl: "si", website: "" }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("Enviando...");
    const res = await fetch("/api/forms/diagnostico", { method: "POST", body: JSON.stringify(values) });
    if (!res.ok) {
      setStatus("Error al enviar. Intenta nuevamente.");
      return;
    }
    setStatus("Aplicación enviada. Te contactaremos en 1-2 días hábiles.");
    trackEvent("diagnostico_submit");
    form.reset();
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <input type="text" className="hidden" tabIndex={-1} {...form.register("website")} />
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["firstName", "Nombre"],
          ["lastName", "Apellido"],
          ["phone", "Teléfono"],
          ["email", "Email"]
        ].map(([key, label]) => (
          <div key={key}>
            <Label>{label}</Label>
            <Input {...form.register(key as keyof DiagnosticoInput)} />
            <p className="text-xs text-rose-300">{String(form.formState.errors[key as keyof DiagnosticoInput]?.message ?? "")}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div><Label>Estado</Label><Input {...form.register("state")} /></div>
        <div><Label>Experiencia</Label><Input {...form.register("experience")} /></div>
        <div><Label>Capital disponible</Label><Input {...form.register("capital")} /></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Tipo de operación</Label>
          <Select {...form.register("operationType")}>
            <option value="">Selecciona</option><option value="local">Local</option><option value="regional">Regional</option><option value="otr">OTR</option>
          </Select>
        </div>
        <div>
          <Label>¿CDL activa?</Label>
          <Select {...form.register("hasCdl")}><option value="si">Sí</option><option value="no">No</option></Select>
        </div>
      </div>
      <div><Label>Necesidad principal</Label><Input {...form.register("primaryNeed")} /></div>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={form.watch("consent")} onCheckedChange={(v) => form.setValue("consent", Boolean(v))} /> Acepto el consentimiento legal y política de datos.</label>
      <p className="text-xs text-rose-300">{String(form.formState.errors.consent?.message ?? "")}</p>
      <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Enviando" : "Aplicar al Diagnóstico"}</Button>
      <p className="text-sm text-slate-300">{status}</p>
    </form>
  );
}
