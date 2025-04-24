// @ts-check
import { defineConfig } from "astro/config";
// Import /static for a static site
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});
