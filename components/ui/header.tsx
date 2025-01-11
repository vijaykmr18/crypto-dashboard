'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/placeholder.svg" alt="KoinX" className="h-6" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/crypto-taxes" className="text-sm font-medium">
              Crypto Taxes
            </Link>
            <Link href="/free-tools" className="text-sm font-medium">
              Free Tools
            </Link>
            <Link href="/resource-center" className="text-sm font-medium">
              Resource Center
            </Link>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
              <nav className="flex flex-col p-4">
                <Link
                  href="/crypto-taxes"
                  className="px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Crypto Taxes
                </Link>
                <Link
                  href="/free-tools"
                  className="px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Tools
                </Link>
                <Link
                  href="/resource-center"
                  className="px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resource Center
                </Link>
                <div className="px-4 py-2">
                  <Button className="w-full">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

