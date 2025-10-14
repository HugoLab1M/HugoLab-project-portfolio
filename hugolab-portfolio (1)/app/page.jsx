'use client';

import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Agenda", href: "#agenda" },
  { label: "Stands", href: "#stands" },
  { label: "Contact", href: "#contact" },
];

const agendaItems = [
  {
    day: "Jeudi",
    date: "18 avril",
    theme: "Afterwork salsa",
    highlight: "DJ invités & tapas marins",
  },
  {
    day: "Vendredi",
    date: "19 avril",
    theme: "Concert folk",
    highlight: "Groupes locaux + planches à partager",
  },
  {
    day: "Samedi",
    date: "20 avril",
    theme: "Grand quiz nautique",
    highlight: "Lots surprises & cocktails signatures",
  },
];

const standHighlights = [
  {
    title: "Bar à cocktails",
    description:
      "Mixologie inspirée de La Seiche avec recettes saisonnières et jus pressés.",
    wait: "Attente estimée : 5 min",
    image:
      "https://images.unsplash.com/photo-1600353565730-0ce47d3ede86?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Rotisserie & street-food",
    description:
      "Poulet rôti, brochettes et options végétales servis en continu.",
    wait: "Attente estimée : 8 min",
    image:
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Loisirs & jeux d&apos;extérieur",
    description:
      "Pétanque, palets bretons et espaces détente pour prolonger la soirée.",
    wait: "Accès libre",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800&auto=format&fit=crop",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/rocketsfoodtruck" },
  { label: "Newsletter", href: "mailto:bonjour@rockets-traiteur.fr?subject=Newsletter%20La%20Seiche" },
];

const contactChannels = [
  { label: "Téléphone", value: "+33 6 00 00 00 00" },
  { label: "Email", value: "bonjour@rockets-traiteur.fr" },
  { label: "Adresse", value: "Lyon & agglomération" },
];

