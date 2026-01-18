"use client";

import { useEffect, useRef } from "react";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Fiona and Emma, Chapel House, Rhosneigr",
    comment:
      "Finding a reliable and professional changeover service was one of our key concerns' when investing in a holiday let. The housekeeper has been the answer to our prayers. Fantastic service. Thanks Adam and the team...",
    rating: 5,
  },
  {
    name: "Lucy and Adam Covell, Rhosneigr",
    comment:
      "Adam never fails to pick up his phone and is wholly reliable with numerous contacts to solve any potential problems. His speed of response and efficiency when we had a recent drain problem eased the situation and solved it very quickly and calmly.",
    rating: 5,
  },
  {
    name: "Neil and Nikki Moulton, Plas Aber, Rhosneigr",
    comment:
      "Adam and the housekeeper team have been a breath of fresh air, they care about our property and ensure its always in great condition for all our guests and own family. Any maintenance issued are covered in a very timely manner. Highly recommend.",
    rating: 5,
  },
  {
    name: "Steph and Will, Morlais, Rhosneigr",
    comment:
      "Consistent from the start Adam and his team provide a faultless weekly changeover. Nothing is to much trouble, with issues well communicated and guests feedback noted, supported with recommendations to improve, maintain or replace. The housekeeper has also taken the complexity out of our routine maintenance by detailing the requirement and facilitating with local trades teams to ensure the work is carried out quickly and professionally.",
    rating: 5,
  },
  {
    name: "Ann and Jerry Dunlop, YFelinheli",
    comment:
      "Our house has consistently been scored 5 out of 5 for its cleanliness. Adam is very efficient and we are very pleased with the service that he and his company provide.",
    rating: 5,
  },
  {
    name: "Adam C Rhosneigr",
    comment:
      "In only a short period of time, the housekeeper has transformed our ease in managing a second home. From internet issues to major flooding due to blocked drains, they have calmed the clients and fixed the problems with immediate effect.",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1"
      className="text-foreground"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 bg-background px-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative bg-gray-50 pt-3 flex">
      {/* Stars positioned on top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <Stars rating={review.rating} />
      </div>

      {/* Review card */}
      <div className="border-2 border-accent p-8 pt-6">
        <h3 className="text-center font-serif text-lg mb-4">{review.name}</h3>
        <p className="text-center leading-relaxed">{review.comment}</p>
      </div>
    </div>
  );
}

export function CustomerReviews() {
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
    <section
      ref={ref}
      className="w-full animate-on-scroll"
      id="customer-reviews"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
