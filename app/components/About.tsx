"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
  } satisfies Variants

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1], 
      },
    },
  }

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 md:px-8 overflow-hidden bg-background"
      aria-label="About SamyFLW section"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={textVariants} className="mb-16 text-center md:text-left">
            <p className="text-accent text-sm font-mono tracking-widest mb-2">
              {"// ABOUT [NAME]"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-accent rounded mx-auto md:mx-0" />
          </motion.div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div variants={textVariants} className="space-y-6 leading-relaxed">
              <p className="text-lg text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <p className="text-lg text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "consectetur adipiscing elit",
                  "Ut enim ad minim veniam, quis nostrud",
                  "laboris nisi ut aliquip ex ea commodo consequat",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="block w-2 h-2 bg-accent rounded-full" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 md:gap-8"
            >
              {[
                { number: "500+", label: "Lorem" },
                { number: "2B+", label: "Ipsum" },
                { number: "95%", label: "Dolor" },
                { number: "24/7", label: "Sit amet" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={statVariants}
                  className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-[0_0_20px_var(--accent)]"
                >
                  <div className="text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
