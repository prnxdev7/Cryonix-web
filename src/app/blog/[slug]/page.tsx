import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, generateBlogPostMetadata, generateBlogPostStructuredData } from '@/lib/blog'
import { BlogPostClient } from '@/app/blog/[slug]/blog-post-client'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Cryonix Discord Bot',
      description: 'The requested blog post could not be found.'
    }
  }

  return generateBlogPostMetadata(post)
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostStructuredData(post))
        }}
      />
      
      <BlogPostClient post={post} />
    </>
  )
}
