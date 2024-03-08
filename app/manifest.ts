import { MetadataRoute } from "next";

function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amanda Martins",
    short_name: "Amanda Martins",
    description: "Fullstack Developer, based in Brazil.",
    start_url: "/",
  };
}

export default manifest;
