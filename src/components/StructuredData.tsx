export function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cryonix",
    "description": "Premium Discord bot with 80+ commands for music, moderation, games, and server management",
    "url": "https://cryonix-web.vercel.app",
    "logo": "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png",
    "image": "https://cdn.discordapp.com/avatars/1406638054860521472/ae9e06b9e8cabef73718c003c1e0df0d.png",
    "sameAs": [
      "https://discord.gg/cryonix",
      "https://github.com/prnxdev7/Cryonix-web"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cryonix Discord Bot",
    "description": "Ultimate Discord bot with 80+ commands including music, moderation, games, economy, and server management features",
    "url": "https://cryonix-web.vercel.app",
    "downloadUrl": "https://discord.com/oauth2/authorize?client_id=1406638054860521472&permissions=8&scope=bot%20applications.commands",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": "Discord",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Music streaming from YouTube, Spotify, SoundCloud",
      "Advanced moderation with auto-mod features",
      "Fun games and economy system",
      "Server management and analytics",
      "Custom commands and auto-roles",
      "24/7 uptime and verified status",
      "80+ commands across 8 categories",
      "Web dashboard for easy configuration"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cryonix - Discord Bot Dashboard",
    "description": "Official website and dashboard for Cryonix Discord bot",
    "url": "https://cryonix-web.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cryonix-web.vercel.app/commands?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cryonix-web.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Commands",
        "item": "https://cryonix-web.vercel.app/commands"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dashboard",
        "item": "https://cryonix-web.vercel.app/dashboard"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "FAQ",
        "item": "https://cryonix-web.vercel.app/faq"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I invite Cryonix to my server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click the 'Invite Bot' button on our homepage or use the direct invite link. Make sure you have 'Manage Server' permissions on your Discord server."
        }
      },
      {
        "@type": "Question",
        "name": "What permissions does Cryonix need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cryonix needs basic permissions like Send Messages, Read Message History, Connect/Speak for voice channels (for music), Manage Messages (for moderation), and Manage Roles (for auto-roles)."
        }
      },
      {
        "@type": "Question",
        "name": "How many commands does Cryonix have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cryonix has 80+ commands covering music, moderation, fun games, economy, server management, leveling, and utility features."
        }
      },
      {
        "@type": "Question",
        "name": "Is Cryonix free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cryonix is completely free with all 80+ commands available. The bot offers 24/7 uptime and reliable service at no cost."
        }
      }
    ]
  }

  return {
    organizationSchema,
    softwareApplicationSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema
  }
}

export function StructuredData() {
  const schemas = generateStructuredData()
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.breadcrumbSchema)
        }}
      />
    </>
  )
}
