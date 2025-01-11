'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Coin {
  item: {
    id: string
    name: string
    symbol: string
    thumb: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline_in_7d: {
        price: number[]
      }
    }
  }
}

interface YouMayLikeProps {
  coins: Coin[]
}

export function YouMayLike({ coins }: YouMayLikeProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">You May Also Like</h2>
      <div className="relative group">
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {coins.map((coin) => {
            const priceChange = coin.item.data.price_change_percentage_24h.usd
            const isPositive = priceChange > 0

            return (
              <Card key={coin.item.id} className="min-w-[300px] flex-shrink-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                    <span className={`ml-2 text-sm ${
                      isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-lg font-bold">
                    ${coin.item.data.price}
                  </div>
                  <div className="mt-2 h-[60px]">
                    {coin.item.data.sparkline_in_7d && (
                      <Image
                        src={`data:image/svg+xml,${encodeURIComponent(
                          createSparkline(coin.item.data.sparkline_in_7d.price)
                        )}`}
                        alt="Price chart"
                        width={280}
                        height={60}
                        className="w-full"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function createSparkline(prices: number[]): string {
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  const range = max - min
  const height = 60
  const width = 280
  const points = prices.map((price, i) => 
    `${(i / (prices.length - 1)) * width},${height - ((price - min) / range) * height}`
  ).join(' ')

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M ${points}"
        fill="none"
        stroke="${prices[0] < prices[prices.length - 1] ? '#22c55e' : '#ef4444'}"
        stroke-width="2"
      />
    </svg>
  `
}

