"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { simulatorSchema, type SimulatorInput } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/components/analytics";

interface Result {
  viability: "Alta disciplina requerida" | "Viable con estructura" | "Riesgo alto";
  summary: string;
  recommendation: string;
}

function evaluate(input: SimulatorInput): Result {
  const margin = input.estimatedRatePerMile - input.estimatedCostPerMile;
  const preparedness = input.initialCapital / 1000 + input.experienceYears * 3 + input.complianceStack - input.operationalRisk;

  if (margin > 0.65 && preparedness > 55 && input.hasOwnProperty("factoring")) {
    return {
      viability: "Viable con estructura",
      summary: "Tu perfil muestra capacidad inicial, pero depende de control operativo y disciplina de caja.",
      recommendation: "Aplicar al Diagnóstico para diseñar secuencia legal, financiera y de riesgo antes de activar."
    };
  }
  if (margin > 0.35 && preparedness > 35) {
    return {
      viability: "Alta disciplina requerida",
      summary: "Hay señales de viabilidad, aunque el margen operativo es sensible a variaciones de diésel y seguros.",
      recommendation: "Ajusta pricing por ruta, límites de factoring y stack de cumplimiento antes de escalar."
    };
  }
  return {
    viability: "Riesgo alto",
    summary: "Con los datos actuales, la operación podría deteriorarse por fricción financiera y riesgo operativo.",
    recommendation: "No recomendamos activar unidad sin diagnóstico estructurado y plan de contingencia."
  };
}

export function SimuladorForm() {
  const [result, setResult] = useState<Result | null>(null);
  const form = useForm<SimulatorInput>({
    resolver: zodResolver(simulatorSchema),
    defaultValues: { operationType: "regional", factoring: 12, complianceStack: 55, dieselSensitivity: 30, operationalRisk: 35 }
  });

  const onSubmit = form.handleSubmit((values) => {
    trackEvent("simulador_complete");
    const calc = evaluate(values);
    setResult(calc);
    trackEvent("simulador_result_view", { viability: calc.viability });
  });

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-slate-800 p-6">
        <Input type="number" placeholder="Capital inicial (USD)" {...form.register("initialCapital")} onFocus={() => trackEvent("simulador_start")} />
        <Select {...form.register("operationType")}><option value="local">Local</option><option value="regional">Regional</option><option value="otr">OTR</option></Select>
        <Input type="number" placeholder="Años de experiencia" {...form.register("experienceYears")} />
        <Input type="number" step="0.01" placeholder="Costo estimado por milla" {...form.register("estimatedCostPerMile")} />
        <Input type="number" step="0.01" placeholder="Rate estimado por milla" {...form.register("estimatedRatePerMile")} />
        <Input type="number" placeholder="Sensibilidad al diésel (%)" {...form.register("dieselSensitivity")} />
        <Input type="number" placeholder="Seguro comercial mensual" {...form.register("commercialInsurance")} />
        <Input type="number" placeholder="Factoring (%)" {...form.register("factoring")} />
        <Input type="number" placeholder="Compliance stack (0-100)" {...form.register("complianceStack")} />
        <Input type="number" placeholder="Riesgo operativo (0-100)" {...form.register("operationalRisk")} />
        <Button type="submit">Calcular Break-even</Button>
      </form>
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
        {!result ? (
          <p className="text-slate-300">Completa el simulador para ver tu lectura de viabilidad y siguiente paso recomendado.</p>
        ) : (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold">Perfil de viabilidad: {result.viability}</p>
            <p>{result.summary}</p>
            <p className="text-slate-300">{result.recommendation}</p>
            <p className="text-xs text-slate-400">Este simulador es educativo. No constituye asesoría financiera ni promesa de resultados.</p>
            <Button asChild><Link href="/contacto">Aplicar al Diagnóstico</Link></Button>
          </div>
        )}
      </div>
    </div>
  );
}
