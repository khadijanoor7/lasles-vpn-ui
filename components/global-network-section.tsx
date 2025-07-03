"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function GlobalNetworkSection() {

  return (
    <section className="px-4 lg:px-8 py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Huge Global Network<br />of Fast VPN
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See <span className="font-semibold text-gray-900">LaslesVPN</span> everywhere to make it easier for you when
            you move<br />locations.
          </motion.p>
        </div>

        {/* World Map */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-5xl mx-auto">
            {/* World Map SVG */}
            <Image src="/world-map.svg" alt="World Map" className="w-full h-auto" width={0} height={0} unoptimized priority style={{width: '100%', height: 'auto'}} />
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/netflix-logo.svg"
              alt="Netflix"
              className="w-[200px] h-[112.5px] opacity-60 hover:opacity-80 transition-opacity"
              width={200}
              height={112}
              unoptimized
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/reddit-logo.svg"
              alt="Reddit"
              className="w-[156.25px] h-[50.62px] opacity-60 hover:opacity-80 transition-opacity"
              width={156}
              height={51}
              unoptimized
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/amazon-logo.svg"
              alt="Amazon"
              className="w-[277.76px] h-[208.32px] opacity-60 hover:opacity-80 transition-opacity"
              width={278}
              height={208}
              unoptimized
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/discord-logo.svg"
              alt="Discord"
              className="w-[187.02px] h-[63.59px] opacity-60 hover:opacity-80 transition-opacity"
              width={187}
              height={64}
              unoptimized
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/spotify-logo.svg"
              alt="Spotify"
              className="w-[171.28px] h-[51.34px] opacity-60 hover:opacity-80 transition-opacity"
              width={171}
              height={51}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
