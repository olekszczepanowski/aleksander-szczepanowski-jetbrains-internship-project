import { Nav } from "~/components/nav";
import { HeaderSection } from "~/components/header-section";
import { ThemeProvider } from "@rescui/ui-contexts";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section";
import { UsageSection } from "~/components/usage-section";
import { StartSection } from "~/components/start-section";

export function meta() {
  return [{ title: "Kotlin Programming Language" }];
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <Nav />
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </ThemeProvider>
  );
}
