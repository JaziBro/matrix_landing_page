"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most creators notice growth within 2–4 weeks, with significant traction typically achieved by the 2–3 month mark as we refine your strategy.",
    },
    {
      question: "What if I'm a beginner with no followers?",
      answer:
        "Perfect — we love working with emerging creators. Our framework helps you grow from zero to hero, crafting content that fits your niche and personality.",
    },
    {
      question: "Do you guarantee viral content?",
      answer:
        "No one can guarantee virality, but we engineer your content strategy for maximum reach potential — prioritizing sustainable growth and authentic engagement.",
    },
    {
      question: "What's included in your service?",
      answer:
        "We handle strategy, optimization, community management, brand partnerships, and 24/7 support. You focus on creating — we handle the growth.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Our pricing adapts to your goals and audience size, starting with affordable creator packages. Book a quick discovery call for a custom quote.",
    },
  ]

  // ✅ Use typed safe variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } satisfies Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
  } satisfies Variants

  return (
    <section ref={ref} className="relative py-28 px-4 md:px-8 bg-background overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest mb-3">
              {"// FAQ"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Everything you need to know before joining the <span className="text-accent font-semibold">SamyFLW Network</span>.
            </p>
          </motion.div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm overflow-hidden transition-all ${
                  openIndex === i ? "border-accent/40 shadow-md shadow-accent/10" : "hover:border-accent/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-foreground/80 leading-relaxed border-t border-accent/10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
