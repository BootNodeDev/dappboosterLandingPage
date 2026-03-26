import type { AstroIntegration } from "astro"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { join } from "node:path"

export default function llmsSitemapSync(): AstroIntegration {
  return {
    name: "llms-sitemap-sync",
    hooks: {
      "astro:build:done": ({ dir, pages, logger }) => {
        const outDir = fileURLToPath(dir)
        const llmsPath = join(outDir, "llms.txt")

        let llmsContent: string
        try {
          llmsContent = readFileSync(llmsPath, "utf-8")
        } catch {
          logger.warn("llms.txt not found in build output")
          return
        }

        const sitePages = pages
          .map((p) => p.pathname)
          .filter((p) => !p.endsWith(".txt"))

        const missingPages: string[] = []
        for (const page of sitePages) {
          const normalizedPage = page === "" ? "/" : `/${page}`
          if (!llmsContent.includes(normalizedPage)) {
            missingPages.push(normalizedPage)
          }
        }

        if (missingPages.length > 0) {
          logger.warn(
            `Pages in sitemap but not referenced in llms.txt: ${missingPages.join(", ")}`,
          )
        } else {
          logger.info("All sitemap pages are referenced in llms.txt")
        }
      },
    },
  }
}
