"use client"

import { motion } from "framer-motion"
import { Bot, Loader2 } from "lucide-react"

interface LoadingProps {
  message?: string
  fullScreen?: boolean
}

export function Loading({ message = "Loading...", fullScreen = false }: LoadingProps) {
  const containerClass = fullScreen 
    ? "fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 z-50"
    : "flex items-center justify-center py-12"

  return (
    <div className={containerClass}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-4"
        >
          <Bot className="w-12 h-12 text-white" />
        </motion.div>
        
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
          <span className="text-white font-medium">{message}</span>
        </div>
        
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function PageLoading() {
  return <Loading message="Loading page..." fullScreen />
}

export function AuthLoading() {
  return <Loading message="Authenticating with Discord..." fullScreen />
}
