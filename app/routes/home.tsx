import { Header } from "~/components/header";
import { HeaderSection } from "~/components/header-section";
import { ThemeProvider } from "@rescui/ui-contexts";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section";
import { UsageSection } from "~/components/usage-section";
import { StartSection } from "~/components/start-section";
import { Footer } from "~/components/footer";
import { useLoaderData } from "react-router";

export function loader() {
  const randomTabIndex = Math.floor(Math.random() * 5);
  return randomTabIndex;
}

export default function Home() {
  const randomTabIndex = useLoaderData<typeof loader>();

  return (
    <ThemeProvider theme="dark">
      <title>Kotlin Programming Language</title>
      <Header />
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection randomTabIndex={randomTabIndex} />
      <UsageSection />
      <StartSection />
      <Footer />
    </ThemeProvider>
  );
}
