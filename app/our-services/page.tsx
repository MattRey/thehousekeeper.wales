import { Hero, HeroDescription, HeroImage, HeroTitle } from "@/components/hero";
import { TextBlock } from "@/components/text-block";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 container pb-16">
      <Hero
        image={
          <HeroImage
            src="/images/rockside.webp"
            alt="Luxury retreat background"
            className="object-bottom-left"
          />
        }
        title={
          <HeroTitle>
            Our <span className="text-accent">services</span>
          </HeroTitle>
        }
        description={
          <HeroDescription>
            We offer a range of services to meet your needs
          </HeroDescription>
        }
      />
      <p className="text-4xl font-serif">A holiday home has three requirements....</p>
      <TextBlock>
        <h2 className="text-3xl font-serif">Changeover service</h2>
        <p>
          Our primary service is to offer a superb changeover experience to
          holiday lets ranging from one bedroom all the way up to twenty! A
          changeover includes the clean, the laundry, provision of a welcome
          pack, toilet rolls etc..
        </p>
        <p>
          We report any issues or feedback to owners or letting agents promptly
          via our unique feedback form.
        </p>
        <p>
          We also have a property manager who is available to talk through any
          issues with your property.
        </p>
      </TextBlock>
      <TextBlock position="right">
        <h2 className="text-3xl font-serif">Property maintenance</h2>
        <p>
          Property maintenance is offered alongside our changeover service and
          as a separate service for owners who don&apos;t have a holiday let with us.
        </p>
        <p>
          Any issue reported to our dedicated line, from broken lightbulb to
          full on flood, will be responded to within the hour either as a
          resolution or timeframe for resolution.
        </p>
        <p>
          Having been in business for over six years we have a vast list of
          tradespeople who offer us preferential call out times.
        </p>
      </TextBlock>
      <TextBlock>
        <h2 className="text-3xl font-serif">Key holding and property checks</h2>
        <p>
          Key holding and property checks are a further service we offer for
          those empty homes. Our team can check your property in line with the
          insurers requirements which is usually twice a month.
        </p>
      </TextBlock>
    </main>
  );
}
