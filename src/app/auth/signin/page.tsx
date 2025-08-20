"use client"

import { motion } from "framer-motion"
import { signIn, getSession } from "next-auth/react"
import { Bot, Shield, Zap, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SignInPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const errorParam = searchParams.get("error")

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession()
      if (session) {
        router.push(callbackUrl)
      }
    }
    checkSession()
  }, [router, callbackUrl])

  useEffect(() => {
    if (errorParam) {
      switch (errorParam) {
        case "OAuthSignin":
          setError("Error occurred during Discord authentication. Please try again.")
          break
        case "OAuthCallback":
          setError("Error in OAuth callback. Please check your Discord app configuration.")
          break
        case "OAuthCreateAccount":
          setError("Could not create account. Please try again.")
          break
        case "EmailCreateAccount":
          setError("Could not create account with that email address.")
          break
        case "Callback":
          setError("Error in callback. Please try again.")
          break
        case "OAuthAccountNotLinked":
          setError("Account already exists with different provider.")
          break
        case "EmailSignin":
          setError("Check your email for sign in link.")
          break
        case "CredentialsSignin":
          setError("Invalid credentials.")
          break
        case "SessionRequired":
          setError("Please sign in to access this page.")
          break
        default:
          setError("An unexpected error occurred. Please try again.")
      }
    }
  }, [errorParam])

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const result = await signIn("discord", { 
        callbackUrl,
        redirect: false 
      })
      
      if (result?.error) {
        setError("Failed to sign in with Discord. Please try again.")
      } else if (result?.url) {
        window.location.href = result.url
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-4"
            >
              <Bot className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cryonix
              </span>
            </h1>
            <p className="text-gray-300">Sign in with Discord to access your dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center space-x-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-300">Secure Discord OAuth2 authentication</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Bot className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-300">Manage all your Discord servers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-300">Advanced bot configuration</span>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 disabled:transform-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Connecting to Discord...</span>
              </>
            ) : (
              <>
                <Bot className="w-5 h-5" />
                <span>Continue with Discord</span>
                <ExternalLink className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  )
}
