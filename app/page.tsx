"use client"

import { useState } from "react"
import HeroSection from "./components/Hero"
import AboutSection from "./components/About"
import HowItWorks from "./components/Features"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  const [skipIntro, setSkipIntro] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
