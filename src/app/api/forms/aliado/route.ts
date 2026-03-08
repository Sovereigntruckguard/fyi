import { handleForm } from "../_shared";
import { aliadoSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  return handleForm(request, aliadoSchema, "aliado");
}
