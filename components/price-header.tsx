'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface BitcoinPrice {
  bitcoin: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export function PriceHeader() {
  const [price, setPrice] = useState<BitcoinPrice | null>(null)

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
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000)
    return () => clearInterval(interval)
  }, [])

  if (!price) return null

  const priceChange = price.bitcoin.usd_24h_change
  const isPositive = priceChange > 0

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl font-semibold">Bitcoin</h1>
        <span className="text-gray-600">BTC</span>
        <span className="px-2 py-1 bg-gray-600 text-white text-sm rounded">Rank #1</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">${price.bitcoin.usd.toLocaleString()}</span>
        <div className={`flex items-center px-2 py-1 rounded ${
          isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span className="ml-1 font-medium">{Math.abs(priceChange).toFixed(2)}%</span>
        </div>
        <span className="text-gray-500">(24H)</span>
      </div>
      <div className="text-gray-600 mt-1">
        ₹{price.bitcoin.inr.toLocaleString()}
      </div>
    </div>
  )
}

