"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, ArrowRight, Bot } from "lucide-react"
import Link from "next/link"

export default function AuthSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to dashboard after 3 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6"
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Successfully{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Signed In!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 mb-8"
          >
            Welcome to Cryonix! You'll be redirected to your dashboard shortly.
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"
          />

          {/* Quick Actions */}
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors"
            >
              <Bot className="w-5 h-5" />
              <span>Go to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-colors border border-white/20"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
