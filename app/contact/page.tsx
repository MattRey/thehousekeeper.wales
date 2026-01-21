import { Hero, HeroDescription, HeroImage, HeroTitle } from "@/components/hero";
import { TextBlock } from "@/components/text-block";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 md:gap-32 container pb-16">
      <Hero
        image={
          <HeroImage
            src="/images/map.webp"
            alt="Luxury retreat background"
          />
        }
        title={
          <HeroTitle>
            Contact <span className="text-accent">us</span>
          </HeroTitle>
        }
        description={
          <HeroDescription>
            Get in touch with us to discuss your cleaning and property maintenance needs.
          </HeroDescription>
        }
      />
      <TextBlock>
        <p>
          Whilst living away from his own busy holiday let Adam Hardman our
          founder was frustrated by the lack of response from cleaners. He also
          recognised only a few cleaning companies offered a maintenance service
          as well as a cleaning service. Six years ago on his return to North
          Wales The Housekeeper was born.
        </p>
      </TextBlock>

    </main>
  );
}
