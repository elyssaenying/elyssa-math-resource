import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-burnt-dark text-cream-soft hover:bg-charcoal",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream-soft",
  ghost: "bg-transparent text-charcoal hover:text-burnt-dark",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    children,
    className = "",
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
