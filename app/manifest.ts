import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amanda Martins - Fullstack Developer",
    short_name: "Amanda Martins",
    description: "Fullstack Developer, based in São Paulo, Brazil.",
    start_url: "/",
    display: "standalone",
    background_color: "#e09f3e",
    theme_color: "#e09f3e"
  };
}
