import { Montserrat, Source_Serif_4 } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const source = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});
