"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Shield, FileText, Eye, Lock } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Cryonix bot and its associated services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily use Cryonix bot for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Modify or copy the bot's materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in the bot</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. User Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use Cryonix bot in a manner consistent with Discord's Terms of Service and Community Guidelines. Prohibited uses include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Spamming or flooding Discord channels</li>
                <li>Using the bot to harass or abuse other users</li>
                <li>Attempting to exploit or abuse bot features</li>
                <li>Using the bot for illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                The information on this bot is provided on an 'as is' basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our bot and the use of this bot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our support Discord server.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
