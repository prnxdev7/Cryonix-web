import { Metadata } from 'next'
import { AboutClient } from '@/app/about/about-client'
import { generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'About the Developer | PRNX - Creator of Cryonix Discord Bot',
  description: 'Meet PRNX, the passionate full-stack developer behind Cryonix Discord bot. Discover the expertise and dedication that drives innovative Discord community solutions.',
  url: 'https://cryonix-web.vercel.app/about',
  keywords: [
    'PRNX developer',
    'cryonix creator',
    'discord bot developer',
    'full-stack developer',
    'discord bot specialist',
    'community tools developer',
    'javascript developer',
    'typescript developer'
  ]
})

export default function AboutPage() {
  return <AboutClient />
}
