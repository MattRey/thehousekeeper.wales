import Image from "next/image";
import { ReactNode } from "react";

// Sub-component props types
interface HeroImageProps {
  src: string;
  alt?: string;
  className?: string;
}

interface HeroTitleProps {
  children: ReactNode;
}

interface HeroDescriptionProps {
  children: string;
}

interface HeroActionsProps {
  children: ReactNode;
}

// Root Hero component using slot-based pattern to enforce order
interface HeroProps {
  image: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function Hero({ image, title, description, actions }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-192px)]">
      {image}
      <div className="absolute -left-4 sm:left-auto sm:right-0 top-0 bottom-0 sm:top-1/4 md:-translate-y-1/5 z-20 w-screen sm:w-2/3 md:-mr-4 md:px-0 animate-slide-in-right">
        <div className="h-full sm:h-auto bg-foreground/70 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-8 text-center md:text-left md:rounded-tl-4xl">
          <div className="flex flex-col justify-center gap-8">
            {title}
            {description}
          </div>
          {actions}
        </div>
      </div>
    </section>
  );
}

// Sub-components
export function HeroImage({ src, alt = "Hero background", className }: HeroImageProps) {
  return (
    <div className="relative w-screen md:rounded-tl-4xl sm:w-full h-[calc(100vh-92px)] sm:h-[700px] -mx-4 md:mx-0 animate-slide-in-left">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover md:rounded-tl-4xl ${className}`}
        priority
      />
    </div>
  );
}

export function HeroTitle({ children }: HeroTitleProps) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-balance text-background">
      {children}
    </h1>
  );
}

export function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <p className="text-lg md:text-xl font-light text-background max-w-2xl leading-relaxed">
      {children}
    </p>
  );
}

export function HeroActions({ children }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
      {children}
    </div>
  );
}
