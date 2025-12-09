import { Hero } from "@/components/hero";
import { TextBlock } from "@/components/text-block";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 container">
      <Hero />
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
    </main>
  );
}
