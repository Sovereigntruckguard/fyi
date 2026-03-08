# Sovereign TruckGuard LLC Web

Aplicación Next.js (App Router) lista para deploy en Vercel.

## Stack
- Next.js + TypeScript
- Tailwind CSS
- Componentes base estilo shadcn/ui
- React Hook Form + Zod
- Route Handlers para formularios

## Setup local
1. `npm install`
2. `cp .env.example .env.local`
3. `npm run dev`
4. Abrir `http://localhost:3000`

## Build producción
- `npm run build`
- `npm run start`

## Variables de entorno
- `NEXT_PUBLIC_SITE_URL`: URL canónica pública.
- `NEXT_PUBLIC_GA_ID`: ID de GA4 (opcional).
- `FORMS_WEBHOOK_URL`: webhook para conectar CRM / Resend / Email.

## Formularios e integraciones
Todos los forms envían a `/api/forms/*`.
- Sin `FORMS_WEBHOOK_URL` trabajan en modo mock (respuesta exitosa).
- Para conectar CRM/email, configura el webhook y recibe payload con `{ kind, data }`.

## Analytics
Eventos listos en cliente:
- `home_cta_click`
- `metodo_cta_click`
- `simulador_start`
- `simulador_complete`
- `simulador_result_view`
- `diagnostico_submit`
- `contacto_submit`

## Deploy en Vercel
1. Importar repositorio en Vercel.
2. Configurar variables de entorno del `.env.example`.
3. Build command: `npm run build`.
4. Output: automático de Next.js.
5. Deploy.

## Mockeado actualmente
- Conector externo de formularios (mock hasta definir `FORMS_WEBHOOK_URL`).
- Entradas de blog (estáticas, reemplazar por CMS o MDX).
