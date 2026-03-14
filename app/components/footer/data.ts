import { GithubIcon, RedditIcon, SlackIcon, StackOverflowIcon, TwitterIcon, YoutubeIcon } from "./icons";

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/JetBrains/kotlin", icon: GithubIcon },
  { label: "Twitter", href: "https://x.com/kotlin", icon: TwitterIcon },
  { label: "Slack", href: "#", icon: SlackIcon },
  { label: "Reddit", href: "https://www.reddit.com/r/Kotlin/", icon: RedditIcon },
  { label: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/kotlin", icon: StackOverflowIcon },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw", icon: YoutubeIcon },
];

export const FOOTER_LINKS = [
  { label: "Contributing to Kotlin", href: "https://kotlinlang.org/docs/contribute.html" },
  { label: "Releases", href: "https://kotlinlang.org/docs/releases.html" },
  { label: "Press Kit", href: "https://kotlinlang.org/assets/kotlin-media-kit.pdf" },
  { label: "Security", href: "https://kotlinlang.org/docs/security.html" },
  { label: "Blog", href: "https://blog.jetbrains.com/kotlin/", blank: true },
  { label: "Issue Tracker", href: "https://youtrack.jetbrains.com/issues/KT", blank: true },
  {
    label: "Brand assets",
    href: "https://resources.jetbrains.com/storage/products/kotlin/docs/kotlin_logos.zip?_gl=1*1qpmos2*_gcl_au*MTUzMTY3OTU0NS4xNzczMTgxMzk2*_ga*MjE0NzQyNTIwNS4xNzczMTgxMzk2*_ga_9J976DJZ68*czE3NzM0OTQyMDckbzEkZzEkdDE3NzM0OTQzOTUkajQ4JGwwJGgw",
    blank: true,
  },
  { label: "Careers", href: "https://www.jetbrains.com/careers/", blank: true },
];
