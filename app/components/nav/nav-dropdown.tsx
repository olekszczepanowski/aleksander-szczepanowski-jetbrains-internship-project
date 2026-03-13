import { useRef, useEffect } from "react";
import { cn } from "~/utils";

export function NavDropdown({
  open,
  onToggle,
  onClose,
  label,
  options,
  rightAligned,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  label: string;
  options: string[];
  rightAligned?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative flex h-full items-center">
      <button
        onClick={onToggle}
        className={cn(
          "flex h-full cursor-pointer items-center border-y-2 border-transparent text-white/75 hover:border-b-white/40 hover:text-white",
          open && "border-b-white/40 text-white",
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <p>{label}</p>
      </button>

      {open && (
        <div
          className={cn(
            "bg-dark absolute top-full left-0 z-50 mt-2 w-67.5 border border-white/20 py-2 shadow-2xl",
            rightAligned && "right-0 left-auto",
          )}
        >
          {options.map((s) => (
            <a
              key={s}
              href="#"
              className="block px-4 py-2 text-nowrap text-white/75 no-underline transition-colors hover:bg-white/5 hover:text-white"
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
