"use client";

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import GlobalNetworkSection from "@/components/global-network-section";
import TestimonialsSection from "@/components/testimonials-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";
export default function LaslesVPNLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />

      <div className="w-full flex justify-center bg-transparent">
        <div className="w-full rounded-[16px] bg-gradient-to-b from-[rgba(248,248,248,1)] to-[rgba(248,248,248,0)] px-4 lg:px-8 pt-16 lg:pt-24 pb-0">
          <PricingSection />
          <GlobalNetworkSection />
          <TestimonialsSection />
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
