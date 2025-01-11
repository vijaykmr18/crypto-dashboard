import { Suspense } from 'react'
import { getCoinInfo, getTrendingCoins } from '@/lib/api'
import { PriceOverview } from '@/components/price-overview'
import { TradingChart } from '@/components/trading-chart'
import { TrendingCoins } from '@/components/trending-coins'
import { Performance } from '@/components/performance'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Tokenomics } from '@/components/tokenomics'

interface PageProps {
  params: {
    coinId: string
  }
}

export default async function CoinPage({ params }: PageProps) {
  const coinId = params.coinId || 'bitcoin'
  const [coinInfo, trendingData] = await Promise.all([
    getCoinInfo(coinId),
    getTrendingCoins()
  ])

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PriceOverview coinId={coinId} />
            <TradingChart symbol={coinInfo.symbol.toUpperCase()} />
            <Performance 
              low24h={coinInfo.market_data.low_24h.usd}
              high24h={coinInfo.market_data.high_24h.usd}
              currentPrice={coinInfo.market_data.current_price.usd}
            />
            <About name={coinInfo.name} description={coinInfo.description.en} />
            <Tokenomics />
            <Team members={teamMembers} />
          </div>
          
          <div className="space-y-6">
            <Suspense fallback={<div className="animate-pulse h-[300px] bg-gray-100 rounded-lg" />}>
              <TrendingCoins />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}

export function generateMetadata({ params }: PageProps) {
  const coinId = params.coinId || 'bitcoin'
  return {
    title: `${coinId.charAt(0).toUpperCase() + coinId.slice(1)} Price | KoinX`,
  }
}

