'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    TradingView: any
  }
}

export function TradingViewChart() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          container_id: container.current.id,
          height: "400",
          gridLineColor: "#F0F3FA",
          timeFrames: [
            { text: "1H", resolution: "1" },
            { text: "24H", resolution: "24" },
            { text: "7D", resolution: "168" },
            { text: "1M", resolution: "720" },
            { text: "3M", resolution: "2160" },
            { text: "6M", resolution: "4320" },
            { text: "1Y", resolution: "8760" },
            { text: "ALL", resolution: "ALL" }
          ],
          range: "7D",
          details: true,
          hotlist: true,
          calendar: true,
          studies: [
            "MASimple@tv-basicstudies",
            "RSI@tv-basicstudies"
          ],
          custom_css_url: "styles.css"
        })
      }
    }
    
    document.head.appendChild(script)
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
        <div className="flex gap-4 text-sm">
          <button className="px-3 py-1 rounded hover:bg-gray-100">1H</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">24H</button>
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-600">7D</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">1M</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">3M</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">6M</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">1Y</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">ALL</button>
        </div>
      </div>
      <div id="tradingview_widget" ref={container} className="w-full h-[400px]" />
    </div>
  )
}

