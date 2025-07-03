"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  delay: number
  planType: "free" | "standard" | "premium"
  selected?: boolean
  onSelect?: () => void
}

export default function PricingCard({ title, price, features, delay, planType, selected = false, onSelect }: PricingCardProps) {
  const getIllustration = () => {
    if (planType === "free") {
      return <Image src="/Free.svg" alt="Free Plan" className="w-full h-full" width={90} height={90} unoptimized />
    }
    if (planType === "standard") {
      return <Image src="/Standard.svg" alt="Standard Plan" className="w-full h-full" width={90} height={90} unoptimized />
    }
    if (planType === "premium") {
      return <Image src="/Premium.svg" alt="Premium Plan" className="w-full h-full" width={90} height={90} unoptimized />
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-2xl pt-24 pb-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 flex flex-col justify-between w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto ${
        selected ? "border-red-500 ring-2 ring-red-400" : "border-transparent"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      style={{ height: '105%' }}
    >
      <div className="flex flex-col flex-1 justify-between h-full">
        <div>
          {/* Plan Illustration */}
          <div className="relative mb-8 h-32 flex items-center justify-center">{getIllustration()}</div>
          <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">{title}</h3>
          <div className="space-y-4 mb-6 mx-auto max-w-[195px] flex flex-col items-start">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image src="/tick.svg" alt="Plan Features" className="w-6 h-6" width={24} height={24} unoptimized />
                </div>
                <span className="text-gray-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-center mb-4">
            <div className="text-3xl text-gray-900">
              {typeof price === 'string' && price.includes('/') ? (
                <>
                  <span className="font-bold">{price.split('/')[0].trim()}</span>
                  <span className="font-normal"> /{price.split('/')[1]}</span>
                </>
              ) : (
                <span className="font-bold">{price}</span>
              )}
            </div>
          </div>
          <button
            className={`w-[177px] py-3 px-6 rounded-full font-semibold transition-all mt-0 ${
              selected
                ? "bg-red-500 text-white ring-2 ring-red-400 shadow-[0_25px_54px_rgba(245,56,56,0.35)] "
                : "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            }`}
            onClick={onSelect}
          >
            {selected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
