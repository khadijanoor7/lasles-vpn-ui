"use client"

import { motion } from "framer-motion"
import FeatureItem from "./feature-item"
import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    "Powerful online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="features" className="px-4 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image src="/features-illustration.svg" alt="Person with headphones working" className="w-full h-auto" width={0} height={0} unoptimized priority style={{width: '100%', height: 'auto'}} />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              We Provide Many<br />Features You Can Use
            </motion.h2>

            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp}>
              You can explore the features that we provide with fun and<br />have their own functions each feature.
            </motion.p>

            <motion.div className="space-y-4" variants={fadeInUp}>
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
