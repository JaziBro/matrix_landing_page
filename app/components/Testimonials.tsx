"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star } from "lucide-react"

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const testimonials = [
    {
      name: "Alex Chen",
      handle: "@alexcreates",
      content:
        "Loved it",
      rating: 5,
    },
    {
      name: "Jordan Smith",
      handle: "@jordanvibe",
      content:
        "Just what I wanted",
      rating: 5,
    },
    {
      name: "Maya Patel",
      handle: "@mayacreates",
      content:
        "Incredible, thanks.",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  } satisfies Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
  } satisfies Variants

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 md:px-8 bg-background overflow-hidden"
      aria-label="Testimonials section"
    >
      {/* soft gradient background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <p className="text-accent text-sm font-mono tracking-widest mb-3">
              {"// TESTIMONIALS"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Creator Success Stories
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Hear from creators who scaled their reach and revenue with SamyFLW.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
              >
                {/* Floating glow accent */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-8 text-base leading-relaxed italic">
                  “{t.content}”
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-accent font-mono">{t.handle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
