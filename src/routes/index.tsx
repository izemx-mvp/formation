import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Sparkles,
  Bot,
  Zap,
  TrendingUp,
  Clock,
  Check,
  X,
  Calendar,
  Users,
  Target,
  Briefcase,
  Rocket,
  Brain,
  Workflow,
  Award,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Formation IA IZEMX — Prenez une longueur d'avance grâce à l'IA" },
      {
        name: "description",
        content:
          "Formation IA premium en 3 semaines pour dirigeants et entrepreneurs. Automatisez votre activité, créez vos premiers agents IA. Places limitées à 20 participants.",
      },
      { property: "og:title", content: "Formation IA IZEMX" },
      {
        property: "og:description",
        content: "Formation immersive IA pour entrepreneurs — Session juillet 2026.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const LOGO = "https://izemx.com/wp-content/uploads/2024/12/Izemx-Logo-blue.png";

const navItems = [
  { label: "Programme", href: "#programme" },
  { label: "Le formateur", href: "#formateur" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={LOGO} alt="IZEMX" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#inscription"
          className="rounded-full bg-gradient-izemx px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
        >
          Réserver ma place
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const benefits = [
    "9 heures de formation en direct",
    "1 heure de coaching individuel",
    "Travail sur votre propre activité",
    "Ateliers pratiques et quiz interactifs",
    "Sessions limitées à 20 participants",
  ];
  const floats = [
    { label: "Agents IA", icon: Bot, pos: "top-4 -left-4 sm:-left-10" },
    { label: "Automatisation", icon: Workflow, pos: "top-1/3 -right-4 sm:-right-10" },
    { label: "Productivité", icon: Zap, pos: "bottom-24 -left-6 sm:-left-12" },
    { label: "ROI", icon: TrendingUp, pos: "bottom-8 right-6" },
    { label: "Gain de temps", icon: Clock, pos: "top-10 right-8" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Places limitées à 20 participants par groupe
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Prenez une longueur d'avance grâce à{" "}
            <span className="text-gradient">l'intelligence artificielle</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Apprenez à automatiser votre activité, créer vos premiers agents IA et construire
            une stratégie adaptée à votre entreprise en seulement 3 semaines.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/80">
            Une formation immersive conçue spécialement pour les entrepreneurs et les
            entreprises qui souhaitent gagner du temps, automatiser leurs opérations et
            accélérer leur croissance grâce à l'IA.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 glass rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Calendar className="h-4 w-4 text-primary" /> Session juillet 2026
            </div>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
              <div>Samedi 11 juillet</div>
              <div>Samedi 18 juillet</div>
              <div>Samedi 25 juillet</div>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span>🕘 Matin : 9h00 – 12h00</span>
              <span>🕝 Après-midi : 14h30 – 17h30</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inscription"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-izemx px-6 py-3 font-semibold text-white shadow-lg shadow-primary/40 transition-transform hover:scale-105"
            >
              Réserver ma place
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programme"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Découvrir le programme
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-gradient-izemx opacity-40 blur-3xl animate-pulse-glow" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong glow-blue">
            <div className="absolute inset-0 bg-gradient-izemx opacity-30" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div className="px-6">
                <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-white/10 text-5xl backdrop-blur">
                  👤
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-white">
                  Mohsine Bahhou
                </div>
                <div className="text-xs text-muted-foreground">Fondateur IZEMX & IAvia</div>
              </div>
            </div>
          </div>

          {floats.map(({ label, icon: Icon, pos }, i) => (
            <div
              key={label}
              className={`absolute ${pos} animate-float glass rounded-2xl px-4 py-2.5 text-xs font-semibold text-white shadow-lg`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Ils parlent d'IZEMX
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-2xl font-display font-bold text-white/60">
          <span>Forbes</span>
          <span>BFM Business</span>
          <span>Le Figaro</span>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Les expertises et projets portés par IZEMX ont été relayés par plusieurs médias
          reconnus.
        </p>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    { icon: Briefcase, text: "Vous dirigez une entreprise" },
    { icon: Clock, text: "Vous perdez du temps sur des tâches répétitives" },
    { icon: Brain, text: "Vous utilisez déjà ChatGPT mais voulez aller plus loin" },
    { icon: Workflow, text: "Vous souhaitez automatiser votre activité" },
    { icon: Bot, text: "Vous souhaitez créer des agents IA" },
    { icon: Rocket, text: "Vous souhaitez lancer un projet basé sur l'IA" },
    { icon: Target, text: "Vous voulez prendre une longueur d'avance sur votre marché" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Cette formation est faite <span className="text-gradient">pour vous si…</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-izemx text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-foreground/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const classic = [
    "Théorie uniquement",
    "Cas génériques",
    "Grands groupes",
    "Peu d'interactions",
    "Pas d'accompagnement",
  ];
  const izemx = [
    "Formation orientée résultats",
    "Travail sur votre propre activité",
    "Maximum 20 participants",
    "Quiz interactifs via Kahoot",
    "Ateliers pratiques",
    "Projet individuel",
    "Coaching personnalisé",
    "Feuille de route IA",
  ];
  const stats = [
    { v: "9h", l: "de formation" },
    { v: "1h", l: "individuelle" },
    { v: "20", l: "participants max" },
    { v: "1", l: "projet concret par participant" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Ce qui rend cette formation <span className="text-gradient">unique</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Formation classique
            </div>
            <ul className="mt-6 space-y-3">
              {classic.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-destructive" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong rounded-2xl p-8 ring-1 ring-primary/40 glow-blue">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Formation IZEMX
            </div>
            <ul className="mt-6 space-y-3">
              {izemx.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl glass p-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-gradient font-display text-4xl font-bold">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Program() {
  const modules = [
    {
      day: "Samedi 1",
      title: "Comprendre et maîtriser l'IA",
      objective:
        "Découvrir l'écosystème IA et apprendre à utiliser efficacement les outils.",
      content: [
        "Comprendre les fondamentaux de l'IA",
        "Identifier les opportunités business",
        "Découvrir les outils incontournables",
        "Maîtriser les techniques de prompting",
        "Construire sa bibliothèque de prompts",
      ],
      workshops: ["Configuration des outils", "Exercices de prompting", "Cas pratiques"],
      deliverables: ["Stack IA personnalisée", "Bibliothèque de prompts"],
    },
    {
      day: "Samedi 2",
      title: "Automatiser son entreprise avec l'IA",
      objective:
        "Identifier les tâches chronophages et construire sa stratégie d'automatisation.",
      content: [
        "Cartographier ses processus",
        "Identifier les tâches automatisables",
        "Prioriser les opportunités",
        "Comprendre les workflows IA",
        "Découvrir les outils d'automatisation",
      ],
      workshops: [
        "Audit de son activité",
        "Construction d'une roadmap IA",
        "Création d'un premier workflow",
      ],
      deliverables: [
        "Cartographie des processus",
        "Matrice de priorisation",
        "Roadmap IA à 90 jours",
      ],
    },
    {
      day: "Samedi 3",
      title: "Créer ses premiers agents IA",
      objective: "Construire des agents IA adaptés à son activité.",
      content: [
        "Comprendre les agents IA",
        "Identifier les cas d'usage",
        "Construire ses premiers agents",
        "Définir une stratégie de déploiement",
      ],
      workshops: [
        "Création d'agents IA",
        "Tests et optimisation",
        "Présentation des projets",
      ],
      deliverables: ["Premier agent IA opérationnel", "Plan d'action personnalisé"],
    },
  ];
  return (
    <section id="programme" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <Calendar className="h-3.5 w-3.5" /> Programme sur 3 semaines
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Un parcours <span className="text-gradient">progressif & opérationnel</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent md:block" />
          <div className="space-y-8">
            {modules.map((m, i) => (
              <div key={m.day} className="relative md:pl-20">
                <div className="absolute left-0 top-0 hidden h-12 w-12 place-items-center rounded-full bg-gradient-izemx font-display text-lg font-bold text-white shadow-lg shadow-primary/40 md:grid">
                  {i + 1}
                </div>
                <div className="glass rounded-2xl p-6 sm:p-8 transition-all hover:border-primary/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {m.day}
                      </div>
                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        {m.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{m.objective}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div>
                      <div className="text-xs font-semibold uppercase text-primary/80">
                        Contenu
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                        {m.content.map((c) => (
                          <li key={c} className="flex gap-2">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase text-primary/80">
                        Ateliers
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                        {m.workshops.map((c) => (
                          <li key={c} className="flex gap-2">
                            <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase text-primary/80">
                        Livrables
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                        {m.deliverables.map((c) => (
                          <li key={c} className="flex gap-2">
                            <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg bg-primary/10 px-3 py-2 text-xs text-primary">
                    🎮 Quiz Kahoot pendant toute la session
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Coaching() {
  const items = [
    "Analyse du business",
    "Audit des processus",
    "Validation du projet",
    "Recommandations personnalisées",
    "Questions / réponses",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 glow-blue">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Inclus dans la formation
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                1 heure de <span className="text-gradient">coaching individuel</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Chaque participant bénéficie d'un accompagnement personnalisé afin d'analyser
                son activité, valider son projet et définir sa feuille de route.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it} className="glass rounded-xl p-4 text-sm font-medium text-white">
                  <Check className="mb-2 h-4 w-4 text-primary" />
                  {it}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section id="formateur" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-izemx opacity-40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl glass-strong">
              <div className="absolute inset-0 grid place-items-center bg-gradient-izemx/20">
                <div className="text-center">
                  <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-white/10 text-7xl backdrop-blur">
                    👤
                  </div>
                  <div className="mt-4 font-display text-2xl font-bold text-white">
                    Mohsine Bahhou
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Fondateur IZEMX & IAvia
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Le formateur
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Un expert reconnu de la <span className="text-gradient">transformation IA</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Mohsine Bahhou est le fondateur d'IZEMX et d'IAvia. Il accompagne les
                entreprises dans leur transformation digitale et l'intégration de
                l'intelligence artificielle.
              </p>
              <p>
                À travers IZEMX, société spécialisée dans le développement de solutions
                digitales sur mesure, il pilote des projets innovants en développement web,
                mobile, automatisation et agents IA.
              </p>
              <p>
                IZEMX est présente à <span className="text-white">Paris</span>,{" "}
                <span className="text-white">Casablanca</span> et{" "}
                <span className="text-white">Dubaï</span> et compte plus de{" "}
                <span className="text-white">100 collaborateurs</span>.
              </p>
              <p>Ses travaux ont été relayés par plusieurs médias reconnus.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Forbes", "BFM Business", "Le Figaro"].map((m) => (
                <span key={m} className="glass rounded-full px-3 py-1">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Faut-il savoir coder ?", a: "Non." },
    { q: "Cette formation est-elle adaptée aux débutants ?", a: "Oui." },
    {
      q: "Puis-je venir avec mon propre projet ?",
      a: "Oui, c'est même recommandé.",
    },
    {
      q: "Les sessions sont-elles enregistrées ?",
      a: "Oui, un replay est mis à disposition des participants pendant 30 jours.",
    },
    {
      q: "Quels outils seront utilisés ?",
      a: "ChatGPT, Claude, n8n, Make et plusieurs plateformes d'agents IA.",
    },
    {
      q: "Comment se déroule le coaching individuel ?",
      a: "Une visio d'une heure planifiée à votre convenance après la dernière session.",
    },
    {
      q: "Quels sont les moyens de paiement ?",
      a: "Carte bancaire et virement bancaire.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Questions <span className="text-gradient">fréquentes</span>
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="glass overflow-hidden rounded-xl">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white"
              >
                {it.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inscription() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    entreprise: "",
    fonction: "",
    email: "",
    telephone: "",
    session: "Groupe matin (9h00 – 12h00)",
    rgpd: false,
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.rgpd) return;
    const msg = `Bonjour,%0A%0AJe souhaite m'inscrire à la formation IA IZEMX.%0A%0APrénom : ${form.prenom}%0ANom : ${form.nom}%0AEntreprise : ${form.entreprise}%0AFonction : ${form.fonction}%0AEmail : ${form.email}%0ATéléphone : ${form.telephone}%0ASession : ${form.session}%0A%0AMerci de me recontacter afin de finaliser mon inscription.`;
    const subject = encodeURIComponent("Nouvelle inscription — Formation IA IZEMX");
    const body = decodeURIComponent(msg);
    window.open(
      `mailto:formation@izemx.com?subject=${subject}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    window.open(`https://wa.me/212661403350?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="inscription" className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="glass-strong rounded-3xl p-10 glow-blue">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-izemx">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">Merci pour votre demande</h2>
            <p className="mt-3 text-muted-foreground">
              Notre équipe vous contactera rapidement afin de finaliser votre inscription.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="inscription" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 glow-blue">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Réservez votre place pour la{" "}
              <span className="text-gradient">session de juillet</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Les places sont limitées à 20 participants par groupe.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Prénom *"
              className={input}
              value={form.prenom}
              onChange={(e) => update("prenom", e.target.value)}
            />
            <input
              required
              placeholder="Nom *"
              className={input}
              value={form.nom}
              onChange={(e) => update("nom", e.target.value)}
            />
            <input
              required
              placeholder="Entreprise *"
              className={input}
              value={form.entreprise}
              onChange={(e) => update("entreprise", e.target.value)}
            />
            <input
              required
              placeholder="Fonction *"
              className={input}
              value={form.fonction}
              onChange={(e) => update("fonction", e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email professionnel *"
              className={input}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <input
              required
              type="tel"
              placeholder="Téléphone *"
              className={input}
              value={form.telephone}
              onChange={(e) => update("telephone", e.target.value)}
            />
            <select
              className={`${input} sm:col-span-2`}
              value={form.session}
              onChange={(e) => update("session", e.target.value)}
            >
              <option>Groupe matin (9h00 – 12h00)</option>
              <option>Groupe après-midi (14h30 – 17h30)</option>
            </select>

            <label className="flex items-start gap-3 text-xs text-muted-foreground sm:col-span-2">
              <input
                type="checkbox"
                checked={form.rgpd}
                onChange={(e) => update("rgpd", e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-primary"
                required
              />
              J'accepte d'être recontacté dans le cadre de ma demande d'inscription.
            </label>

            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-izemx px-6 py-4 font-semibold text-white shadow-lg shadow-primary/40 transition-transform hover:scale-[1.02]"
            >
              Réserver ma place
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="sm:col-span-2 text-center text-xs text-muted-foreground">
              Après validation de votre demande, notre équipe vous recontactera afin de
              finaliser votre inscription et procéder au règlement. Modes de paiement :
              carte bancaire et virement bancaire.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <img src={LOGO} alt="IZEMX" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground">
            Solutions digitales sur mesure & intelligence artificielle.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Liens</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://izemx.com" className="hover:text-primary">
                Site principal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> formation@izemx.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> +212 661 403 350
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </li>
          </ul>
        </div>
        <div>
          <div className="glass rounded-xl p-4 text-xs text-muted-foreground">
            <Users className="mb-2 h-4 w-4 text-primary" />
            Places limitées à 20 participants par groupe.
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} IZEMX — Tous droits réservés.
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ForWhom />
        <Compare />
        <Program />
        <Coaching />
        <Trainer />
        <FAQ />
        <Inscription />
      </main>
      <Footer />
    </div>
  );
}
