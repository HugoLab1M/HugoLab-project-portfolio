export const metadata = {
  title: "HügoLab — Portfolio",
  description: "Modern websites that convert. HügoLab builds fast, clean sites for local businesses and growing brands.",
  metadataBase: new URL("https://hugolab.example"), // update after deployment
  openGraph: { title: "HügoLab — Portfolio", description: "Modern websites that convert" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
