import {
  Hero,
  HeroImage,
  HeroTitle,
  HeroDescription,
  HeroActions,
} from "@/components/hero";
import { TextBlock } from "@/components/text-block";
import { PartnersBlock } from "@/components/partners-block";
import { CustomerReviews } from "@/components/customer-reviews";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 container pb-16">
      <Hero
        image={<HomeHeroImage />}
        title={<HomeHeroTitle />}
        description={<HomeHeroDescription />}
        actions={<HomeHeroActions />}
      />
      <TextBlock>
        <p>
          Across Anglesey and Gwynedd the housekeeper has a long standing
          reputation for managing the changeover day for some of the most
          prestigious properties in this spectacular part of the world.
        </p>
        <p>
          From the cleaning, linen change, management of maintenance issues
          right down to ensuring a welcome pack is provided, our service is
          thorough and professional.
        </p>
      </TextBlock>
      <PartnersBlock />
      <TextBlock position="right">
        <p>
          The housekeeper offers a one stop service for Cleaning and Property
          maintenance to holiday lets. Over the past six years we have handled
          hundreds of changeover days, always ensuring our outstanding holiday
          lets are impeccably finished and ready on time.
        </p>
        <p>
          Our team comprises of reliable, honest and proud housekeepers who take
          a joy in ensuring the next guests to arrive are never disappointed.
        </p>
        <p>
          Operating across Anglesey and North Wales we are viewed as being the
          best in our field. Having owned holiday lets before we understand that
          details matter alongside communication with owners, agencies and
          guests.
        </p>
      </TextBlock>
      <CustomerReviews />
    </main>
  );
}

function HomeHeroImage() {
  return (
    <HeroImage src="/images/manadwyn.webp" alt="Luxury retreat background" />
  );
}
function HomeHeroTitle() {
  return (
    <HeroTitle>
      Outstanding housekeeping and maintenance for{" "}
      <span className="text-accent">holiday homes in North Wales</span>
    </HeroTitle>
  );
}
function HomeHeroDescription() {
  return (
    <HeroDescription>
      The housekeeper delivers outstanding changeover services to the best
      holiday lets across Anglesey and North Wales. We are the best at what we
      do... Housekeeping.
    </HeroDescription>
  );
}
function HomeHeroActions() {
  return (
    <HeroActions>
      <Link
        href="/our-services"
        className="px-8 py-3 border-2 border-background text-background font-light hover:bg-foreground hover:text-background transition-colors"
      >
        Our services
      </Link>
      <Link
        href="#customer-reviews"
        className="px-8 py-3 bg-accent text-foreground font-light hover:opacity-90 transition-opacity"
      >
        What our customers say
      </Link>
    </HeroActions>
  );
}
