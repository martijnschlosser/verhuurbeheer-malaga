import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Málaga",
    short_name: "VBE Málaga",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Málaga en aan Málaga Este.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-malaga.webp", sizes: "640x640", type: "image/webp" }],
  };
}
