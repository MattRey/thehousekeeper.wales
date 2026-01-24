import { ContactForm } from "@/components/contact-form";
import { Hero, HeroDescription, HeroImage, HeroTitle } from "@/components/hero";
import { TextBlock } from "@/components/text-block";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 md:gap-32 container pb-16">
      <Hero
        image={
          <HeroImage src="/images/map.webp" alt="Luxury retreat background" />
        }
        title={
          <HeroTitle>
            Contact <span className="text-accent">us</span>
          </HeroTitle>
        }
        description={
          <HeroDescription>
            Get in touch with us to discuss your cleaning and property
            maintenance needs.
          </HeroDescription>
        }
      />

      <section className="w-full">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
          Send us a <span className="text-accent">message</span>
        </h2>
        <ContactForm />
      </section>
      <TextBlock>
        <p>
          Email us at{" "}
          <a
            href="mailto:bookings@thehousekeeper.wales"
            className="font-medium hover:underline"
          >
            bookings@thehousekeeper.wales
          </a>{" "}
        </p>
        <p>
          or call us on{" "}
          <a href="tel:+447738019200" className="font-medium hover:underline">
            07738 019200
          </a>
        </p>
      </TextBlock>
    </main>
  );
}
