"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, TrendingUp, Users, Sparkles } from "lucide-react"

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const steps = [
    {
      icon: Zap,
      title: "Audit & Strategy",
      description: "We analyze your current presence and create a custom growth strategy tailored to your niche.",
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "Our team optimizes your content for maximum reach and engagement using proven techniques.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We help you build an authentic, engaged community that supports your long-term growth.",
    },
    {
      icon: Sparkles,
      title: "Monetization",
      description: "Turn your influence into income through brand deals, sponsorships, and other revenue streams.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest mb-2">{"// HOW IT WORKS"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Four simple steps to transform your TikTok presence</p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-lg hover:border-accent/50 transition-all group"
                >
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
