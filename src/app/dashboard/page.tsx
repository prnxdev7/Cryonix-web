"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { SessionProvider } from "@/components/SessionProvider"
import { useSession, signIn } from "next-auth/react"
import { 
  Settings, 
  Users, 
  Music, 
  Shield, 
  MessageSquare, 
  BarChart3, 
  Bot,
  Server,
  ExternalLink,
  Plus,
  Edit,
  Trash2,
  Eye,
  Activity
} from "lucide-react"
import { useState } from "react"
import { botInfo } from "@/lib/data"
import Image from "next/image"

function DashboardContent() {
  const { data: session, status } = useSession()
  const [selectedServer, setSelectedServer] = useState<string | null>(null)

  // Real servers the bot is in (from Discord API data)
  const realServers = [
    {
      id: "1406635029307588729",
      name: "The Fifty Channel Hub",
      icon: "https://cdn.discordapp.com/icons/1406635029307588729/41da361c79718f7f3baf0d9b409600b2.png",
      memberCount: "500+", // Estimated
      isBot: true,
      permissions: "4503599627370495"
    },
    {
      id: "1407080844417568838", 
      name: "Prnx's server",
      icon: null,
      memberCount: "50+", // Estimated
      isBot: true,
      permissions: "4503599627370495"
    },
  ]

  // Real dashboard stats based on bot info
  const dashboardStats = [
    { label: "Total Servers", value: botInfo.serverCount.toString(), icon: Server, color: "purple" },
    { label: "Commands Available", value: "80+", icon: Bot, color: "blue" },
    { label: "Uptime", value: "24/7", icon: Activity, color: "green" },
    { label: "Bot Status", value: botInfo.verified ? "Verified" : "Unverified", icon: Users, color: "yellow" },
  ]

  // Mock server settings
  const serverSettings = [
    {
      title: "Music Settings",
      description: "Configure music player and queue settings",
      icon: Music,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Moderation",
      description: "Set up auto-moderation and warning systems",
      icon: Shield,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Welcome Messages",
      description: "Customize welcome and farewell messages",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Server Analytics",
      description: "View detailed server statistics and insights",
      icon: BarChart3,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Auto Roles",
      description: "Automatically assign roles to new members",
      icon: Users,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Custom Commands",
      description: "Create and manage custom server commands",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
    },
  ]

  if (status === "loading") {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen text-white">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
            >
              <Bot className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">
                Access Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Sign in with Discord to manage your servers, configure bot settings, and access advanced features.
              </p>
              <button
                onClick={() => signIn("discord")}
                className="flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-colors mx-auto"
              >
                <Bot className="w-5 h-5" />
                <span>Sign In with Discord</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

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
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={botInfo.avatar}
                alt={botInfo.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-2 border-purple-500"
              />
              <div>
                <h1 className="text-4xl font-bold">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {botInfo.name} Dashboard
                  </span>
                </h1>
                <p className="text-gray-300">Hello {session.user?.name}! Manage your Discord servers and bot settings</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {dashboardStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Server Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Your Servers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realServers.map((server) => (
                <div
                  key={server.id}
                  onClick={() => setSelectedServer(server.id)}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                    selectedServer === server.id
                      ? "border-purple-500 bg-white/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      {server.icon ? (
                        <Image
                          src={server.icon}
                          alt={server.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <Server className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{server.name}</h3>
                      <p className="text-sm text-gray-400">{server.memberCount} members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        server.isBot
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {server.isBot ? "Bot Added ✓" : "Invite Bot"}
                    </span>
                    {!server.isBot && (
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Server Settings */}
          {selectedServer && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Server Settings - {realServers.find(s => s.id === selectedServer)?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serverSettings.map((setting, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${setting.color} rounded-xl flex items-center justify-center mb-4`}>
                      <setting.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {setting.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{setting.description}</p>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={botInfo.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Plus className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Invite {botInfo.name} to Server</span>
              </a>
              <a
                href="/commands"
                className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Bot className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">View All Commands</span>
              </a>
              <a
                href="https://discord.gg/your-support-server"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span className="font-semibold">Get Support</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <DashboardContent />
  )
}
