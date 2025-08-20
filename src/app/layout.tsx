import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/SessionProvider";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@/components/Analytics";
import { generateSEOMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Cryonix - Premium Discord Bot with 80+ Commands | Music, Moderation & More",
  description: "Cryonix is the ultimate Discord bot with 80+ commands for music, moderation, games, economy, and server management. Free, verified, and 24/7 uptime. Enhance your Discord server today!",
  url: "https://cryonix-web.vercel.app",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.discordapp.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and PWA */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="color-scheme" content="dark light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Cryonix" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//discord.com" />
        <link rel="dns-prefetch" href="//cdn.discordapp.com" />
        
        {/* Structured Data */}
        <StructuredData />
        
        {/* Analytics */}
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 min-h-screen`}
      >
        <SessionProvider>
          <div className="relative">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
