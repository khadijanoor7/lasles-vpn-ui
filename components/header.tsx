"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  const navItems = [
    { label: "About", sectionId: "hero" },
    { label: "Features", sectionId: "features" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "Testimonials", sectionId: "testimonials" },
    { label: "Help", sectionId: "footer" },
  ]

  return (
    <motion.header
      className="px-4 lg:px-8 py-8 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="LaslesVPN" className="h-8 w-auto" width={120} height={32} unoptimized />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <button className="text-gray-900 font-medium hover:text-red-500 transition-colors">Sign In</button>
          <button className="w-[150px] px-6 py-2 border-2 border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden mt-4 pb-4 border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-row items-center justify-center gap-3 pt-4 border-t border-gray-200">
              <button className="text-gray-900 font-medium">Sign In</button>
              <button className="w-[120px] px-4 py-2 border-2 border-red-500 text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
