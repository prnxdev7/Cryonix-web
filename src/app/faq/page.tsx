import { Metadata } from 'next'
import { FAQClient } from '@/app/faq/faq-client'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Frequently Asked Questions | Cryonix Discord Bot',
  description: 'Find answers to common questions about Cryonix Discord bot setup, features, commands, and troubleshooting. Get help with bot configuration and usage.',
  url: 'https://cryonix-web.vercel.app/faq',
  keywords: [
    'discord bot FAQ',
    'cryonix help',
    'bot setup questions',
    'discord bot support',
    'troubleshooting guide',
    'bot configuration help',
    'discord server management',
    'bot permissions'
  ]
})

export default function FAQPage() {
  return <FAQClient />
}
