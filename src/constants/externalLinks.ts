import Docs from "@assets/icons/Docs.astro"
import Github from "@assets/icons/Github.astro"
import { siteMetadata } from "@/data/siteContent"

export const externalLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: siteMetadata.links.github,
  },
  { label: "Docs", icon: Docs, href: siteMetadata.links.docs },
]
