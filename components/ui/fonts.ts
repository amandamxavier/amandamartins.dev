import { Newsreader } from "next/font/google";
import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../../fonts/Inter-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../fonts/Inter-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../fonts/Inter-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-inter",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-newsreader",
});
