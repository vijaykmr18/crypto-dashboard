'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface BitcoinPrice {
  bitcoin: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export function PriceDisplay() {
  const [price, setPrice] = useState<BitcoinPrice | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/api/bitcoin-price')
        const data = await response.json()
        setPrice(data)
      } catch (err) {
        setError('Failed to fetch price data')
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  if (error) return <div className="text-red-500">{error}</div>
  if (!price) return <div className="animate-pulse">Loading price data...</div>

  const priceChange = price.bitcoin.usd_24h_change
  const isPositive = priceChange > 0

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">${price.bitcoin.usd.toLocaleString()}</div>
          <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span className="ml-1">{Math.abs(priceChange).toFixed(2)}%</span>
          </div>
        </div>
        <div className="text-gray-500 mt-2">
          ₹{price.bitcoin.inr.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  )
}

