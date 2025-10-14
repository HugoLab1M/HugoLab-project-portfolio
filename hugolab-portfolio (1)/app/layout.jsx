import "./globals.css";

export const metadata = {
  title: "Rocket's — Foodtruck & Traiteur à Lyon",
  description:
    "Maquette La Seiche : découvrez l'univers Rocket's, foodtruck et traiteur responsables pour vos événements professionnels et privés.",
  metadataBase: new URL("https://rocketsfoodtruck.example"),
  openGraph: {
    title: "Rocket's — Foodtruck & Traiteur à Lyon",
    description:
      "Un voyage gustatif du foodtruck au traiteur. Demandez votre devis personnalisé pour un événement mémorable.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-shell font-body text-ink">{children}</body>
    </html>
  );
}
