import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function Analytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your actual Google Analytics ID
  
  return (
    <>
      {/* Vercel Analytics - Automatic tracking */}
      <VercelAnalytics />
      
      {/* Vercel Speed Insights - Performance monitoring */}
      <SpeedInsights />

      {/* Google Analytics (Optional - for additional tracking) */}
      {GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}

// Track custom events
export function trackEvent(eventName: string, parameters: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track page views
export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title: title,
      page_location: url,
    })
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
