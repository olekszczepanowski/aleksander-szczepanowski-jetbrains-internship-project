import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, PLAY_OPTIONS, SOLUTIONS_OPTIONS } from "./data";
import { Logo } from "./logo";
import { NavDropdown } from "./nav-dropdown";
import { CustomNavLink } from "./custom-nav-link";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function toggleDropdown(label: string) {
    setOpenDropdown((current) => (current === label ? null : label));
  }

  return (
    <header className="bg-dark sm:shadow-header h-12 px-4 sm:h-16 sm:px-8">
      <div className="flex h-full items-center justify-between">
        <Logo />

        <nav className="nav:flex mr-14 hidden h-full items-center gap-8">
          <NavDropdown
            label="Solutions"
            options={SOLUTIONS_OPTIONS}
            open={openDropdown === "Solutions"}
            onToggle={() => toggleDropdown("Solutions")}
            onClose={() => setOpenDropdown(null)}
          />
          {NAV_LINKS.map((link) => (
            <CustomNavLink key={link} label={link} />
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
        <button
          className="nav:hidden -mr-2 cursor-pointer p-2 text-white/70"
          aria-label="Open Menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu strokeWidth={2.25} />
        </button>
      </div>

      {mobileOpen && (
        <div className="bg-dark nav:hidden fixed inset-0 z-50 flex flex-col overflow-hidden">
          <div className="flex min-h-12 items-center justify-between px-4">
            <Logo />
            <button
              className="-mr-2 cursor-pointer p-2 text-white/70"
              aria-label="Close Menu"
              onClick={() => setMobileOpen(false)}
            >
              <X strokeWidth={2.25} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 overflow-y-auto pt-2 pb-14 text-[19px]">
            <a href="/" className="bg-white py-3 pr-1.75 pl-4">
              Home
            </a>
            <div className="mb-2 flex flex-col border-y border-white/30 pt-1 pb-2">
              <span className="mb-2 py-3 pr-1.75 pl-4 text-[13px] text-white/70 uppercase">Solutions</span>
              {SOLUTIONS_OPTIONS.map((option) => (
                <a key={option} href="#" className="py-3 pr-1.75 pl-4 text-white">
                  {option}
                </a>
              ))}
            </div>
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="py-3 pr-1.75 pl-4 text-white">
                {link}
              </a>
            ))}
            <div className="flex flex-col border-t border-white/30 pt-2">
              <span className="mb-2 py-3 pr-1.75 pl-4 text-[13px] text-white/70 uppercase">Play</span>
              {PLAY_OPTIONS.map((option) => (
                <a key={option} href="#" className="py-3 pr-1.75 pl-4 text-white">
                  {option}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
