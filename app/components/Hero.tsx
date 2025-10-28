"use client"

import { motion, Variants } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [matrix, setMatrix] = useState<string[]>([])

  useEffect(() => {
    setMatrix(
      Array.from({ length: 25 }, () => (Math.random() > 0.5 ? "1" : "0"))
    )
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24"
      aria-label="Hero section with Matrix animation"
    >
      {/* Matrix Rain Layer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {matrix.map((char, i) => (
          <div
            key={i}
            className="absolute text-accent/40 font-mono text-sm animate-matrix"
            style={{
              left: `${(i / matrix.length) * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent text-lg font-mono tracking-widest mb-6"
        >
          {"> CONNECTING TO [NAME] NETWORK..."}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-glow leading-tight"
        >
          <span className="text-accent">Lorem</span> Ipsum <br />
          Dolor Sit Amet
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto"
        >
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-8 py-4 bg-accent text-background font-semibold cursor-pointer rounded hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300">
            Join Now
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-semibold cursor-pointer rounded hover:bg-accent/10 transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
