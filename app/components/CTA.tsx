"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-effect-strong p-12 md:p-16 rounded-lg text-center border-2 border-accent/30"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your TikTok?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful creators who have scaled their presence with SamyFLW. Your growth journey starts
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-background font-bold rounded hover:shadow-lg hover:shadow-accent/50 transition-all glow-pulse">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded hover:bg-accent/10 transition-all">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
