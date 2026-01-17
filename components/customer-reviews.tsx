"use client";

import { useEffect, useRef } from "react";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Sarah W.",
    comment:
      "Absolutely fantastic service! Our holiday home has never looked better. The attention to detail is remarkable and guests always comment on how spotless everything is.",
    rating: 5,
  },
  {
    name: "David H.",
    comment:
      "Reliable, professional and thorough. The team goes above and beyond every single time. I wouldn't trust anyone else with our property in Anglesey.",
    rating: 5,
  },
  {
    name: "Emma R.",
    comment:
      "The housekeeper has been managing our changeovers for over two years now. Communication is excellent and the quality of work is consistently outstanding.",
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
    <div className="relative bg-gray-50 pt-3">
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
    <section ref={ref} className="w-full animate-on-scroll" id="customer-reviews">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
