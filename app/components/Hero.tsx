"use client"

import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  skipIntro: boolean
  setSkipIntro: (value: boolean) => void
}

export default function HeroSection({ skipIntro, setSkipIntro }: HeroSectionProps) {
  const [showContent, setShowContent] = useState(skipIntro)

  useEffect(() => {
    if (skipIntro) {
      setShowContent(true)
    }
  }, [skipIntro])

  // ✅ Explicitly type as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // ✅ Explicitly type as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // easeOut is valid now
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-accent/30 font-mono text-sm matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Skip intro button */}
      {!showContent && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setShowContent(true)}
          className="absolute top-32 right-8 px-4 py-2 text-sm border border-accent/50 text-accent hover:bg-accent/10 rounded transition-colors z-20"
        >
          Skip intro
        </motion.button>
      )}

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
      >
        {/* Animated intro text */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-accent text-lg font-mono tracking-widest mb-4">
            {"> ENTERING SAMYFLW NETWORK..."}
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          <span className="text-accent">Elevate</span> Your
          <br />
          TikTok Presence
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Strategic growth, authentic engagement, and creator success. Join the network of top TikTok creators.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-accent text-background font-bold rounded hover:shadow-lg hover:shadow-accent/50 transition-all glow-pulse">
            Join Now
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded hover:bg-accent/10 transition-all">
            Learn More
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
