"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, TrendingUp, Users, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const features = [
    {
      icon: Zap,
      title: "Audit & Strategy",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
    },
    {
      icon: Sparkles,
      title: "Monetization",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
    },
  ]

  // ✅ typed safely with `satisfies Variants`
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } satisfies Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      // 👇 assert the tuple type explicitly
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
  } satisfies Variants

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 md:px-8 bg-background"
      aria-label="Features section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <p className="text-accent text-sm font-mono tracking-widest mb-3">
              {"// FEATURES"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Creators Choose Us
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Powerful tools and expertise that amplify your TikTok impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-foreground/10 hover:border-accent/40 transition-all duration-300 group bg-background/60 backdrop-blur-sm"
                >
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
