// Single source of truth for all text content on the site.
// Used by both Astro components (rendering) and llms.txt endpoints (generation).

export const siteMetadata = {
  name: "dAppBooster",
  title:
    "dAppBooster - Web3 Template For All Your Blockchain Development Needs",
  description:
    "dAppBooster is a modern blockchain boilerplate built to quickly get you started with the development of your next Web3 project.",
  summary:
    "dAppBooster is a free, open-source Web3 starter kit built with React that accelerates blockchain dApp development with wallet integration, multi-chain EVM support, and modular components.",
  installCommand: "pnpm dlx dappbooster",
  links: {
    docs: "https://docs.dappbooster.dev/",
    github: "https://github.com/bootnodedev/dappbooster/",
    demo: "https://demo.dappbooster.dev/",
    landing: "https://dappbooster.dev/",
    bootnode: "https://www.bootnode.dev/",
  },
  socialLinks: [
    { label: "Telegram", href: "https://t.me/dAppBooster" },
    { label: "GitHub", href: "https://github.com/BootNodeDev" },
    { label: "Twitter/X", href: "https://twitter.com/bootnodedev" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/bootnode-dev/",
    },
  ],
}

export const heroContent = {
  heading: "Boost dApp development on the Blockchain",
  subheading:
    "A modern starter kit built with React to quickly get started with your next web3 project.",
}

export const introContent = {
  tag: "Build with Confidence",
  heading: "Web3 Developer-First Tooling",
  description:
    "dAppBooster is built by developers, for developers. From intuitive CLI tools to smooth local testing environments, everything is designed to remove friction and accelerate your workflow.",
  items: [
    {
      title: "Rapid Project Setup",
      description:
        "Kickstart your next Web3 app in minutes with pre-built smart contract templates and a full-stack boilerplate.",
    },
    {
      title: "EVM Chain Support",
      description:
        "Easily deploy to any EVM-compatible network like Ethereum, Polygon, Arbitrum, and more.",
    },
    {
      title: "Built-in Developer Tools",
      description:
        "Enjoy native wallet integration and robust authentication--ready to use with zero extra setup.",
    },
  ],
}

export const featuresContent = {
  heading: "Powerful features to help you boost your web3 development",
  description:
    "Everything you need to go from idea to live dApp--fast. dAppBooster removes setup friction and provides production-ready Web3 essentials out of the box.",
  items: [
    {
      title: "Scalable Project Structure",
      description:
        "A flexible and modular setup designed for modern dApp development. Manage contracts, ABIs, subgraphs, and reusable components with clarity and control. No clutter, just clean architecture.",
    },
    {
      title: "Seamless Wallet Integration",
      description:
        "Out-of-the-box support for ConnectKit, RainbowKit, and Web3Modal. Connect users with popular wallets in seconds--no extra configuration or libraries needed.",
    },
    {
      title: "Multi-Chain Ready by Default",
      description:
        "Build for any EVM-compatible chain with native multi-chain support. Configure networks effortlessly and enjoy auto-generated, type-safe hooks that make cross-chain development intuitive.",
    },
    {
      title: "Reusable Decentralized Components",
      description:
        "Access a library of pre-built, tree-shakable components every dApp needs. From connect buttons to auth handlers--fully optimized for performance and customization.",
    },
    {
      title: "Typed Multi-Chain Subgraph Support",
      description:
        "Query your data like a pro with built-in support for multi-chain subgraphs. Auto-generated, type-safe hooks give you reliable access to on-chain data--fast and developer-friendly.",
    },
    {
      title: "Ready to Build, From the Start",
      description:
        "Skip the boilerplate. dAppBooster gives you a clean, scalable project structure that helps you focus on building--immediately.",
    },
  ],
}

export const faqContent = {
  tag: "Building dApps with dAppBooster",
  heading: "Frequently Asked Questions",
  description:
    "Dive into the essentials of creating powerful decentralized applications with dAppBooster. Here are answers to common questions to help you get started seamlessly.",
  items: [
    {
      question: "What is dAppBooster, and how can it help me build a dApp?",
      answer:
        "dAppBooster is an open-source tool designed to simplify dApp development. It provides out-of-the-box features like wallet integration, authentication, and developer-friendly templates, allowing you to focus on your app's unique value without worrying about basic setup tasks.",
    },
    {
      question:
        "Do I need prior Web3 development experience to use dAppBooster?",
      answer:
        "Not necessarily! dAppBooster is beginner-friendly and includes detailed documentation to guide you through setup and customization. However, familiarity with JavaScript and blockchain concepts will enhance your experience.",
    },
    {
      question: "Can I customize the features provided by dAppBooster?",
      answer:
        "Absolutely! dAppBooster is highly modular, enabling you to tailor authentication methods, wallet integrations, and UI components to match your dApp's specific requirements.",
    },
    {
      question: "Do I need to pay to use dAppBooster?",
      answer:
        "No, dAppBooster is completely free and open-source. You can access and use it without any licensing costs, making it an excellent tool for developers at any level.",
    },
    {
      question: "How do I get started with dAppBooster?",
      answer:
        "Start by running <code>pnpm dlx dappbooster</code> in your terminal and then follow the instructions.",
    },
    {
      question:
        "Is dAppBooster suitable for scaling my dApp to handle increased traffic?",
      answer:
        "While dAppBooster helps with initial development, scalability largely depends on your chosen blockchain and infrastructure. dAppBooster's flexible setup ensures compatibility with various scaling solutions, making it a great starting point for your dApp.",
    },
  ],
}

export const bannerContent = {
  heading: "Start building your next Web3 project today",
  description:
    "Kickstart your Web3 development journey effortlessly. Run the command below to launch your project or explore our comprehensive documentation for guidance.",
}

export const technicalDetails = {
  framework: "React",
  packageManager: "pnpm",
  runtime: "Node.js",
  supportedChains: "All EVM-compatible networks",
  license: "Open-source, free to use",
}
