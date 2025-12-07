import Image from "next/image";

export function Hero() {
  return (
    <section className="relative container lg:top-4 min-h-[calc(100vh-92px)]">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-screen md:w-full h-[calc(100vh-92px)] md:h-[700px] -mx-4 md:mx-0">
        <Image
          src="/images/manadwyn.webp"
          alt="Luxury retreat background"
          fill
          className="object-cover object-bottom-left"
          priority
        />
      </div>

      {/* Content block - right 2/3, overflows bottom of image */}
      <div className="absolute right-0 top-0 bottom-0 md:top-1/2 md:-translate-y-1/5 z-20 w-full md:w-2/3 md:pl-4 md:px-0">
        <div className="h-full bg-foreground/70 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-8 text-center md:text-left">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-balance text-background">
              Refined Hospitality for{" "}
              <span className="text-accent">Luxury Retreats</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-background max-w-2xl leading-relaxed">
              The housekeeper delivers outstanding changeover services to
              fantastic holiday homes across Anglesey and North Wales. We are the
              best at what we do... housekeeping.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="px-8 py-3 border-2 border-background text-background font-light hover:bg-foreground hover:text-background transition-colors">
              Our services
            </button>
            <button className="px-8 py-3 bg-accent text-foreground font-light hover:opacity-90 transition-opacity">
              What our customers say
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
