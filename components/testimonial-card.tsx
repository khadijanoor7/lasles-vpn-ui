"use client";

import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: string;
  testimonial: string;
  avatar: string;
  isHighlighted?: boolean;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  testimonial,
  avatar,
  isHighlighted = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`min-h-52 bg-white rounded-2xl p-8 shadow-lg border-2 flex flex-col h-full justify-around transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto ${
        isHighlighted ? "border-red-500" : "border-gray-200"
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-gray-100">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-base">{name}</h4>
          <p className="text-xs text-gray-600">{location}</p>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-900 mr-1">
            {rating}
          </span>
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm">{testimonial}</p>
    </div>
  );
}
