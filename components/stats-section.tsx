"use client"

import { motion } from "framer-motion"
import StatCard from "./stat-card"
import React from "react"

export default function StatsSection() {
  const stats = [
    { icon: "/user.svg", value: "90+", label: "Users" },
    { icon: "/location.svg", value: "30+", label: "Locations" },
    { icon: "/Server.svg", value: "50+", label: "Servers" },
  ]

  return (
    <motion.section
      className="px-4 lg:px-8 py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto p-5 shadow-[0px_13px_15px_rgba(0,0,0,0.1)] rounded-lg">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-16 w-full lg:h-40">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatCard icon={stat.icon} value={stat.value} label={stat.label} />
              {index < stats.length - 1 && (
                <div
                  className="hidden lg:block h-12 md:h-16 lg:h-20 w-px bg-[#EAEFF2]"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
