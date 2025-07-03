import type React from "react"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LaslesVPN - Easy VPN Solution",
  description: "Provide a network for all your needs with ease and fun using LaslesVPN",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
