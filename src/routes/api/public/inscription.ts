import { createFileRoute } from "@tanstack/react-router";
import postgres from "postgres";

let sqlClient: ReturnType<typeof postgres> | null = null;
let schemaReady: Promise<void> | null = null;

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!sqlClient) {
    sqlClient = postgres(url, { ssl: "require", prepare: false });
  }
  return sqlClient;
}

async function ensureSchema(sql: ReturnType<typeof postgres>) {
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        prenom TEXT,
        nom TEXT,
        entreprise TEXT,
        fonction TEXT,
        email TEXT,
        telephone TEXT,
        session TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `.then(() => undefined).catch((e) => {
      schemaReady = null;
      throw e;
    });
  }
  return schemaReady;
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

type Payload = {
  prenom: string;
  nom: string;
  entreprise: string;
  fonction: string;
  email: string;
  telephone: string;
  session: string;
};

function buildHtml(d: Payload) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px;color:#555"><b>${k}</b></td><td style="padding:6px 12px">${v}</td></tr>`;
  return `<div style="font-family:Arial,sans-serif;max-width:600px">
    <h2 style="color:#00A3E0">Nouvelle inscription — Formation IA IZEMX</h2>
    <table style="border-collapse:collapse;width:100%;background:#f9fafb;border-radius:8px">
      ${row("Prénom", d.prenom)}
      ${row("Nom", d.nom)}
      ${row("Entreprise", d.entreprise)}
      ${row("Fonction", d.fonction)}
      ${row("Email", d.email)}
      ${row("Téléphone", d.telephone)}
      ${row("Session", d.session)}
    </table>
  </div>`;
}

export const Route = createFileRoute("/api/public/inscription")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        try {
          const data = (await request.json()) as Partial<Payload>;
          const required: (keyof Payload)[] = [
            "prenom",
            "nom",
            "entreprise",
            "fonction",
            "email",
            "telephone",
            "session",
          ];
          for (const k of required) {
            if (!data[k] || typeof data[k] !== "string" || (data[k] as string).length > 200) {
              return new Response(JSON.stringify({ error: `Invalid ${k}` }), {
                status: 400,
                headers: { "Content-Type": "application/json", ...CORS },
              });
            }
          }
          const payload = data as Payload;

          try {
            const sql = getSql();
            if (sql) {
              await ensureSchema(sql);
              await sql`
                INSERT INTO leads (prenom, nom, entreprise, fonction, email, telephone, session)
                VALUES (${payload.prenom}, ${payload.nom}, ${payload.entreprise}, ${payload.fonction}, ${payload.email}, ${payload.telephone}, ${payload.session})
              `;
            } else {
              console.warn("DATABASE_URL not set — skipping lead insert");
            }
          } catch (dbErr) {
            console.error("DB insert error", dbErr);
          }

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          const RESEND_API_KEY = process.env.RESEND_API_KEY;

          if (LOVABLE_API_KEY && RESEND_API_KEY) {
            const res = await fetch(
              "https://connector-gateway.lovable.dev/resend/emails",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${LOVABLE_API_KEY}`,
                  "X-Connection-Api-Key": RESEND_API_KEY,
                },
                body: JSON.stringify({
                  from: "Formation IZEMX <onboarding@resend.dev>",
                  to: ["formation@izemx.com"],
                  reply_to: payload.email,
                  subject: "Nouvelle inscription — Formation IA IZEMX",
                  html: buildHtml(payload),
                }),
              },
            );
            if (!res.ok) {
              const text = await res.text();
              console.error("Resend error", res.status, text);
            }
          } else {
            console.warn(
              "Email not sent — Resend connector not configured. Payload:",
              payload,
            );
          }

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json", ...CORS },
          });
        } catch (err) {
          console.error("inscription handler error", err);
          return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json", ...CORS },
          });
        }
      },
    },
  },
});
