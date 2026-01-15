import { Hero, HeroDescription, HeroImage, HeroTitle } from "@/components/hero";
import { TextBlock } from "@/components/text-block";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 container pb-16">
      <Hero
        image={
          <HeroImage
            src="/images/image3.webp"
            alt="Luxury retreat background"
          />
        }
        title={
          <HeroTitle>
            About <span className="text-accent">us</span>
          </HeroTitle>
        }
        description={
          <HeroDescription>
            &quot;It&apos;s all about the team&quot;
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
      <TextBlock position="right">
        <p>
          The Housekeeper name hopes to differentiate from a normal cleaning
          service! Our Housekeepers are paid to take care and communicate about
          the holiday lets we are responsible for, not just clean and walk away
          from them......
        </p>
      </TextBlock>
      <TextBlock>
        <p>
          The Housekeeper now partners with every major holiday agency in the
          UK, managing over 50 holiday lets and providing key holding services
          for over 20 properties. The team has grown to around thirty and we
          have completed over 8000 changeovers. If you speak to Adam you will
          learn that his phrase &quot;it&apos;s all about the team&quot; is something he has
          believed in within every business he has run and his recent row across
          the Atlantic.
        </p>
      </TextBlock>
    </main>
  );
}
