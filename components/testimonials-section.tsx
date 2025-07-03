"use client";

import { useState } from "react";
import Image from "next/image"
import TestimonialCard from "./testimonial-card";

interface Testimonial {
  name: string;
  location: string;
  rating: string;
  testimonial: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial:
        '"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".',
      avatar: "/user-1.svg",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: "4.5",
      testimonial:
        '"I like it because I like to travel far and still can connect with high speed.".',
      avatar: "/user-2.svg",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: "4.5",
      testimonial:
        '"This is very unusual for my business that currently requires a virtual private network that has high security.".',
      avatar: "/user-3.svg",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(0);

  // Helper to get the correct index for left/center/right
  const getIndex = (offset: number) => {
    return (centerIndex + offset + testimonials.length) % testimonials.length;
  };

  const handlePrev = () => {
    setCenterIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="px-4 lg:px-8 py-16 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        {/* Testimonials Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-8 w-full overflow-x-auto md:overflow-x-visible">
          <TestimonialCard
            key={getIndex(-1)}
            name={testimonials[getIndex(-1)].name}
            location={testimonials[getIndex(-1)].location}
            rating={testimonials[getIndex(-1)].rating}
            testimonial={testimonials[getIndex(-1)].testimonial}
            avatar={testimonials[getIndex(-1)].avatar}
            isHighlighted={false}
          />
          <TestimonialCard
            key={getIndex(0)}
            name={testimonials[getIndex(0)].name}
            location={testimonials[getIndex(0)].location}
            rating={testimonials[getIndex(0)].rating}
            testimonial={testimonials[getIndex(0)].testimonial}
            avatar={testimonials[getIndex(0)].avatar}
            isHighlighted={true}
          />
          <TestimonialCard
            key={getIndex(1)}
            name={testimonials[getIndex(1)].name}
            location={testimonials[getIndex(1)].location}
            rating={testimonials[getIndex(1)].rating}
            testimonial={testimonials[getIndex(1)].testimonial}
            avatar={testimonials[getIndex(1)].avatar}
            isHighlighted={false}
          />
        </div>

        {/* Dots and Arrows */}
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCenterIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === centerIndex ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Arrow Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-300 transition-all"
            >
              <Image src="/arrow-left.svg" alt="Arrow Left" className="h-[30px] w-[30px]" unoptimized/>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
            >
              <Image src="/arrow-right.svg" alt="Arrow Right" className="h-[30px] w-[30px]" unoptimized />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
