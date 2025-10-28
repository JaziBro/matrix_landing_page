"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-accent text-sm font-mono tracking-widest mb-2">{"// ABOUT SAMYFLW"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-accent rounded" />
          </motion.div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                SamyFLW is a premier TikTok creators agency dedicated to helping content creators scale their presence
                and monetize their influence.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We combine data-driven strategies with creative excellence to deliver measurable results. Our team
                understands the TikTok algorithm and knows exactly what it takes to go viral.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Strategic content planning & optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Authentic audience growth & engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Brand partnerships & monetization</span>
                </div>
              </div>
            </motion.div>

            {/* Right content - Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Creators Managed" },
                { number: "2B+", label: "Total Views" },
                { number: "95%", label: "Growth Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="glass-effect p-6 rounded-lg text-center hover:border-accent/50 transition-all">
                  <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
