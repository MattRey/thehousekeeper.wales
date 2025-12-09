import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-92px)]">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-screen sm:w-full h-[calc(100vh-92px)] sm:h-[700px] -mx-4 md:mx-0">
        <Image
          src="/images/manadwyn.webp"
          alt="Luxury retreat background"
          fill
          className="object-cover object-bottom-left"
          priority
        />
      </div>

      <div className="absolute -left-4 sm:left-auto sm:right-0 top-0 bottom-0 sm:top-1/2 md:-translate-y-1/5 z-20 w-screen sm:w-2/3 md:-mr-4 md:px-0">
        <div className="h-full sm:h-auto bg-foreground/70 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-8 text-center md:text-left">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-balance text-background">
              Outstanding housekeeping and maintenance for{" "}
              <span className="text-accent">holiday homes in North Wales</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-background max-w-2xl leading-relaxed">
              The housekeeper delivers outstanding changeover services to the
              best holiday homes across Anglesey and North Wales. We are the
              best at what we do... Housekeeping.
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
