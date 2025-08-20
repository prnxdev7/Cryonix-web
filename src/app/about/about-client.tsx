"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { User, Bot, Code, Heart, ExternalLink, Github, Globe, Mail, Calendar, Users, Star, Zap } from "lucide-react"
import Image from "next/image"

export function AboutClient() {
  const developerStats = [
    { label: "Years of Experience", value: "5+", icon: Calendar },
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Happy Clients", value: "100+", icon: Users },
    { label: "GitHub Stars", value: "200+", icon: Star },
  ]

  const botStats = [
    { label: "Total Commands", value: "80+", icon: Zap },
    { label: "Servers", value: "1,000+", icon: Users },
    { label: "Active Users", value: "10,000+", icon: Heart },
    { label: "Uptime", value: "99.9%", icon: Bot },
  ]

  const technologies = [
    "Node.js", "TypeScript", "Discord.js", "React", "Next.js", 
    "Python", "MongoDB", "PostgreSQL", "Docker", "AWS"
  ]

  const features = [
    {
      title: "Advanced Moderation",
      description: "Comprehensive moderation tools with auto-moderation, warning systems, and customizable punishment escalation.",
      icon: "🛡️"
    },
    {
      title: "High-Quality Music",
      description: "Multi-platform music streaming with queue management, playlists, and democratic controls.",
      icon: "🎵"
    },
    {
      title: "Server Management",
      description: "Complete server management suite with role management, channel controls, and configuration options.",
      icon: "⚙️"
    },
    {
      title: "Economy System",
      description: "Engaging economy system with currency, shops, gambling, and reward mechanisms.",
      icon: "💰"
    },
    {
      title: "Entertainment",
      description: "Games, trivia, polls, giveaways, and interactive features to keep your community engaged.",
      icon: "🎮"
    },
    {
      title: "Customization",
      description: "Highly customizable with per-server settings, custom commands, and flexible configuration.",
      icon: "🔧"
    }
  ]

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cryonix
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about the developer behind Cryonix and discover what makes this Discord bot special.
            </p>
          </motion.div>

          {/* Developer Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Meet the Developer</h2>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">PRNX</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Passionate full-stack developer and Discord bot specialist with over 5 years of experience 
                    creating innovative solutions for online communities. Dedicated to building tools that bring 
                    people together and enhance digital experiences.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {developerStats.map((stat, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-4 text-center">
                        <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://prnxve.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Portfolio</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/prnxdev7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="mailto:contact@prnxve.me"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
                      <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                        <User className="w-32 h-32 text-purple-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                      Full-Stack Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-purple-500/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Bot Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">About Cryonix Bot</h2>
                </div>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Cryonix is a powerful, feature-rich Discord bot designed to enhance your server experience. 
                  Built with modern technologies and a focus on reliability, it provides everything you need 
                  to manage and entertain your Discord community.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {botStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-6 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide Discord communities with powerful, reliable, and easy-to-use tools that enhance 
                  social interaction, streamline server management, and create engaging experiences for all members.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the go-to Discord bot for communities worldwide, continuously innovating and evolving 
                  to meet the changing needs of online communities while maintaining the highest standards of quality and reliability.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of Discord servers already using Cryonix to create amazing community experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/invite"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Invite Cryonix
              </a>
              <a
                href="/commands"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors border border-white/20"
              >
                View Commands
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
