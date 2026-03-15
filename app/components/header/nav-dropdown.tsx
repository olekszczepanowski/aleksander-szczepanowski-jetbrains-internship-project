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
  return (
    <div className="relative flex h-full items-center" onMouseEnter={onToggle} onMouseLeave={onClose}>
      <button
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
        <div className={cn("absolute top-full left-0 z-50 pt-2", rightAligned && "right-0 left-auto")}>
          <div className="bg-dark w-67.5 border border-white/20 py-2 shadow-2xl">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-4 py-2 text-nowrap text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
