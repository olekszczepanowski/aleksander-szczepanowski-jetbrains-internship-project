import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import cn from "classnames";

import { newsData } from "./data";

import { Section } from "../common/section";
import { Container } from "../common/container";
import { RsLink } from "../common/rs-link";

export function LatestFromKotlinSection() {
  const textCn = useTextStyles();
  return (
    <Section className="bg-transparent">
      <Container>
        <h2 className={textCn("rs-h1")}>Latest from Kotlin</h2>

        <div className="mt-8">
          <a
            href="https://blog.jetbrains.com/kotlin/2022/04/kotlin-1-6-20-released/"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-0 font-[0px]"
          >
            <picture>
              <source media="(max-width: 537px)" srcSet={"images/banners/kotlin-1.6.20-mobile.png"} />
              <img src={"images/banners/kotlin-1.6.20.png"} alt="Kotlin 1.6.20 released" width="100%" />
            </picture>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8">
          {newsData.map((news, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
              <p className={textCn("rs-text-3")}>{news.tag}</p>
              <h3 className={cn(textCn("rs-text-2"), "mt-2")}>
                <RsLink href={news.link} label={news.title} external={true} target="_blank" rel="noopener noreferrer" />
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button mode="outline" size="l" href="https://blog.jetbrains.com/kotlin/" target="_blank">
            Kotlin blog
          </Button>
        </div>
      </Container>
    </Section>
  );
}
