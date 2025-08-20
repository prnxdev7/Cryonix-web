"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Shield, Eye, Lock, Database, Cookie, UserCheck } from "lucide-react"

export default function PrivacyPage() {
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
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Policy
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Secure</h3>
                <p className="text-sm text-gray-300">Your data is encrypted and secure</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Transparent</h3>
                <p className="text-sm text-gray-300">Clear about what we collect</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <UserCheck className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Your Control</h3>
                <p className="text-sm text-gray-300">You control your data</p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Database className="w-6 h-6 mr-3 text-purple-400" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Discord Account Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you sign in with Discord, we collect your Discord username, user ID, email address, and profile picture. This information is used to authenticate you and provide access to the dashboard.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Server Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We access information about Discord servers where you have administrative permissions and where our bot is present. This includes server names, member counts, and your role within those servers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Usage Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information about how you use our bot and dashboard, including commands used, features accessed, and error logs for debugging purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Eye className="w-6 h-6 mr-3 text-blue-400" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide and maintain our bot services</li>
                <li>To authenticate and authorize dashboard access</li>
                <li>To process bot commands and provide responses</li>
                <li>To improve our services and fix bugs</li>
                <li>To communicate with you about service updates</li>
                <li>To ensure compliance with Discord's Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Lock className="w-6 h-6 mr-3 text-green-400" />
                Data Protection
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All data transmission is encrypted using HTTPS</li>
                <li>Database access is restricted and monitored</li>
                <li>We regularly update our security practices</li>
                <li>Access to user data is limited to essential personnel only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-yellow-400" />
                Cookies and Tracking
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use essential cookies to maintain your login session and provide dashboard functionality. We do not use tracking cookies or third-party analytics that compromise your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your data only as long as necessary to provide our services. You can request deletion of your data at any time by contacting us through our support server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or want to exercise your rights, please contact us through our support Discord server or email us at privacy@cryonix.bot.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
