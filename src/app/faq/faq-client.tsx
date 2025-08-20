"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { faqs } from "@/lib/data"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, ExternalLink } from "lucide-react"
import { useState } from "react"

export function FAQClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen text-white">
        <Navigation />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about Cryonix bot and how to use its features.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our support team is here to help you get the most out of Cryonix.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://discord.gg/your-support-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Join Support Server</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:support@cryonix.bot"
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors border border-white/20"
                  >
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h3 className="text-lg font-semibold mb-2 text-white">Getting Started</h3>
                <p className="text-gray-400 text-sm mb-4">Learn how to set up and configure Cryonix</p>
                <a
                  href="/docs/setup"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm"
                >
                  View Setup Guide →
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h3 className="text-lg font-semibold mb-2 text-white">Commands</h3>
                <p className="text-gray-400 text-sm mb-4">Explore all available bot commands</p>
                <a
                  href="/commands"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm"
                >
                  Browse Commands →
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h3 className="text-lg font-semibold mb-2 text-white">Dashboard</h3>
                <p className="text-gray-400 text-sm mb-4">Manage your server settings</p>
                <a
                  href="/dashboard"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm"
                >
                  Open Dashboard →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  )
}
