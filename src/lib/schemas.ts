import { z } from "zod";

const requiredString = (label: string) => z.string().min(2, `${label} es requerido.`);

export const diagnosticoSchema = z.object({
  firstName: requiredString("Nombre"),
  lastName: requiredString("Apellido"),
  phone: z.string().min(10, "Teléfono inválido."),
  email: z.string().email("Email inválido."),
  state: requiredString("Estado"),
  experience: requiredString("Experiencia"),
  operationType: requiredString("Tipo de operación"),
  hasCdl: z.enum(["si", "no"]),
  capital: z.string().min(1, "Capital disponible es requerido."),
  primaryNeed: requiredString("Necesidad principal"),
  consent: z.boolean().refine((v) => v, "Debes aceptar el consentimiento legal."),
  website: z.string().max(0).optional()
});

export const contactoSchema = z.object({
  name: requiredString("Nombre"),
  email: z.string().email("Email inválido."),
  phone: z.string().min(10, "Teléfono inválido."),
  message: z.string().min(10, "Comparte más contexto."),
  consent: z.boolean().refine((v) => v, "Debes aceptar el consentimiento."),
  website: z.string().max(0).optional()
});

export const newsletterSchema = z.object({
  email: z.string().email("Email inválido."),
  website: z.string().max(0).optional()
});

export const aliadoSchema = z.object({
  company: requiredString("Empresa"),
  contactName: requiredString("Nombre"),
  email: z.string().email("Email inválido."),
  serviceType: requiredString("Servicio"),
  message: z.string().min(15, "Cuéntanos cómo agregas valor."),
  website: z.string().max(0).optional()
});

export const simulatorSchema = z.object({
  initialCapital: z.coerce.number().min(0),
  operationType: z.enum(["regional", "otr", "local"]),
  experienceYears: z.coerce.number().min(0).max(40),
  estimatedCostPerMile: z.coerce.number().min(0),
  estimatedRatePerMile: z.coerce.number().min(0),
  dieselSensitivity: z.coerce.number().min(0).max(100),
  commercialInsurance: z.coerce.number().min(0),
  factoring: z.coerce.number().min(0).max(100),
  complianceStack: z.coerce.number().min(0).max(100),
  operationalRisk: z.coerce.number().min(0).max(100)
});

export type DiagnosticoInput = z.infer<typeof diagnosticoSchema>;
export type ContactoInput = z.infer<typeof contactoSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type AliadoInput = z.infer<typeof aliadoSchema>;
export type SimulatorInput = z.infer<typeof simulatorSchema>;
