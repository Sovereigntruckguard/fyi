import { handleForm } from "../_shared";
import { newsletterSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  return handleForm(request, newsletterSchema, "newsletter");
}
