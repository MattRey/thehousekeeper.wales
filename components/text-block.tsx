"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

export function TextBlock({
  children,
  position = "left",
}: {
  children: React.ReactNode;
  position?: "left" | "right";
}) {
  const isRight = position === "right";
  const isLeft = position === "left";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx("relative flex w-full sm:w-2/3 animate-on-scroll", {
        "self-end": isRight,
        "self-start": isLeft,
      })}
    >
      <div
        className={clsx(
          "relative flex flex-col gap-4 w-full text-xl bg-gray-50 p-4 md:p-16 z-10 rounded-tl-4xl border-l border-t border-accent"
        )}
      >
        {children}
      </div>
    </div>
  );
}
