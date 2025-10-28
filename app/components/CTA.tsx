"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
  } satisfies Variants

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-8 overflow-hidden"
    >
      {/* Background gradient with subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0_0)] via-[oklch(0.2_0.05_142.5)] to-[oklch(0.1_0_0)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-5xl mx-auto text-center border border-accent/30 bg-background/40 backdrop-blur-md px-8 py-16"
        style={{ borderRadius: "0.5rem" }}
      >
        <motion.h2
          variants={containerVariants}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-glow"
        >
          Lorem Ipsum<span className="text-accent">Dolor</span> Amit?
        </motion.h2>

        <motion.p
          variants={containerVariants}
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
        >
          Lorem Ipsum Dolor<span className="text-accent font-semibold">[Name]</span>.  
          Sit Amet.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-accent text-background font-bold rounded-sm cursor-pointer hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 transition-all duration-300 glow-pulse">
            Start Your Journey
          </button>
          <button className="px-8 py-4 border border-accent text-accent font-bold rounded-sm cursor-pointer hover:bg-accent/10 transition-all duration-300 hover:-translate-y-0.5">
            Schedule Consultation
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
