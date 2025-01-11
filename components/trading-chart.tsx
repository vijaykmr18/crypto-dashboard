'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    TradingView: any
  }
}

interface TradingChartProps {
  symbol: string
}

export function TradingChart({ symbol }: TradingChartProps) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          container_id: container.current.id,
          symbol: `BINANCE:${symbol}USDT`,
          interval: "D",
          timezone: "local",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          height: 400,
        })
      }
    }
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [symbol])

  return (
    <div id="tradingview_chart" ref={container} className="w-full h-[400px] bg-white rounded-lg p-4" />
  )
}

