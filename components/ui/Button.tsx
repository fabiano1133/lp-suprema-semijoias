import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "secondary";

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base leading-none " +
  "transition-transform duration-200 ease-out transform-gpu " +
  "hover:scale-[1.02] active:scale-[0.99] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c48d45]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#c48d45] text-[#ffffff] shadow-sm shadow-[#c48d45]/20 hover:shadow-md hover:shadow-[#c48d45]/25",
  secondary:
    "bg-transparent text-[#c48d45] border border-[#c48d45] hover:bg-[#ffffff]/60",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & (React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>)) {
  const classes = cx(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

