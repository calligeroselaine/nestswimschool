import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] font-bold whitespace-nowrap no-underline transition-[background,transform,border-color] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  solid: "border-transparent bg-accent text-ink hover:bg-sunlit",
  outline: "border-foam/50 bg-transparent text-foam hover:border-foam hover:bg-foam/8",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-[0.95rem] text-sm",
  sm: "px-5 py-[0.7rem] text-xs",
};

function classes(variant: Variant, size: Size, className?: string) {
  return clsx(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className"
  >;

type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  >;

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "solid", size = "md", className, children, ...rest } = props;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link href={href} className={classes(variant, size, className)} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={classes(variant, size, className)} {...buttonRest}>
      {children}
    </button>
  );
}
