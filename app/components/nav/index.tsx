import { Menu } from "lucide-react";
import { useState } from "react";
import { LOGO_DATA, NAV_LINKS, PLAY_OPTIONS, SOLUTIONS_OPTIONS } from "./data";
import { NavDropdown } from "./nav-dropdown";
import { NavLink } from "./nav-link";

export function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(label: string) {
    setOpenDropdown((current) => (current === label ? null : label));
  }

  return (
    <header className="bg-dark sm:shadow-header h-12 px-4 sm:h-16 sm:px-8">
      <div className="flex h-full items-center justify-between">
        <div className="inline-flex gap-0.5">
          <a
            className="inline-flex items-center gap-1.5 no-underline"
            href="https://kotlinlang.org"
            aria-label="Kotlin Home Page"
          >
            <img src="/favicon.svg" alt="Kotlin" className="h-[18.93px] w-auto" />
            <span className="font-jetbrains text-[26px] font-medium text-white">Kotlin</span>
          </a>
          <a className="mt-1.5 h-fit text-[13px] text-white/75 no-underline hover:text-white" href={LOGO_DATA.url}>
            {LOGO_DATA.version}
          </a>
        </div>

        <nav className="nav:flex mr-14 hidden h-full items-center gap-8">
          <NavDropdown
            label="Solutions"
            options={SOLUTIONS_OPTIONS}
            open={openDropdown === "Solutions"}
            onToggle={() => toggleDropdown("Solutions")}
            onClose={() => setOpenDropdown(null)}
          />
          {NAV_LINKS.map((link) => (
            <NavLink key={link} label={link} />
          ))}
          <NavDropdown
            label="Play"
            options={PLAY_OPTIONS}
            open={openDropdown === "Play"}
            onToggle={() => toggleDropdown("Play")}
            onClose={() => setOpenDropdown(null)}
            rightAligned={true}
          />
        </nav>
        <button className="nav:hidden -mr-2 cursor-pointer p-2 text-white/75" aria-label="Open Menu">
          <Menu strokeWidth={2.25} />
        </button>
      </div>
    </header>
  );
}
