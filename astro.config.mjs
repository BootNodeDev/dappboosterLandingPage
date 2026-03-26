// @ts-check
import { defineConfig } from "astro/config"
// Import /static for a static site
import vercelStatic from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import llmsSitemapSync from "./src/integrations/llmsSitemapSync"

export default defineConfig({
  site: "https://dappbooster.dev",
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [sitemap(), llmsSitemapSync()],
})
