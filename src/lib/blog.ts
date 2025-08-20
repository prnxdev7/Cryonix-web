import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readingTime: number
  image?: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Set Up Cryonix Discord Bot in Your Server: Complete Guide 2025',
    description: 'Learn how to invite and configure Cryonix Discord bot with all 80+ commands. Step-by-step tutorial for server owners and administrators.',
    content: `
    Setting up Cryonix in your Discord server is quick and easy. Follow this comprehensive guide to get started with the ultimate Discord bot experience.
    
    ## Step 1: Invite Cryonix to Your Server
    1. Click the invite link on our homepage
    2. Select your Discord server
    3. Grant necessary permissions
    4. Confirm the invitation
    
    ## Step 2: Configure Basic Settings
    - Use \`/setup\` to configure basic bot settings
    - Set up moderation channels with \`/config moderation\`
    - Configure music settings with \`/config music\`
    
    ## Step 3: Explore Commands
    With 80+ commands available, Cryonix offers:
    - Music commands for 24/7 entertainment
    - Moderation tools for server management
    - Fun games and activities
    - Economy system with virtual currency
    - Utility commands for productivity
    
    Start with \`/help\` to see all available commands and their descriptions.
    `,
    author: 'Cryonix Team',
    publishedAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-20T15:30:00Z',
    tags: ['setup', 'tutorial', 'discord bot', 'guide'],
    readingTime: 5,
    image: '/blog/setup-guide.jpg',
    slug: 'how-to-setup-cryonix-discord-bot-complete-guide'
  },
  {
    id: '2',
    title: 'Top 10 Discord Bot Commands Every Server Owner Should Know',
    description: 'Discover the most essential Discord bot commands that will transform your server management and enhance community engagement.',
    content: `
    Managing a Discord server can be challenging, but with the right bot commands, you can streamline operations and boost engagement. Here are the top 10 commands every server owner should master.
    
    ## 1. Moderation Commands
    - \`/ban\` - Ban troublesome users
    - \`/kick\` - Remove users temporarily
    - \`/mute\` - Silence users for a period
    
    ## 2. Music Commands
    - \`/play\` - Start playing music
    - \`/queue\` - View the music queue
    - \`/skip\` - Skip to next song
    
    ## 3. Server Management
    - \`/role\` - Manage user roles
    - \`/channel\` - Create and manage channels
    - \`/config\` - Configure bot settings
    
    ## 4. Fun & Engagement
    - \`/games\` - Start interactive games
    - \`/poll\` - Create community polls
    - \`/giveaway\` - Host exciting giveaways
    
    These commands form the foundation of effective Discord server management with Cryonix.
    `,
    author: 'Discord Expert',
    publishedAt: '2025-01-10T14:00:00Z',
    tags: ['commands', 'server management', 'tips', 'discord'],
    readingTime: 7,
    image: '/blog/top-commands.jpg',
    slug: 'top-10-discord-bot-commands-server-owners'
  },
  {
    id: '3',
    title: 'Discord Server Moderation Best Practices with Cryonix Bot',
    description: 'Master Discord server moderation with Cryonix automated tools. Learn advanced techniques for maintaining a healthy community.',
    content: `
    Effective moderation is crucial for maintaining a healthy Discord community. Cryonix provides advanced moderation tools that automate common tasks while giving you full control.
    
    ## Automated Moderation Features
    - Auto-delete inappropriate content
    - Spam detection and prevention
    - Raid protection mechanisms
    - Automated warning systems
    
    ## Setting Up Moderation Rules
    1. Configure automod with \`/automod setup\`
    2. Set punishment escalation with \`/moderation rules\`
    3. Create custom filters for your community
    4. Set up logging channels for transparency
    
    ## Advanced Moderation Techniques
    - Use role-based permissions
    - Implement time-based restrictions
    - Create appeal processes
    - Monitor server analytics
    
    With Cryonix's comprehensive moderation suite, you can focus on building your community while automated systems handle routine tasks.
    `,
    author: 'Community Manager',
    publishedAt: '2025-01-05T09:00:00Z',
    tags: ['moderation', 'automation', 'community', 'safety'],
    readingTime: 8,
    image: '/blog/moderation-guide.jpg',
    slug: 'discord-server-moderation-best-practices-cryonix'
  }
]

// Generate metadata for blog posts
export function generateBlogPostMetadata(post: BlogPost): Metadata {
  return generateSEOMetadata({
    title: `${post.title} | Cryonix Discord Bot Blog`,
    description: post.description,
    url: `https://cryonix-web.vercel.app/blog/${post.slug}`,
    image: post.image || '/og-image.png',
    keywords: [
      ...post.tags,
      'discord bot',
      'cryonix',
      'tutorial',
      'guide',
      'discord server',
      'bot commands'
    ],
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    section: 'Discord Bot Guides'
  })
}

// Generate structured data for blog posts
export function generateBlogPostStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image ? `https://cryonix-web.vercel.app${post.image}` : 'https://cryonix-web.vercel.app/og-image.png',
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cryonix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cryonix-web.vercel.app/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime}M`,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "articleSection": "Discord Bot Guides",
    "about": [
      {
        "@type": "Thing",
        "name": "Discord Bot"
      },
      {
        "@type": "Thing", 
        "name": "Server Management"
      }
    ]
  }
}
