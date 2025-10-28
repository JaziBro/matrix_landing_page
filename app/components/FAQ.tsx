"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most creators see noticeable growth within 2-4 weeks. However, significant results typically appear within 2-3 months as we optimize your content strategy.",
    },
    {
      question: "What if I'm a beginner with no followers?",
      answer:
        "Perfect! We work with creators at all levels. Our strategies are designed to help you build from zero to hero. We'll create a customized plan for your niche.",
    },
    {
      question: "Do you guarantee viral content?",
      answer:
        "While we can't guarantee virality, our data-driven approach significantly increases your chances. We focus on sustainable growth and authentic engagement.",
    },
    {
      question: "What's included in your service?",
      answer:
        "Content strategy, optimization, community management, brand partnership opportunities, and 24/7 support. We handle everything to help you succeed.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing varies based on your goals and current follower count. We offer flexible packages starting at affordable rates. Contact us for a custom quote.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest mb-2">{"// FAQ"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-effect rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <span className="font-bold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/20"
                    >
                      <p className="px-6 py-4 text-foreground/80">{faq.answer}</p>
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
