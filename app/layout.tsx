import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://corvotechnologies.com"),
  title: {
    default: "Corvo Technologies | Build Smarter. Scale Faster.",
    template: "%s | Corvo Technologies",
  },
  description:
    "Corvo Technologies builds intelligent digital products, AI solutions, and scalable software for ambitious businesses worldwide.",
  keywords: [
    "Corvo Technologies",
    "AI engineering",
    "full-stack development",
    "mobile app development",
    "AI agents",
    "SaaS product development",
    "software engineering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Corvo Technologies",
    description: "Build Smarter. Scale Faster.",
    url: "https://corvotechnologies.com",
    siteName: "Corvo Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvo Technologies",
    description: "Build Smarter. Scale Faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
