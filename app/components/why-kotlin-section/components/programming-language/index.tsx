import { useState } from "react";
import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { TabList, Tab, TabSeparator } from "@rescui/tab-list";
import { cn } from "~/utils";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";

import { TABS } from "./data";

hljs.registerLanguage("kotlin", kotlin);

function highlightCode(code: string): string {
  return hljs.highlight(code, { language: "kotlin" }).value;
}

export function ProgrammingLanguage({ randomTabIndex }: { randomTabIndex: number }) {
  const textCn = useTextStyles();
  const [activeIndex, setActiveIndex] = useState(randomTabIndex);

  const highlighted = highlightCode(TABS[activeIndex].code);

  return (
    <div className="mt-24 grid grid-cols-12 gap-8 max-md:mt-12">
      <div className="col-span-12 md:col-span-4">
        <h3 className={textCn("rs-h2")}>Modern, concise and safe programming language</h3>
        <p className={cn(textCn("rs-text-2"), "mt-8")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="mt-8">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {TABS.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="mt-4 overflow-x-auto rounded-b-lg bg-[#f5f5f5] p-6 text-sm leading-6">
          <code className="hljs" dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  );
}
