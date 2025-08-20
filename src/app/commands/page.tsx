"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { botCommands } from "@/lib/data"
import { Search, Code, Music, Shield, Server, Wrench, Zap } from "lucide-react"
import { useState } from "react"
import { generateSEOMetadata } from "@/lib/seo"
import Head from "next/head"

const categoryIcons = {
  General: Zap,
  Music: Music,
  Moderation: Shield,
  Server: Server,
  Utility: Wrench,
}

export const metadata = generateSEOMetadata({
  title: "Cryonix Commands - 80+ Discord Bot Commands | Music, Moderation, Games",
  description: "Complete list of Cryonix Discord bot commands. 80+ commands including music, moderation, games, economy, server management, and utility features. All commands are free!",
  keywords: [
    "discord bot commands",
    "cryonix commands",
    "discord music commands",
    "discord moderation commands",
    "discord games commands",
    "discord utility commands",
    "discord economy commands",
    "free discord bot commands",
    "discord bot help"
  ],
  url: "https://cryonix-web.vercel.app/commands"
})

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(botCommands.map(cmd => cmd.category)))]
  
  const filteredCommands = botCommands.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || command.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bot{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Commands
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore all available commands and learn how to use Cryonix to its full potential.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search commands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-white/10 text-gray-300 hover:bg-white/20"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Commands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommands.map((command, index) => {
                const IconComponent = categoryIcons[command.category as keyof typeof categoryIcons] || Code
                
                return (
                  <motion.div
                    key={command.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{command.name}</h3>
                          <span className="text-sm text-purple-400">{command.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{command.description}</p>
                    
                    <div className="bg-black/30 rounded-lg p-3">
                      <p className="text-sm font-mono text-green-400">
                        <span className="text-gray-500">Usage:</span> {command.usage}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* No Results */}
            {filteredCommands.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2 text-white">No commands found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Need Help?</h2>
              <p className="text-gray-300 text-center mb-6">
                Join our support server or check out our documentation for more detailed information about each command.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/your-support-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-center"
                >
                  Join Support Server
                </a>
                <a
                  href="/docs"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors text-center border border-white/20"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  )
}
