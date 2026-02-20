import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Succulent Spirits & Co. | Purveyors of The Good Stuff",
  description: "Curated agave spirits. Rooted in land and people. Crafted with patience, culture, and taste. This is the good stuff.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-brand-orange selection:text-brand-cream">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
