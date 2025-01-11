'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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

export function PriceInfo() {
  const [price, setPrice] = useState<BitcoinPrice | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        )
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
  }, [])

  if (loading) {
    return <div className="animate-pulse h-20 bg-gray-100 rounded-lg" />
  }

  if (!price) {
    return null
  }

  const priceChange = price.bitcoin.usd_24h_change
  const isPositive = priceChange > 0

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/placeholder.svg"
            alt="Bitcoin"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Bitcoin</h1>
          <span className="text-gray-500">BTC</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${price.bitcoin.usd.toLocaleString()}
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
        <div className="text-lg text-gray-700 mt-1">
          ₹{price.bitcoin.inr.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  )
}

