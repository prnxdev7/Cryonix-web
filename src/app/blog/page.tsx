import { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, Clock, Tag, ArrowRight } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { blogPosts } from '@/lib/blog'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Discord Bot Guides & Tutorials | Cryonix Blog',
  description: 'Learn how to maximize your Discord server with Cryonix bot guides, tutorials, and best practices. Expert tips for server management, moderation, and community building.',
  url: 'https://cryonix-web.vercel.app/blog',
  keywords: [
    'discord bot guides',
    'discord server tutorials',
    'cryonix bot tips',
    'discord moderation guide',
    'server management tips',
    'discord bot commands tutorial',
    'community building discord',
    'discord best practices'
  ]
})

export default function BlogPage() {
  return (
    <main className="min-h-screen text-white relative">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: 'Blog', current: true }
            ]}
            className="mb-8"
          />
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discord Bot{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Guides & Tips
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master Discord server management with expert guides, tutorials, and best practices for Cryonix bot.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Guide</h2>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readingTime} min read</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-gray-300 mb-6">{blogPosts[0].description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blogPosts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full text-sm"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl">📚</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-4xl">
                    {post.tags.includes('setup') ? '⚙️' : 
                     post.tags.includes('commands') ? '🎮' : 
                     post.tags.includes('moderation') ? '🛡️' : '📖'}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of Discord servers using Cryonix for better community management.
              </p>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span>Invite Cryonix Bot</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Cryonix Discord Bot Blog",
            "description": "Expert guides and tutorials for Discord server management with Cryonix bot",
            "url": "https://cryonix-web.vercel.app/blog",
            "author": {
              "@type": "Organization",
              "name": "Cryonix Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cryonix",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png"
              }
            },
            "inLanguage": "en-US",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "url": `https://cryonix-web.vercel.app/blog/${post.slug}`,
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt || post.publishedAt,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        }}
      />
    </main>
  )
}
