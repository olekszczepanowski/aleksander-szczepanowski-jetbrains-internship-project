import { ArrowUpRight } from "lucide-react";

export function RsLink({
  label,
  href,
  external,
  target,
  rel,
}: {
  label: string;
  href: string;
  external?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}) {
  return (
    <a className="rs-link" href={href} target={target} rel={rel}>
      {external ? (
        <span>
          {label} <ArrowUpRight size={20} />
        </span>
      ) : (
        label
      )}
    </a>
  );
}
