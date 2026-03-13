import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import { cn } from "~/utils";
import { Container } from "../common/container";
import { Section } from "../common/section";
import { SECTIONS } from "./data";
import { YouTubeEmbed } from "./components/youtube-embed";
import { ProgrammingLanguage } from "./components/programming-language";

function WhyKotlinContent() {
  const textCn = useTextStyles();
  return (
    <Section className="bg-white pt-24">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>

        <ProgrammingLanguage />

        {SECTIONS.map((section, index) => (
          <div key={index} className="mt-24 grid grid-cols-12 gap-8 max-md:mt-12">
            <div className="col-span-12 md:col-span-4">
              <h3 className={textCn("rs-h2")}>{section.title}</h3>
              <p className={cn(textCn("rs-text-2"), "mt-8")}>{section.description}</p>
              <div className="mt-8">
                <Button mode="outline" size="l" href={section.buttonLink}>
                  {section.buttonText}
                </Button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              {section.media === "youtube" && <YouTubeEmbed id={section.youtubeId} />}
              {section.media === "image" && (
                <img src="multiplatform.svg" alt="Kotlin Multiplatform" className="mx-auto block w-full max-w-162.5" />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
export function WhyKotlinSection() {
  return (
    <ThemeProvider theme="light">
      <WhyKotlinContent />
    </ThemeProvider>
  );
}
