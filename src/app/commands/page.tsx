import { Metadata } from 'next'
import { CommandsClient } from '@/app/commands/commands-client'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Discord Bot Commands | Cryonix - Complete Command Reference',
  description: 'Explore all 80+ Discord bot commands available with Cryonix. Find music, moderation, utility, and entertainment commands with detailed usage examples.',
  url: 'https://cryonix-web.vercel.app/commands',
  keywords: [
    'discord bot commands',
    'cryonix commands',
    'bot command list',
    'discord moderation commands',
    'music bot commands',
    'utility commands',
    'server management commands',
    'discord automation'
  ]
})

export default function CommandsPage() {
  return <CommandsClient />
}
