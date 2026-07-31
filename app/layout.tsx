import type { Metadata } from "next";
import { Anton, Fraunces, Libre_Franklin } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-fraunces",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const siteUrl = "https://nestswimschool.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SwimNest — Small Classes. Big Confidence.",
    template: "%s | SwimNest",
  },
  description:
    "Patient, personalised swim lessons across Sydney's Northern Beaches — Terrey Hills, Brookvale, ocean rockpools and your own backyard pool.",
  openGraph: {
    type: "website",
    siteName: "SwimNest",
    title: "SwimNest — Small Classes. Big Confidence.",
    description:
      "Patient, personalised swim lessons across Sydney's Northern Beaches — Terrey Hills, Brookvale, ocean rockpools and your own backyard pool.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "SwimNest — Small Classes. Big Confidence.",
    description:
      "Patient, personalised swim lessons across Sydney's Northern Beaches.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${fraunces.variable} ${libreFranklin.variable}`}
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-accent px-5 py-3 text-sm font-bold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
