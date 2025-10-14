'use client';

import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const navLinks = [
  { label: "Nos univers", href: "#univers" },
  { label: "Prestations", href: "#prestations" },
  { label: "Engagements", href: "#engagements" },
  { label: "Contact", href: "#contact" },
];

const heroMetrics = [
  {
    value: "100%",
    label: "fait maison & local",
    description: "Des produits sourcés auprès d’artisans de confiance pour une cuisine responsable.",
  },
  {
    value: "48h",
    label: "pour une proposition sur-mesure",
    description: "Un accompagnement clé en main : menu, scénographie et logistique sur votre événement.",
  },
  {
    value: "+250",
    label: "événements gourmands",
    description: "Mariages, séminaires, anniversaires… Rocket’s régale toutes vos célébrations.",
  },
];

const univers = [
  {
    title: "Foodtruck",
    accent: "L’âme street-food",
    description:
      "Ajoutez un twist convivial à votre événement : notre camion signature se déplace et cuisine sous vos yeux.",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1200&auto=format&fit=crop",
    cta: "Découvrir le foodtruck",
  },
  {
    title: "Traiteur",
    accent: "L’expérience raffinée",
    description:
      "Cocktail dinatoire, menu à l’assiette ou buffet généreux : nous imaginons une carte selon vos envies.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    cta: "Explorer le traiteur",
  },
];

const prestations = [
  {
    title: "Événements d’entreprise",
    description:
      "Team building, lancement produit ou séminaire : Rocket’s crée des parenthèses savoureuses et mémorables.",
  },
  {
    title: "Mariages & fêtes privées",
    description:
      "Des menus qui reflètent votre histoire, une équipe attentionnée et un service fluide pour vos invités.",
  },
  {
    title: "Offres sur-mesure",
    description:
      "Menus végétariens, accords mets & cocktails, scénographie personnalisée : chaque détail compte.",
  },
];

const engagements = [
  {
    title: "Cuisine responsable",
    description:
      "Circuits courts, saisonnalité et réduction du gaspillage pour un événement aussi bon que durable.",
  },
  {
    title: "Expérience aux petits soins",
    description:
      "Un interlocuteur unique, une équipe souriante le jour J et des attentions qui font la différence.",
  },
  {
    title: "Créativité gourmande",
    description:
      "Des recettes signatures, des accords surprenants et une scénographie qui donne le ton.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1532635042-2a20f103fdc9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=800&auto=format&fit=crop",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/rocketsfoodtruck" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rockets-foodtruck/" },
  { label: "Email", href: "mailto:bonjour@rockets-traiteur.fr" },
];

const contactChannels = [
  { label: "Téléphone", value: "+33 6 00 00 00 00" },
  { label: "Email", value: "bonjour@rockets-traiteur.fr" },
  { label: "Basé à", value: "Lyon • Rhône-Alpes" },
];

