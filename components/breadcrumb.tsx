import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  name: string
}

export function Breadcrumb({ name }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-gray-900">Cryptocurrencies</Link>
      <ChevronRight className="w-4 h-4" />
      <span className="font-medium text-gray-900">{name}</span>
    </div>
  )
}

