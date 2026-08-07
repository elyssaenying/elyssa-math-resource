type DoodleVariant =
  | "arrow"
  | "star"
  | "underline"
  | "squiggle"
  | "axes"
  | "circle";

/**
 * Small hand-drawn style accent marks. Purely decorative — always
 * rendered with aria-hidden. Keep usage sparse (see design brief: ~20%
 * decoration, 80% clean structure).
 */
export default function DecorativeDoodle({
  variant,
  className = "",
}: {
  variant: DoodleVariant;
  className?: string;
}) {
  const common = {
    "aria-hidden": true as const,
    className: `pointer-events-none ${className}`,
  };

  switch (variant) {
    case "arrow":
      return (
        <svg viewBox="0 0 100 40" fill="none" {...common}>
          <path
            d="M2 30C25 8 60 4 92 14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M76 6C83 9 90 12 92 14C90 17 85 22 80 27"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 40 40" fill="none" {...common}>
          <path
            d="M20 3L23.5 16.5L37 20L23.5 23.5L20 37L16.5 23.5L3 20L16.5 16.5L20 3Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "underline":
      return (
        <svg viewBox="0 0 160 16" fill="none" {...common}>
          <path
            d="M2 10C40 2 120 2 158 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "squiggle":
      return (
        <svg viewBox="0 0 120 24" fill="none" {...common}>
          <path
            d="M2 18C12 6 22 6 32 18C42 30 52 6 62 6C72 6 82 30 92 18C102 6 112 6 118 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "axes":
      return (
        <svg viewBox="0 0 100 100" fill="none" {...common}>
          <path
            d="M6 94V6M6 94H94"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M6 6L1 13M6 6L11 13M94 94L87 89M94 94L87 99"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 70C30 70 34 24 58 24C74 24 80 40 92 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "circle":
      return (
        <svg viewBox="0 0 40 40" fill="none" {...common}>
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      );
    default:
      return null;
  }
}