function WaveDivider({ flip = false, color = "#241446", className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={`${flip ? "rotate-180" : ""} ${className} w-full`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill={color}
        d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,96C840,96,960,96,1080,90.7C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
      ></path>
    </svg>
  );
}

function Badge({ children, variant = "light" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-[0.25em]";
  return (
    <span
      className={
        variant === "dark"
          ? `${base} bg-rocket-purple text-sun-cream`
          : `${base} bg-rocket-yellow text-rocket-purple`
      }
    >
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sun-cream text-ink">
      <div className="gradient-blur left-[-10%] top-[-18%] h-80 w-80 rounded-full bg-rocket-yellow/40"></div>
      <div className="gradient-blur right-[-12%] top-[15%] h-[22rem] w-[22rem] rounded-full bg-rocket-lilac/30"></div>

      <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-8 sm:pt-12">
        <nav className="flex items-center justify-between gap-6 rounded-full border border-rocket-purple/10 bg-white/70 px-5 py-3 shadow-card backdrop-blur">
          <Link
            href="#accueil"
            className="inline-flex items-center gap-2 rounded-full border border-rocket-purple/10 bg-sun-cream px-4 py-2 text-sm font-medium text-rocket-purple transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <span className="h-2 w-2 rounded-full bg-rocket-yellow"></span>
            Accueil
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-ink-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rocket-purple text-lg text-sun-cream">
                🚀
              </span>
              Rocket’s
            </div>
            <ul className="hidden items-center gap-6 text-sm font-medium text-ink-soft sm:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="transition hover:text-rocket-purple" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-rocket-purple px-5 py-2 text-sm font-semibold text-sun-cream shadow-glow transition hover:bg-rocket-berry"
          >
            Obtenir un devis
            <span aria-hidden>→</span>
          </a>
        </nav>

        <section id="accueil" className="relative overflow-hidden rounded-[48px] bg-cream-gradient px-6 py-16 shadow-card sm:px-12 sm:py-20">
          <div className="absolute left-0 top-0 h-full w-full bg-plum-radial"></div>
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <Badge>Foodtruck & Traiteur</Badge>
              <h1 className="font-display text-4xl font-semibold uppercase leading-tight text-ink sm:text-5xl lg:text-6xl">
                Du foodtruck au traiteur, un voyage gustatif pour tous vos événements
              </h1>
              <p className="text-lg text-ink-soft sm:max-w-xl">
                Rocket’s, c’est le 100% fait maison et des produits frais, avec un esprit gourmand, décalé et éco-responsable.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-rocket-purple px-6 py-3 text-base font-semibold text-sun-cream shadow-glow transition hover:bg-rocket-berry"
                >
                  Nous contacter
                </a>
                <a
                  href="#univers"
                  className="inline-flex items-center justify-center rounded-full border border-rocket-purple/20 px-6 py-3 text-base font-semibold text-rocket-purple transition hover:border-rocket-purple hover:-translate-y-0.5"
                >
                  Découvrir nos univers
                </a>
              </div>
            </div>

            <div className="grid content-between gap-6">
              <div className="rounded-3xl bg-white/80 p-6 shadow-card backdrop-blur">
                <p className="font-display text-lg uppercase tracking-widest text-rocket-purple">Besoin d’aide ?</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                  Besoin d’aide pour choisir la bonne prestation ?
                </h2>
                <p className="mt-4 text-sm text-ink-soft">
                  Zéro stress, on gère tout pour vous ! On s’occupe de tout pour que vous ayez l’esprit tranquille.
                </p>
                <a
                  href="#prestations"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-rocket-yellow px-5 py-2 text-sm font-semibold text-rocket-purple transition hover:bg-rocket-gold"
                >
                  Lancer ma recherche
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.value} className="rounded-2xl bg-white/80 p-5 shadow-card backdrop-blur">
                    <p className="font-display text-3xl font-semibold text-rocket-purple">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-ink-soft">{metric.label}</p>
                    <p className="mt-3 text-xs text-ink-soft">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="relative z-10 flex flex-col gap-24 pb-24">
        <section id="univers" className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="dark">Nos prestations</Badge>
            <h2 className="mt-6 font-display text-4xl font-semibold uppercase text-ink">Deux ambiances, une passion commune</h2>
            <p className="mt-4 text-ink-soft">
              Foodtruck festif ou traiteur raffiné : choisissez l’atmosphère qui vous ressemble, nous orchestrons le reste.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {univers.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-[40px] bg-white shadow-card transition hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 px-8 pb-8 pt-6">
                  <p className="text-xs uppercase tracking-[0.45em] text-rocket-purple/70">{item.accent}</p>
                  <h3 className="font-display text-3xl font-semibold text-ink">{item.title}</h3>
                  <p className="text-base text-ink-soft">{item.description}</p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-rocket-purple transition hover:gap-3"
                  >
                    {item.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="prestations" className="relative overflow-hidden bg-rocket-purple text-sun-cream">
          <WaveDivider className="text-rocket-purple" color="#241446" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
            <div className="max-w-2xl">
              <Badge>Préparer votre événement</Badge>
              <h2 className="mt-6 font-display text-4xl font-semibold uppercase">
                Une prestation clé en main qui sublime vos moments
              </h2>
              <p className="mt-4 text-lg text-sun-cream/80">
                Dès le premier échange, nous dessinons une expérience sur-mesure : sourcing des produits, scénographie, service.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {prestations.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white/10 p-7 shadow-glow">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-sun-cream/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <WaveDivider flip className="text-rocket-purple" color="#241446" />
        </section>

        <section id="engagements" className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[40px] bg-white p-10 shadow-card">
              <Badge variant="dark">Notre signature</Badge>
              <p className="mt-6 font-display text-3xl font-semibold uppercase text-rocket-purple">
                Rocket’s, c’est la référence de la street food à Lyon qui allie cuisine responsable et créativité.
              </p>
              <p className="mt-4 text-ink-soft">
                Avec une équipe passionnée, nous donnons vie à des événements gourmands et inoubliables, portés par une cuisine généreuse et un service chaleureux.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {engagements.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-rocket-purple">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-rocket-purple text-sun-cream">
          <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-rocket-lilac/30 blur-3xl"></div>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20">
            <div className="text-center">
              <Badge variant="dark">Moments capturés</Badge>
              <h2 className="mt-6 font-display text-4xl font-semibold uppercase">Ils ont goûté à la fusée</h2>
              <p className="mt-4 text-sun-cream/80">
                Quelques instantanés de nos dernières prestations, entre sourires, cocktails fumants et dressages éclatants.
              </p>
            </div>
            <div className="overflow-hidden rounded-[60px] bg-rocket-purple-dark p-6 shadow-glow">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((src, index) => (
                  <div key={src} className="group relative h-56 overflow-hidden rounded-3xl">
                    <Image
                      src={src}
                      alt={`Galerie Rocket’s ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-[48px] bg-white px-6 py-14 shadow-card sm:px-12">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <Badge variant="dark">Prendre contact</Badge>
                <h2 className="font-display text-4xl font-semibold uppercase text-ink">Prêts à faire vibrer vos invités ?</h2>
                <p className="text-ink-soft">
                  Dites-nous tout : format de l’événement, nombre de convives, ambiance souhaitée. Nous revenons vers vous sous 48h avec une proposition personnalisée.
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-ink-soft">
                  {contactChannels.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-rocket-purple/10 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-rocket-purple">{item.label}</p>
                      <p className="mt-2 font-semibold text-ink">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://calendly.com/"
                  className="inline-flex items-center justify-center rounded-full bg-rocket-purple px-8 py-4 text-base font-semibold text-sun-cream shadow-glow transition hover:bg-rocket-berry"
                >
                  Planifier un appel découverte
                </a>
                <a
                  href="mailto:bonjour@rockets-traiteur.fr"
                  className="inline-flex items-center justify-center rounded-full border border-rocket-purple/20 px-8 py-4 text-base font-semibold text-rocket-purple transition hover:border-rocket-purple hover:-translate-y-0.5"
                >
                  Envoyer un brief détaillé
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-12 border-t border-rocket-purple/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-rocket-purple">Rocket’s</p>
            <p className="text-sm text-ink-soft">Le foodtruck & traiteur lyonnais qui fait décoller vos événements.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rocket-purple/10 px-4 py-2 transition hover:border-rocket-purple hover:text-rocket-purple"
              >
                {link.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-rocket-purple/5 bg-rocket-purple text-center text-xs text-sun-cream/80">
          <div className="mx-auto max-w-6xl px-6 py-4">
            © {new Date().getFullYear()} Rocket’s — Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
