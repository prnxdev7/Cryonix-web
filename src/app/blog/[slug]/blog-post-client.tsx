"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { BlogPost } from "@/lib/blog"
import { CalendarDays, Clock, User, Tag, ArrowLeft, Share2, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface BlogPostClientProps {
  post: BlogPost
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `https://cryonix-web.vercel.app/blog/${post.slug}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: shareUrl,
        })
      } catch (err) {
        console.error('Error sharing: ', err)
      }
    } else {
      handleCopyLink()
    }
  }

  // Format the content with proper line breaks and sections
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim().startsWith('##')) {
        // Heading
        const headingText = paragraph.replace(/^##\s*/, '')
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
            {headingText}
          </h2>
        )
      } else if (paragraph.trim().startsWith('-')) {
        // List items
        const listItems = paragraph.split('\n').filter(line => line.trim().startsWith('-'))
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">
                {item.replace(/^-\s*/, '')}
              </li>
            ))}
          </ul>
        )
      } else if (paragraph.trim().startsWith('`')) {
        // Code block
        const codeText = paragraph.replace(/`/g, '')
        return (
          <div key={index} className="bg-black/40 rounded-lg p-4 mb-6 border border-white/10">
            <code className="text-green-400 font-mono text-sm">{codeText}</code>
          </div>
        )
      } else if (paragraph.trim()) {
        // Regular paragraph
        return (
          <p key={index} className="text-gray-300 leading-relaxed mb-6">
            {paragraph.trim()}
          </p>
        )
      }
      return null
    })
  }

  return (
    <main className="min-h-screen text-white relative">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, current: true }
            ]}
            className="mb-8"
          />

          {/* Back to Blog */}
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
              <div className="text-8xl">
                {post.tags.includes('setup') ? '⚙️' : 
                 post.tags.includes('commands') ? '🎮' : 
                 post.tags.includes('moderation') ? '🛡️' : '📖'}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
                >
                  <Tag className="w-3 h-3" />
                  <span className="capitalize">{tag}</span>
                </span>
              ))}
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {formatContent(post.content)}
            </div>
          </motion.article>

          {/* Related Articles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8">More Discord Bot Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* You can add related posts logic here */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">📚 All Guides</h3>
                <p className="text-gray-300 mb-4">
                  Explore our complete collection of Discord bot tutorials and guides.
                </p>
                <Link
                  href="/blog"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  View All Guides →
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">🎮 Bot Commands</h3>
                <p className="text-gray-300 mb-4">
                  Check out all 80+ Cryonix bot commands and their usage.
                </p>
                <Link
                  href="/commands"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Browse Commands →
                </Link>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Try Cryonix?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Add Cryonix to your Discord server and start using these features today!
              </p>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span>Invite Cryonix Bot</span>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
