"use client"

import { motion } from "framer-motion"

export default function NewsletterSection() {
  return (
    <section className="px-4 lg:px-8 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl p-8 lg:p-16 shadow-xl relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 text-center">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-medium text-[rgba(11, 19, 42, 1)] mb-4">
                Subscribe Now for<br />Get Special Features!
              </h2>
              <p className="text-base text-[rgba(79,86,101,1)]">Let's subscribe with us and find the fun.</p>
            </div>

            <motion.button
              className="xl:w-[250px] px-8 py-4 bg-[#F53838] text-white rounded-lg font-semibold text-lg hover:bg-[#E03030] transition-colors shadow-[0_25px_54px_rgba(245,56,56,0.35)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
