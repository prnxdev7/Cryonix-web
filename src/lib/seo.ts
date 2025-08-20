import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  section?: string
  author?: string
}

export function generateSEOMetadata({
  title = "Cryonix - Premium Discord Bot with 80+ Commands | Music, Moderation & More",
  description = "Cryonix is the ultimate Discord bot with 80+ commands for music, moderation, games, economy, and server management. Free, verified, and 24/7 uptime. Enhance your Discord server today!",
  keywords = [
    // Primary keywords
    "discord bot",
    "cryonix discord bot",
    "best discord bot 2025",
    "premium discord bot",
    
    // Feature-specific keywords
    "discord music bot",
    "discord moderation bot",
    "discord economy bot",
    "discord games bot",
    "discord leveling bot",
    "discord automod bot",
    "discord utility bot",
    "discord entertainment bot",
    
    // Command-related keywords
    "discord bot commands",
    "discord slash commands",
    "80+ discord commands",
    "discord bot command list",
    
    // Service keywords
    "free discord bot",
    "verified discord bot",
    "24/7 discord bot uptime",
    "reliable discord bot",
    "fast discord bot",
    
    // Management keywords
    "discord server management",
    "discord bot dashboard",
    "discord server bot",
    "discord community bot",
    "discord administration",
    
    // Competitive keywords
    "dyno bot alternative",
    "carl bot alternative",
    "mee6 alternative",
    "better than dyno",
    "multipurpose discord bot",
    
    // Location-based
    "discord bot invite",
    "add discord bot to server",
    "discord bot setup",
    "discord bot help"
  ],
  image = "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png",
  url = "https://cryonix-web.vercel.app",
  type = "website",
  noIndex = false
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Cryonix Team" }],
    creator: "Cryonix",
    publisher: "Cryonix",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    
    // Open Graph
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "Cryonix - Discord Bot",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@cryonix_bot",
      site: "@cryonix_bot",
    },
    
    // Additional metadata
    alternates: {
      canonical: url,
    },
    
    // Verification (add your actual codes)
    verification: {
      google: "your-google-site-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
      other: {
        "msvalidate.01": "your-bing-verification-code",
      },
    },
    
    // App metadata
    applicationName: "Cryonix Discord Bot",
    referrer: "origin-when-cross-origin",
    
    // Additional meta tags
    other: {
      "theme-color": "#7c3aed",
      "color-scheme": "dark light",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": "Cryonix",
      "application-name": "Cryonix",
      "mobile-web-app-capable": "yes",
      "msapplication-TileColor": "#7c3aed",
      "msapplication-config": "/browserconfig.xml",
    },
  }
}
