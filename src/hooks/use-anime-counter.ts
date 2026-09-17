import { useEffect, useRef, useState } from "react";

interface UseAnimeCounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useAnimeCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
}: UseAnimeCounterOptions) {
  const ref = useRef<HTMLElement>(null);
  const [displayed, setDisplayed] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial text
    el.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            
            const formatted = decimals > 0
              ? current.toFixed(decimals)
              : Math.floor(current).toLocaleString("en-IN");

            const text = `${prefix}${formatted}${suffix}`;
            if (el) el.textContent = text;
            setDisplayed(text);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              const finalFormatted = decimals > 0
                ? target.toFixed(decimals)
                : target.toLocaleString("en-IN");
              const finalText = `${prefix}${finalFormatted}${suffix}`;
              if (el) el.textContent = finalText;
              setDisplayed(finalText);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix, prefix, decimals]);

  return { ref, displayed };
}
