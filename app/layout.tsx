import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindystyleperu.com";
const metadataBase = new URL(siteUrl);
const title = "Cindy’s Style Perú — Perfumería y Maquillaje en Lima";
const description =
  "Perfumes, maquillaje y cuidado personal con entrega en Lima Metropolitana. Pedidos por WhatsApp.";

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://cindystyleperu.com",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Cindy’s Style Perú, perfumería y maquillaje en Lima",
      },
    ],
    locale: "es_PE",
    siteName: "Cindy’s Style Perú",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          className="sr-only z-[60] rounded-full bg-brand-brown px-5 py-3 text-sm font-semibold text-brand-white shadow-lg focus:not-sr-only focus:fixed focus:left-5 focus:top-5"
          href="#main-content"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
