'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

interface TrendingCoin {
  item: {
    id: string
    name: string
    symbol: string
    thumb: string
    data: {
      price_change_percentage_24h: {
        usd: number
      }
    }
  }
}

export function TrendingCoins() {
  const [trending, setTrending] = useState<TrendingCoin[]>([])

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
        const data = await response.json()
        setTrending(data.coins)
      } catch (error) {
        console.error('Failed to fetch trending coins:', error)
      }
    }

    fetchTrending()
  }, [])

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trending.slice(0, 3).map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={coin.item.thumb}
                alt={coin.item.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{coin.item.name} ({coin.item.symbol.toUpperCase()})</span>
            </div>
            <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded">
              <ArrowUp className="w-4 h-4" />
              <span className="ml-1">{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

