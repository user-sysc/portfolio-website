import Link from "next/link";
import type { HTMLAttributeAnchorTarget } from "react";

type RefLinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  refSource?: string;
};

export default function RefLink({
  href,
  children,
  className,
  target = "_blank",
  refSource = "myportfolio.com",
}: RefLinkProps) {
  const separator = href.includes("?") ? "&" : "?";
  return (
    <Link
      href={`${href}${separator}ref=${refSource}`}
      rel="noopener"
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
