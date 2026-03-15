import { useTextStyles } from "@rescui/typography";
import { FOOTER_LINKS, SOCIAL_LINKS } from "./data";
import { cn } from "~/utils";

export function Footer() {
  const textCn = useTextStyles();

  return (
    <footer className="grid min-w-80 grid-cols-[1fr_75px] gap-x-4 px-4 pt-8 pb-4 sm:grid-cols-[1fr_60px] sm:p-8">
      <div className="sm:flex sm:h-6 sm:items-center" style={{ gridArea: "social-list" }}>
        <div className={cn(textCn("rs-h4"), "mb-2 sm:mr-6 sm:mb-0")}>Stay in touch:</div>
        <div className="-my-1.5 grid grid-flow-col justify-start gap-x-2 min-[481px]:gap-x-4.5">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="flex size-9 items-center justify-center rounded-full p-1.5 text-white/75 transition-colors hover:bg-white/10"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <nav className="mt-6 mb-8 min-[930px]:h-6 sm:my-4" style={{ gridArea: "nav-list" }}>
        <ul className="flex flex-wrap leading-8">
          {FOOTER_LINKS.map(({ label, href, blank }) => (
            <li
              key={label}
              className="relative mr-2 pr-2 after:absolute after:top-1/2 after:right-0 after:h-3 after:w-px after:-translate-y-1/2 after:bg-white/50 last:after:hidden"
            >
              <a
                href={href}
                {...(blank && { target: "_blank", rel: "noopener noreferrer" })}
                className="rs-link hover:text-dark border-b-white text-white/70"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ gridArea: "text" }} className="text-[13px] leading-5 text-white/50 sm:flex sm:justify-between">
        <div>
          Kotlin™ is protected under the{" "}
          <a href="https://kotlinfoundation.org/" className="rs-link border-white/50 text-white/50 hover:text-black">
            Kotlin Foundation
          </a>{" "}
          and licensed under the{" "}
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            className="rs-link border-white/50 text-white/50 hover:text-black"
          >
            Apache 2 license
          </a>
          .
        </div>
        <div className="sm:ml-4 sm:text-right">
          Supported and developed by{" "}
          <a href="https://www.jetbrains.com/" className="rs-link border-white/50 text-white/50 hover:text-black">
            JetBrains
          </a>
        </div>
      </div>

      <a style={{ gridArea: "logo" }} href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
        <img src="jetbrains-logo.svg" alt="JetBrains" className="size-19 sm:size-15" />
      </a>
    </footer>
  );
}
