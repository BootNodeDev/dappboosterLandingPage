import type { APIRoute } from "astro"
import { siteMetadata, featuresContent, introContent } from "@/data/siteContent"

export const GET: APIRoute = () => {
  const { name, summary, installCommand, links } = siteMetadata

  const content = `# ${name}

> ${summary}

${introContent.description}

## Key Features

${featuresContent.items.map((f) => `- **${f.title}**: ${f.description.split(".")[0]}`).join("\n")}
- CLI-based project scaffolding via \`${installCommand}\`

## Getting Started

Run \`${installCommand}\` in your terminal and follow the prompts. No prior Web3 experience required. dAppBooster is completely free and open-source with no licensing costs.

## Links

- [Documentation](${links.docs})
- [GitHub Repository](${links.github})
- [Live Demo](${links.demo})
- [BootNode (Creator)](${links.bootnode})

## Optional

- [Landing Page](${links.landing})
- [Full LLM Context](${links.landing}llms-full.txt)
`

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
