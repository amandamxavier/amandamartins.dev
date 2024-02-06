import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/variables.css";

import { Noto_Sans } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import { Footer, Header } from "@/components";

import type { Metadata } from "next";
const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda Martins - Fullstack Developer",
  description: "Fullstack Developer, based in São Paulo, Brazil.",
  icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: light)",
        rel: "icon",
        type: "image/png",
      },
      {
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
        rel: "icon",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
