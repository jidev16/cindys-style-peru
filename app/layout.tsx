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
const ogImageUrl = "https://cindystyleperu.com/images/og-cover.jpg";

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    url: "https://cindystyleperu.com",
    siteName: "Cindy’s Style Perú",
    title,
    description,
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Cindy’s Style Perú - Perfumería, maquillaje y cuidado personal en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
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
