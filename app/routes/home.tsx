import { Nav } from "~/components/nav";
import { HeaderSection } from "~/components/header-section";
import { ThemeProvider } from "@rescui/ui-contexts";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section";

export function meta() {
  return [{ title: "Kotlin Programming Language" }];
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <Nav />
      <HeaderSection />
      <LatestFromKotlinSection />
    </ThemeProvider>
  );
}
