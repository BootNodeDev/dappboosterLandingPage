import type { APIRoute } from "astro"
import {
  siteMetadata,
  featuresContent,
  introContent,
  faqContent,
  technicalDetails,
} from "@/data/siteContent"

export const GET: APIRoute = () => {
  const { name, summary, description, installCommand, links, socialLinks } =
    siteMetadata
  const buildDate = new Date().toISOString().split("T")[0]

  const featureSections = featuresContent.items
    .map((f) => `### ${f.title}\n\n${f.description}`)
    .join("\n\n")

  const introSections = introContent.items
    .map((i) => `### ${i.title}\n\n${i.description}`)
    .join("\n\n")

  const faqSections = faqContent.items
    .map(
      (f) =>
        `### ${f.question}\n\n${f.answer
          .replace(/<code>/g, "`")
          .replace(/<\/code>/g, "`")
          .replace(/<[^>]+>/g, "")}`,
    )
    .join("\n\n")

  const socialList = socialLinks
    .map((s) => `- [${s.label}](${s.href})`)
    .join("\n")

  const content = `# ${name}

> ${summary}

Last-Updated: ${buildDate}

## Overview

${description} Everything you need to go from idea to live dApp, fast. dAppBooster removes setup friction and provides production-ready Web3 essentials out of the box.

Built by developers, for developers. From intuitive CLI tools to smooth local testing environments, everything is designed to remove friction and accelerate your workflow.

## Features

${featureSections}

## Developer Tooling

${introSections}

## Getting Started

Run \`${installCommand}\` in your terminal and follow the instructions. No prior Web3 experience required.

## FAQ

${faqSections}

## Technical Details

| Property | Value |
|---|---|
| Framework | ${technicalDetails.framework} |
| Package Manager | ${technicalDetails.packageManager} |
| Runtime | ${technicalDetails.runtime} |
| Supported Chains | ${technicalDetails.supportedChains} |
| License | ${technicalDetails.license} |
| Install Command | \`${installCommand}\` |

## Links

- [Documentation](${links.docs})
- [GitHub Repository](${links.github})
- [Live Demo](${links.demo})
- [Landing Page](${links.landing})

## About

${name} is built by [BootNode](${links.bootnode}).

${socialList}
`

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
