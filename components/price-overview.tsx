'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUp, ArrowDown } from 'lucide-react'
import type { CryptoPrice } from '@/types/crypto'

interface PriceOverviewProps {
  coinId: string
}

export function PriceOverview({ coinId }: PriceOverviewProps) {
  const [price, setPrice] = useState<CryptoPrice | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch(`/api/prices/${coinId}`)
        const data = await response.json()
        setPrice(data)
      } catch (error) {
        console.error('Failed to fetch price:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000)
    return () => clearInterval(interval)
  }, [coinId])

  if (loading || !price) {
    return <div className="animate-pulse h-24 bg-gray-100 rounded-lg" />
  }

  const coinPrice = price[coinId]
  const priceChange = coinPrice.usd_24h_change
  const isPositive = priceChange > 0

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${coinPrice.usd.toLocaleString()}
          </span>
          <div className={`flex items-center px-2 py-1 rounded ${
            isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
          <span className="text-gray-500">(24H)</span>
        </div>
        <div className="text-lg text-gray-700 mt-2">
          ₹{coinPrice.inr.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  )
}

