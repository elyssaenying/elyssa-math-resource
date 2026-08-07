import Image from "next/image";
import { Camera } from "lucide-react";

type Aspect = "portrait" | "square" | "landscape";
type Accent = "blue" | "butter" | "sage" | "pink";

const aspectClasses: Record<Aspect, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[3/2]",
};

const accentClasses: Record<Accent, string> = {
  blue: "bg-pastel-blue/40 border-pastel-blue",
  butter: "bg-butter/40 border-butter",
  sage: "bg-sage/40 border-sage",
  pink: "bg-pink/40 border-pink",
};

/**
 * Displays a photo with an editorial rounded frame. If no `src` is
 * supplied, renders a tasteful placeholder instead of a broken image —
 * pass `hint` to show which file to add (e.g. "public/images/teacher/portrait-main.jpg").
 */
export default function PhotoFrame({
  src,
  alt,
  aspect = "portrait",
  accent = "blue",
  tilt = false,
  hint,
  /** Small (e.g. avatar-sized) usage — hides the placeholder label/hint text, icon only. */
  compact = false,
  sizes = "(min-width: 1024px) 480px, 90vw",
  priority = false,
  className = "",
}: {
  src?: string;
  alt: string;
  aspect?: Aspect;
  accent?: Accent;
  tilt?: boolean;
  hint?: string;
  compact?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspectClasses[aspect]} ${tilt ? "-rotate-2" : ""} ${compact ? "rounded-2xl" : "rounded-[2rem]"} overflow-hidden border-2 border-charcoal/10 shadow-[0_8px_0_0_rgba(32,32,32,0.06)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : compact ? (
        <div
          className={`flex h-full w-full items-center justify-center border-2 border-dashed ${accentClasses[accent]}`}
        >
          <Camera className="size-5 text-charcoal-soft" aria-hidden="true" />
          <span className="sr-only">{alt} — photo coming soon</span>
        </div>
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed p-6 text-center ${accentClasses[accent]}`}
        >
          <Camera className="size-8 text-charcoal-soft" aria-hidden="true" />
          <p className="font-sans text-sm text-charcoal-soft">Photo coming soon</p>
          {hint && (
            <p className="font-mono text-[11px] text-charcoal-soft/70 break-all">
              {hint}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
