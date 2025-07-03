"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
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
    <section id="hero" className="px-4 lg:px-8 py-12 lg:py-20 pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
            <motion.h1
              className="xl:leading-[70px] xl:text-[50px] text-3xl lg:text-4xl font-medium text-gray-900"
              variants={fadeInUp}
            >
              Want anything to be<br />easy with <span className="text-gray-900 font-bold">LaslesVPN</span>.
            </motion.h1>

            <motion.p className="font-normal text-base text-[#4F5665] leading-relaxed max-w-xl" variants={fadeInUp}>
              Provide a network for all your needs with ease and fun using <span className="font-medium">LaslesVPN</span><br />discover interesting features from us.
            </motion.p>

            <motion.button
              className="xl:w-[250px] px-8 py-4 bg-[#F53838] text-white rounded-lg font-semibold text-lg hover:bg-[#E03030] transition-colors shadow-[0_25px_54px_rgba(245,56,56,0.35)]"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <Image src="/hero-illustration.svg" alt="Person working with VPN illustration" className="w-full h-auto" width={0} height={0} unoptimized priority style={{width: '100%', height: 'auto'}} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
