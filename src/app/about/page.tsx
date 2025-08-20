import { Metadata } from 'next'
import { AboutClient } from '@/app/about/about-client'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Cryonix | Meet the Developer & Learn About the Bot',
  description: 'Learn about PRNX, the developer behind Cryonix Discord bot, and discover what makes this powerful bot special with 80+ commands and advanced features.',
  url: 'https://cryonix-web.vercel.app/about',
  keywords: [
    'cryonix developer',
    'discord bot creator',
    'PRNX developer',
    'about cryonix',
    'bot features',
    'discord bot development',
    'community tools',
    'server management bot'
  ]
})

export default function AboutPage() {
  return <AboutClient />
}
