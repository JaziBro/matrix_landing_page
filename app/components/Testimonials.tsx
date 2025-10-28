"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star } from "lucide-react"

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const testimonials = [
    {
      name: "Alex Chen",
      handle: "@alexcreates",
      content: "SamyFLW helped me grow from 50K to 500K followers in 6 months. Their strategy is unmatched.",
      rating: 5,
    },
    {
      name: "Jordan Smith",
      handle: "@jordanvibe",
      content: "The team is incredibly responsive and genuinely cares about creator success. Highly recommend!",
      rating: 5,
    },
    {
      name: "Maya Patel",
      handle: "@mayacreates",
      content: "Best investment I made for my TikTok career. The ROI has been incredible.",
      rating: 5,
    },
  ]

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest mb-2">{"// TESTIMONIALS"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Creator Success Stories</h2>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-effect p-8 rounded-lg hover:border-accent/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.handle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
