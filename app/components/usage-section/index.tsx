import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";

import { TESTIMONIALS } from "./data";
import { Section } from "../common/section";
import { Container } from "../common/container";
import { useSortOrder } from "./hook";

function UsageSectionContent() {
  const textCn = useTextStyles();

  const [sortByName, toggleSort] = useSortOrder();

  const sortedTestimonials = sortByName
    ? [...TESTIMONIALS].sort((a, b) => a.company.localeCompare(b.company))
    : TESTIMONIALS;

  return (
    <Section className="bg-white pt-24">
      <Container>
        <h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>

        <div className="mt-4 flex justify-end">
          <Button mode="outline" size="s" onClick={toggleSort}>
            Sort: {sortByName ? "A-Z" : "Default"}
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4">
          {sortedTestimonials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cardCn({ theme: "light", mode: "classic", isClickable: true }),
                "flex h-40 flex-col justify-between sm:h-48",
                "col-span-12 sm:col-span-6 lg:col-span-4",
              )}
            >
              <img
                src={item.logo}
                alt={item.company}
                className={cn(
                  "h-12 w-auto object-contain object-left",
                  item.company === "Spring" && "box-border py-2.5",
                )}
              />
              <p className={cn(textCn("rs-text-2"), "mt-2")}>{item.text}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function UsageSection() {
  return (
    <ThemeProvider theme="light">
      <UsageSectionContent />
    </ThemeProvider>
  );
}
