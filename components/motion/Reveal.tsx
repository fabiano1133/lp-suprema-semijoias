"use client";

import * as React from "react";

type RevealPreset = "fade-in" | "fade-up" | "slow-scale";

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const hiddenClasses: Record<RevealPreset, string> = {
  "fade-in": "opacity-0",
  "fade-up": "opacity-0 translate-y-3",
  "slow-scale": "opacity-0 scale-[1.02]",
};

const visibleClasses: Record<RevealPreset, string> = {
  "fade-in": "opacity-100",
  "fade-up": "opacity-100 translate-y-0",
  "slow-scale": "opacity-100 scale-100",
};

export function Reveal({
  children,
  className,
  preset = "fade-up",
  delayMs = 0,
  durationMs = 650,
}: {
  children: React.ReactNode;
  className?: string;
  preset?: RevealPreset;
  delayMs?: number;
  durationMs?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita usuários com redução de movimento.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        "transform-gpu will-change-transform",
        "motion-safe:transition motion-safe:ease-out",
        "motion-reduce:transition-none",
        isVisible ? visibleClasses[preset] : hiddenClasses[preset],
        className,
      )}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

