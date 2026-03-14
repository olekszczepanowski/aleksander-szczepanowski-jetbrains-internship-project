import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import cn from "classnames";
import { Button } from "@rescui/button";
import { Section } from "../common/section";
import { Container } from "../common/container";
import { CARDS_DATA } from "./cards-data";
import { RsLink } from "../common/rs-link";

export function HeaderSection() {
  const textCn = useTextStyles();

  return (
    <div>
      <Section className="bg-transparent pt-24">
        <Container>
          <h1 className={cn(textCn("rs-hero"))}>A modern programming language that makes developers happier</h1>
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <div className="flex items-center">
              <Button size="l" href="#">
                Get started
              </Button>
              <Button mode="outline" size="l" href="#" className="ml-4">
                Why Kotlin
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <img src="jetbrains-logo.svg" alt="JetBrains Logo"></img>
              <p className={textCn("rs-text-2")}>
                Developed by <RsLink label="JetBrains" href="https://www.jetbrains.com/" /> & Open-source{" "}
                <RsLink label="Contributors" href="https://github.com/JetBrains/kotlin/graphs/contributors" />{" "}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-4">
            {CARDS_DATA.map((card, index) => (
              <div
                key={card.id}
                className={cn("col-span-12 sm:col-span-6 md:col-span-3", index >= 2 && "hidden min-[768px]:grid")}
              >
                <a
                  href={card.link}
                  className={cn(
                    cardCn({
                      theme: "dark",
                      mode: "classic",
                      isClickable: true,
                    }),
                  )}
                >
                  <img src={card.img} alt={card.title} />
                  <h2 className={cn(textCn("rs-h3"), "mt-4")}>{card.title}</h2>
                  <p className={cn(textCn("rs-text-2"), "mt-4")}>{card.subTitle}</p>
                </a>
              </div>
            ))}
          </div>
          <p className={cn(textCn("rs-text-2"), "mt-4")}>
            <RsLink label="Multiplatform for Other Platforms" href="#" />
            {", "}
            <RsLink label="Data Science" href="#" />
          </p>
        </Container>
      </Section>
    </div>
  );
}
