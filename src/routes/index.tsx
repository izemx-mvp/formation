import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Brain, Code2, Rocket, Check, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neural — Formations IA pratiques pour passer à l'action" },
      { name: "description", content: "Apprenez l'IA générative avec des formations concrètes : prompts, agents, RAG, fine-tuning. Cohortes en français, projets réels." },
      { property: "og:title", content: "Neural — Formations IA pratiques" },
      { property: "og:description", content: "Formations IA en français : prompts, agents, RAG, automatisation. Apprenez en construisant." },
    ],
  }),
  component: Index,
});

const formations = [
  {
    icon: Sparkles,
    level: "Débutant",
    title: "Prompt Engineering Essentiel",
    duration: "4 semaines",
    desc: "Maîtrisez l'art du prompt. De ChatGPT aux modèles avancés, créez des workflows fiables.",
    price: "490 €",
  },
  {
    icon: Brain,
    level: "Intermédiaire",
    title: "RAG & Agents Autonomes",
    duration: "6 semaines",
    desc: "Construisez des assistants connectés à vos données. LangChain, vecteurs, mémoire, outils.",
    price: "890 €",
    featured: true,
  },
  {
    icon: Code2,
    level: "Avancé",
    title: "Fine-tuning & Déploiement",
    duration: "8 semaines",
    desc: "Spécialisez vos propres modèles. Datasets, LoRA, évaluation et mise en production.",
    price: "1490 €",
  },
];

const features = [
  "Cohortes de 20 personnes maximum",
  "Projets réels avec mentor dédié",
  "Accès à vie aux mises à jour",
  "Certificat reconnu par 80+ entreprises",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Neural</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#formations" className="hover:text-foreground">Formations</a>
            <a href="#approche" className="hover:text-foreground">Approche</a>
            <a href="#temoignages" className="hover:text-foreground">Témoignages</a>
          </div>
          <Button size="sm">Réserver une place</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.85 0.18 95 / 0.25), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.7 0.18 320 / 0.25), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Nouvelle cohorte — Septembre 2026
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Apprenez l'IA{" "}
            <span className="italic text-primary">en construisant</span>,
            pas en regardant des slides.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Des formations IA pratiques, en français, pensées pour les pros qui veulent
            livrer des projets en production — pas collectionner des certificats.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2">
              Voir les formations <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Télécharger le syllabus
            </Button>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              { k: "1 200+", v: "Apprenants formés" },
              { k: "94%", v: "Recommandent" },
              { k: "80+", v: "Entreprises partenaires" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge variant="outline" className="mb-4">Catalogue</Badge>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Trois parcours. Un objectif :{" "}
                <span className="text-primary">livrer.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Chaque cohorte combine cours en direct, projets concrets et revues de code par un mentor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {formations.map((f) => (
              <Card
                key={f.title}
                className={`relative overflow-hidden p-8 transition ${
                  f.featured
                    ? "border-primary/40 bg-card shadow-[0_0_60px_-15px_oklch(0.85_0.18_95_/_0.4)]"
                    : "bg-card hover:border-primary/30"
                }`}
              >
                {f.featured && (
                  <Badge className="absolute right-6 top-6">Populaire</Badge>
                )}
                <f.icon className="h-8 w-8 text-primary" />
                <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  {f.level} · {f.duration}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
                <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                  <div className="text-3xl font-semibold tracking-tight">{f.price}</div>
                  <Button variant={f.featured ? "default" : "outline"} size="sm" className="gap-1">
                    Détails <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section id="approche" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">Notre approche</Badge>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              On forme des praticiens, pas des spectateurs.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              80% du temps en pratique. Vous repartez avec un portfolio de projets
              déployés, pas une pile de PDFs.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Card className="bg-card p-8">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">agent.ts</span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted-foreground">
                <code>{`const agent = createAgent({
  model: "gpt-5",
  tools: [search, calendar, db],
  memory: vectorStore,
});

await agent.run(
  "Planifie ma semaine"
);

// → 14 actions exécutées
// → 2.3s · 0.04 €`}</code>
              </pre>
              <div className="mt-6 flex items-center gap-3 rounded-lg bg-primary/10 p-4">
                <Rocket className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Semaine 3 · Projet</div>
                  <div className="text-muted-foreground">Déployez votre premier agent</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Badge variant="outline" className="mb-4">Témoignages</Badge>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Ce que disent celles et ceux qui sont passés à l'action.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Marie L.",
                role: "Product Manager · Doctolib",
                quote: "J'ai automatisé 60% de mon backlog d'analyse en 4 semaines. ROI immédiat.",
              },
              {
                name: "Karim B.",
                role: "Dev Senior · Freelance",
                quote: "Le parcours Agents m'a permis de vendre ma première mission IA à 18k €.",
              },
              {
                name: "Sophie R.",
                role: "Founder · Studio Lumen",
                quote: "Pédagogie au top. On code dès le jour 1, et le mentor est ultra dispo.",
              },
            ].map((t) => (
              <Card key={t.name} className="bg-card p-8">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Card
            className="relative overflow-hidden p-12 text-center md:p-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, oklch(0.85 0.18 95 / 0.2), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.7 0.18 320 / 0.2), transparent 50%)",
            }}
          >
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              La prochaine cohorte commence dans{" "}
              <span className="text-primary">14 jours</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              12 places restantes. Réservez la vôtre en 2 minutes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Réserver ma place <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Parler à un conseiller
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground">
            <Brain className="h-4 w-4" />
          </div>
          <span>© 2026 Neural · Formations IA</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Mentions légales</a>
          <a href="#" className="hover:text-foreground">CGV</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </footer>
    </div>
  );
}