function Badge({ children, variant = "brand" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em]";
  const styles =
    variant === "light"
      ? "bg-white/15 text-white"
      : "bg-brand-rose/10 text-brand-red";
  const dotColor = variant === "light" ? "bg-white" : "bg-brand-red";

  return (
    <span className={`${base} ${styles}`}>
      <span className={`h-2 w-2 rounded-full ${dotColor}`}></span>
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description, tone = "dark" }) {
  const headingClass = tone === "light" ? "text-white" : "text-ink";
  const descriptionClass = tone === "light" ? "text-white/80" : "text-ink-soft";
  const badgeVariant = tone === "light" ? "light" : "brand";

  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow ? <Badge variant={badgeVariant}>{eyebrow}</Badge> : null}
      <h2 className={`font-display text-3xl font-semibold uppercase md:text-4xl ${headingClass}`}>{title}</h2>
      {description ? <p className={`text-base md:text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-shell text-ink">
      <div className="gradient-blur left-[-15%] top-[-10%] h-72 w-72 rounded-full bg-brand-rose/25"></div>
      <div className="gradient-blur right-[-12%] top-[45%] h-[18rem] w-[18rem] rounded-full bg-brand-sand/50"></div>

      <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 sm:pt-12">
        <nav className="flex items-center justify-between gap-6 rounded-full border border-brand-sand/60 bg-white/80 px-5 py-3 shadow-card backdrop-blur">
          <Link
            href="#accueil"
            className="inline-flex items-center gap-2 rounded-full border border-brand-rose/40 bg-shell px-4 py-2 text-sm font-medium text-brand-red transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <span className="h-2 w-2 rounded-full bg-brand-red"></span>
            Accueil
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-ink-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg text-white">🐙</span>
              La Seiche
            </div>
            <ul className="hidden items-center gap-6 text-sm font-medium text-ink-soft sm:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="transition hover:text-brand-red" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-red-dark"
          >
            Privatiser
            <span aria-hidden>→</span>
          </a>
        </nav>

        <section
          id="accueil"
          className="relative overflow-hidden rounded-[44px] bg-hero-gradient px-6 py-16 text-white shadow-card sm:px-12 sm:py-20"
        >
          <div className="absolute inset-0 bg-rose-radial"></div>
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <Badge>Bar • Restaurants • Loisirs</Badge>
              <h1 className="font-display text-4xl font-semibold uppercase leading-tight md:text-5xl lg:text-6xl">
                1 200 m² d&apos;expériences à vivre, 100 % orientées conversion
              </h1>
              <p className="text-lg text-white/85 md:text-xl">
                Créez un micro-site clair et immersif qui donne envie de venir ce soir et de privatiser La Seiche. Un design épuré, des CTA directs et un agenda vivant pour rythmer vos soirées.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#agenda"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-red transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Venir ce soir
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Parler du projet
                </a>
              </div>
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-3xl sm:h-56">
                <Image
                  alt="Ambiance La Seiche"
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=900&auto=format&fit=crop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-3xl sm:h-56">
                <Image
                  alt="Soirée conviviale"
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=900&auto=format&fit=crop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-3xl sm:h-56">
                <Image
                  alt="Cuisine ouverte"
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
        <section id="concept" className="space-y-10">
          <SectionTitle
            eyebrow="Micro-site La Seiche"
            title="Un récit clair pour attirer et convertir"
            description="Nous concentrons l&apos;expérience sur les informations essentielles pour guider vos visiteurs vers l&apos;action."
          />
          <div className="grid gap-10 rounded-[36px] bg-white p-8 shadow-card md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div className="space-y-6 text-base text-ink-soft md:text-lg">
              <p>
                Votre concept de &quot;bar • restaurants • loisirs&quot; sur 1 200 m² int. / 1 500 m² ext., avec des horaires en soirée, se prête particulièrement bien à l&apos;intégration d&apos;un agenda qui favorise la conversion. Je serais ravi de vous envoyer une maquette 100 % gratuite d&apos;un micro-site incluant les fonctionnalités suivantes :
              </p>
              <ul className="space-y-3 text-ink">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-red"></span>
                  Un agenda (calendrier partageable)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-red"></span>
                  Des boutons d&apos;appel à l&apos;action &quot;Venir ce soir&quot; et &quot;Privatiser&quot;
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-red"></span>
                  Des stands affichant les cartes et les temps d&apos;attente
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-red"></span>
                  L&apos;intégration de votre newsletter et de votre compte Facebook
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-shell-gradient p-8 text-ink">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold uppercase text-brand-red">Pourquoi ça marche</h3>
                <p className="text-base text-ink-soft">
                  Une navigation compacte, des visuels immersifs et des sections orientées actions boostent les réservations et réduisent les frictions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-red">CTA visibles en 1 clic</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-red">Agenda exportable</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-red">Branding fidèle</span>
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="space-y-10">
          <SectionTitle
            eyebrow="Agenda en direct"
            title="Un calendrier partageable qui donne le tempo"
            description="Mettez en avant les prochains rendez-vous pour créer l&apos;envie immédiate."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {agendaItems.map((item) => (
              <article
                key={item.theme}
                className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-red">
                    {item.day}
                  </p>
                  <h3 className="font-display text-2xl text-ink">{item.theme}</h3>
                  <p className="text-sm text-ink-soft">{item.date}</p>
                  <p className="text-base text-ink">{item.highlight}</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-red-dark">
                    Venir ce soir
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-brand-red px-4 py-2 text-sm font-semibold text-brand-red transition hover:bg-brand-red/5">
                    Partager
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stands" className="space-y-10">
          <SectionTitle
            eyebrow="Stands & services"
            title="Des espaces lisibles et rassurants"
            description="Chaque stand affiche sa carte, son ambiance et le temps d&apos;attente estimé pour fluidifier l&apos;expérience."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {standHighlights.map((stand) => (
              <article key={stand.title} className="overflow-hidden rounded-3xl bg-white shadow-card">
                <div className="relative h-48">
                  <Image src={stand.image} alt={stand.title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="font-display text-xl text-ink">{stand.title}</h3>
                  <p className="text-sm text-ink-soft">{stand.description}</p>
                  <p className="text-sm font-semibold text-brand-red">{stand.wait}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 rounded-[36px] bg-brand-red px-8 py-12 text-white shadow-card md:grid-cols-[1.1fr_0.9fr] md:px-12">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Prendre contact"
              title="Privatiser La Seiche ou lancer l&apos;agenda"
              description="Un point de contact unique pour paramétrer vos événements et lancer la communication."
              tone="light"
            />
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:bonjour@rockets-traiteur.fr?subject=Projet%20La%20Seiche"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-red transition hover:-translate-y-0.5"
              >
                Écrire un message
              </a>
              <a
                href="tel:+33600000000"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Rester connecté</p>
            <ul className="space-y-3 text-base">
              {contactChannels.map((channel) => (
                <li key={channel.label} className="flex justify-between gap-4 border-b border-white/10 pb-3 text-white/90">
                  <span className="font-medium">{channel.label}</span>
                  <span>{channel.value}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-red transition hover:-translate-y-0.5"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base uppercase tracking-[0.4em] text-brand-red">La Seiche</p>
          <p>© {new Date().getFullYear()} Tous droits réservés. Design par HugoLab.</p>
        </div>
      </footer>
    </div>
  );
}
