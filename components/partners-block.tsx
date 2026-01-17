"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function PartnersBlock() {
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
    <div ref={ref} className="flex flex-col gap-8 w-full animate-on-scroll">
      <h2 className="text-3xl font-serif">Our Partners:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
        <Image src="/partners/sykes.svg" alt="Sykes Holiday Cottages" width={220} height={100} className="justify-self-center"/>
        <Image src="/partners/oyster.svg" alt="Oyster Holiday Cottages" width={210} height={100} className="justify-self-center" />
        <Image src="/partners/Anglesey.svg" alt="Anglesey Holiday Lettings" width={200} height={100} className="justify-self-center" />
        <Image src="/partners/cottages.svg" alt="Cottages.com" width={230} height={100} className="justify-self-center" />
        <Image src="/partners/menai.svg" alt="Menai Holiday Cottages" width={180} height={100} className="justify-self-center" />
        <Image src="/partners/nwhc.svg" alt="North Wales Holiday Cottages" width={230} height={100} className="justify-self-center" />
      </div>
    </div>
  );
}
