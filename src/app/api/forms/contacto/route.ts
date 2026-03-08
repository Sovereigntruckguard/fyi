import { handleForm } from "../_shared";
import { contactoSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  return handleForm(request, contactoSchema, "contacto");
}
