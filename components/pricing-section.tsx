"use client"

import { motion } from "framer-motion"
import PricingCard from "./pricing-card"
import { useState } from "react"

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "Free",
      features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"],
      isPopular: false,
      planType: "free" as const,
    },
    {
      title: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      isPopular: false,
      planType: "standard" as const,
    },
    {
      title: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      isPopular: false,
      planType: "premium" as const,
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState<string>(pricingPlans[2].planType)

  return (
    <div className="w-full flex justify-center bg-transparent">
      <div className="w-full rounded-[16px] bg-gradient-to-b from-[rgba(248,248,248,1)] to-[rgba(248,248,248,0)] px-4 lg:px-8 pt-10 lg:pt-18 pb-0">
        <motion.section
          id="pricing"
          className=""
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Choose Your Plan
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's choose the package that is best for you and explore it happily and cheerfully.
              </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 place-items-center">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  delay={0.1 + index * 0.1}
                  planType={plan.planType}
                  selected={selectedPlan === plan.planType}
                  onSelect={() => setSelectedPlan(plan.planType)}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
