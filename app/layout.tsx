import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/vars.css";
import "@/styles/typography.css";

import { Footer, Header, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/react";

import { inter, newsreader } from "../components/ui";

export const metadata: Metadata = {
  title: "Amanda Martins",
  description: "Fullstack Developer, based in Brazil.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
