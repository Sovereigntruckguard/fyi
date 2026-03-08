import { handleForm } from "../_shared";
import { diagnosticoSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  return handleForm(request, diagnosticoSchema, "diagnostico");
}
