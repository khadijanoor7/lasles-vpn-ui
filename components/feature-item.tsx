"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureItemProps {
  feature: string
  index: number
}

export default function FeatureItem({ feature, index }: FeatureItemProps) {
  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <Image src="/check.svg" alt="Check" className="w-6 h-6" width={24} height={24} unoptimized />
      </div>
      <span className="text-gray-700">{feature}</span>
    </motion.div>
  )
}
