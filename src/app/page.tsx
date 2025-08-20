"use client"

import { motion } from "framer-motion"
import { Bot, Music, Shield, Zap, Users, Star, ArrowRight, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { features, botInfo } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6 animate-float relative"
            >
              <Image
                src={botInfo.avatar}
                alt={botInfo.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
              {botInfo.verified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
              )}
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {botInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {botInfo.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href={botInfo.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 animate-glow"
            >
              <Bot className="w-5 h-5" />
              <span>Invite to Server</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <span>View Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Servers", value: botInfo.serverCount.toString() },
              { label: "Commands", value: "80+" },
              { label: "Uptime", value: "24/7" },
              { label: "Verified", value: botInfo.verified ? "✓" : "✗" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage and enhance your Discord server, all in one bot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.title.split(" ")[0]}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title.substring(feature.title.indexOf(" ") + 1)}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Discord servers already using Cryonix to enhance their community experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={botInfo.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <Bot className="w-5 h-5" />
                <span>Add to Discord</span>
              </a>
              <Link
                href="/commands"
                className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span>View Commands</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
