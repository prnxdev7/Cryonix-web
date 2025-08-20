import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryonix Bot - Discord Bot Dashboard",
  description: "Powerful Discord bot with music, moderation, and server management features. Invite Cryonix to enhance your Discord server experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
