"use client"

import Image from "next/image"

export default function Footer() {
  const productLinks = ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"]
  const engageLinks = ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"]
  const earnMoneyLinks = ["Affiliate", "Become Partner"]

  return (
    <footer id="footer" className="bg-gray-50 -mt-44 px-4 lg:px-8 pt-48 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Outer Flex Container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 lg:gap-x-20 xl:gap-x-64 w-full">
          {/* Company Info - Left Item */}
          <div className="flex flex-col gap-6 min-w-[320px] max-w-[400px]">
            <div className="flex items-center mb-4">
              <Image src="/logo.svg" alt="LaslesVPN" className="h-8 w-auto" width={120} height={32} unoptimized />
            </div>
            <p className="text-gray-600 leading-relaxed pr-8 mb-4">
              <span className="font-medium text-gray-900">LaslesVPN</span> is a private virtual network that<br />has unique features and has high security.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="inline-block">
                <Image src="/Facebook.svg" alt="Facebook" className="w-8 h-8" width={32} height={32} unoptimized />
              </a>
              <a href="#" className="inline-block">
                <Image src="/Twitter.svg" alt="Twitter" className="w-8 h-8" width={32} height={32} unoptimized />
              </a>
              <a href="#" className="inline-block">
                <Image src="/Instagram.svg" alt="Instagram" className="w-8 h-8" width={32} height={32} unoptimized />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">©2020LaslesVPN</p>
          </div>

          {/* Wrapper for the right three columns - Inner Flex Container */}
          <div className="flex flex-col md:flex-row md:justify-around xl:justify-between flex-grow gap-12 md:gap-x-32 xl:gap-x-">
            {/* Product Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Product</h3>
              <div className="space-y-4">
                {productLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Engage Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Engage</h3>
              <div className="space-y-4">
                {engageLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Earn Money Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Earn Money</h3>
              <div className="space-y-4">
                {earnMoneyLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}