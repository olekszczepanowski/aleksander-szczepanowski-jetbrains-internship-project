import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";
import { Section } from "../common/section";
import { Container } from "../common/container";

function StartSectionContent() {
  const textCn = useTextStyles();
  return (
    <Section className="gradient-start-section pt-24">
      <Container>
        <p className={textCn("rs-text-2")}>How about to try?</p>
        <div className="mt-12 grid grid-cols-12">
          <h2 className={cn(textCn("rs-hero"), "col-span-12 md:col-span-10")}>
            Start using Kotlin today!
            <br />
            Build your first app in your favorite IDE
          </h2>
        </div>
        <div className="mt-12">
          <Button mode="rock" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export function StartSection() {
  return (
    <ThemeProvider theme="dark">
      <StartSectionContent />
    </ThemeProvider>
  );
}
