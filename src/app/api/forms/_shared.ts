import { ZodSchema } from "zod";
import { dispatchLead, FormKind } from "@/services/form-adapter";

export async function handleForm(request: Request, schema: ZodSchema, kind: FormKind) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);
    if ("website" in parsed && parsed.website) {
      return Response.json({ ok: true }, { status: 200 });
    }
    const result = await dispatchLead({ kind, data: parsed as Record<string, unknown> });
    return Response.json(result);
  } catch (error) {
    return Response.json({ ok: false, message: (error as Error).message }, { status: 400 });
  }
}
