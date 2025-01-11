import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="KoinX" width={100} height={32} />
        </Link>
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
      </div>
    </header>
  )
}

