import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-1 text-sm text-gray-400 ${className}`}
    >
      <Link 
        href="/" 
        className="flex items-center hover:text-white transition-colors"
        aria-label="Go to homepage"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="w-4 h-4 text-gray-500" />
          {item.href && !item.current ? (
            <Link 
              href={item.href} 
              className="hover:text-white transition-colors"
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={item.current ? "text-white font-medium" : ""}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Generate structured data for breadcrumbs
export function generateBreadcrumbStructuredData(items: BreadcrumbItem[], baseUrl: string = "https://cryonix-web.vercel.app") {
  const listItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": item.href ? `${baseUrl}${item.href}` : undefined
  }))

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...listItems
    ]
  }
}
