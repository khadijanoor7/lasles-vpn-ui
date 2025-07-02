"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface StatCardProps {
  icon: string | React.ReactNode
  value: string
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center xl:gap-6 md:gap-4 space-y-2 lg:space-y-0 w-full md:max-w-[210px] mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-center mb-2 md:mb-0">
        {typeof icon === "string" ? (
          <Image src={icon} alt={label} className="w-12 h-12 text-red-500" width={48} height={48} unoptimized />
        ) : (
          icon
        )}
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </motion.div>
  )
}
