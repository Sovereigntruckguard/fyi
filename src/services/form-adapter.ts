export type FormKind = "diagnostico" | "contacto" | "newsletter" | "aliado";

interface DispatchPayload {
  kind: FormKind;
  data: Record<string, unknown>;
}

export async function dispatchLead(payload: DispatchPayload) {
  const webhook = process.env.FORMS_WEBHOOK_URL;
  if (!webhook) {
    return { ok: true, mode: "mock", message: "Stored in mock mode." };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("No se pudo enviar el formulario al webhook.");
  }

  return { ok: true, mode: "webhook" };
}
