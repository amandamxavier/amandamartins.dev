import { Analytics } from "@vercel/analytics/react";
import { Header, Footer } from "./_components";
import type { Metadata } from "next";
import { montserrat, source } from "./fonts";
import "./_styles/reset.css";
import "./_styles/globals.css";
import "./_styles/variables.css";

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
      <body className={`${montserrat.className} ${source.variable}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
