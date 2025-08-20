"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { User, Code, ExternalLink, Github, Globe, Mail } from "lucide-react"

export function AboutClient() {
  const technologies = [
    "Node.js", "TypeScript", "Discord.js", "React", "Next.js", 
    "Python", "MongoDB", "PostgreSQL", "Docker", "AWS"
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
              About the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the developer behind Cryonix and learn about the passion for creating amazing Discord experiences.
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
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Meet the Developer</h2>
                </div>
                
                <h3 className="text-3xl font-semibold mb-6 text-purple-300">PRNX</h3>
                <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto text-lg">
                  Passionate full-stack developer and Discord bot specialist dedicated to creating innovative 
                  solutions for online communities. With expertise in modern web technologies and a deep 
                  understanding of Discord's ecosystem, I build tools that bring people together and enhance 
                  digital experiences.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <a
                    href="https://prnxve.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Portfolio</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/prnxdev7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:contact@prnxve.me"
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Development Philosophy</h2>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg max-w-4xl mx-auto">
                I believe in creating software that not only functions flawlessly but also brings joy and value 
                to its users. Every line of code is written with the community in mind, focusing on reliability, 
                performance, and user experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto">
                Cryonix represents my commitment to excellence in Discord bot development, combining powerful 
                features with intuitive design to help server owners build thriving communities.
              </p>
            </div>
          </motion.section>

          {/* Contact Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Have questions about Cryonix or interested in collaborating on a project? I'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/your-support-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Join Support Server
                </a>
                <a
                  href="mailto:contact@prnxve.me"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors border border-white/20"
                >
                  Send Email
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
