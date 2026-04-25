import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://heijmanstechniek.nl",
  output: "static",
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});