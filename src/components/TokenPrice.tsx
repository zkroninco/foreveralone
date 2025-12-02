import { useState, useEffect } from 'react'

interface TokenPriceProps {
  contractAddress: string
}

interface PriceData {
  price: number | null
  priceChange24h: number | null
  volume24h: number | null
  liquidity: number | null
  marketCap: number | null
  loading: boolean
  error: string | null
}

export function TokenPrice({ contractAddress }: TokenPriceProps) {
  const [data, setData] = useState<PriceData>({
    price: null,
    priceChange24h: null,
    volume24h: null,
    liquidity: null,
    marketCap: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    if (!contractAddress || contractAddress.includes('xxxxx')) {
      setData(prev => ({ ...prev, loading: false, error: 'Contract address not set' }))
      return
    }

    const fetchPriceData = async () => {
      try {
        // Using DexScreener API for Solana tokens
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch price data')
        }

        const result = await response.json()
        
        if (result.pairs && result.pairs.length > 0) {
          // Get the pair with highest liquidity
          const pair = result.pairs.sort((a: any, b: any) => 
            (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0)
          )[0]

          setData({
            price: pair.priceUsd ? parseFloat(pair.priceUsd) : null,
            priceChange24h: pair.priceChange?.h24 ? parseFloat(pair.priceChange.h24) : null,
            volume24h: pair.volume?.h24 ? parseFloat(pair.volume.h24) : null,
            liquidity: pair.liquidity?.usd ? parseFloat(pair.liquidity.usd) : null,
            marketCap: pair.fdv ? parseFloat(pair.fdv) : null,
            loading: false,
            error: null
          })
        } else {
          setData(prev => ({ ...prev, loading: false, error: 'No trading data available' }))
        }
      } catch (err) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to fetch data'
        }))
      }
    }

    fetchPriceData()
    // Refresh every 2 seconds
    const interval = setInterval(fetchPriceData, 2000)

    return () => clearInterval(interval)
  }, [contractAddress])

  const formatCurrency = (value: number | null) => {
    if (value === null) return 'N/A'
    if (value < 0.01) return `$${value.toFixed(6)}`
    if (value < 1) return `$${value.toFixed(4)}`
    if (value < 1000) return `$${value.toFixed(2)}`
    if (value < 1000000) return `$${(value / 1000).toFixed(2)}K`
    return `$${(value / 1000000).toFixed(2)}M`
  }

  if (data.loading) {
    return (
      <div className="token-price">
        <div className="price-loading">Loading price data...</div>
      </div>
    )
  }

  if (data.error) {
    return (
      <div className="token-price">
        <div className="price-error">
          {data.error === 'Contract address not set' 
            ? 'Set contract address to view price data'
            : 'Price data unavailable'}
        </div>
      </div>
    )
  }

  return (
    <div className="token-price">
      <div className="price-grid">
        <div className="price-item">
          <span className="price-label">Price</span>
          <span className="price-value">{formatCurrency(data.price)}</span>
          {data.priceChange24h !== null && (
            <span className={`price-change ${data.priceChange24h >= 0 ? 'positive' : 'negative'}`}>
              {data.priceChange24h >= 0 ? '↑' : '↓'} {Math.abs(data.priceChange24h).toFixed(2)}%
            </span>
          )}
        </div>
        <div className="price-item">
          <span className="price-label">24h Volume</span>
          <span className="price-value">{formatCurrency(data.volume24h)}</span>
        </div>
        <div className="price-item">
          <span className="price-label">Market Cap</span>
          <span className="price-value">{formatCurrency(data.marketCap)}</span>
        </div>
        <div className="price-item">
          <span className="price-label">Liquidity</span>
          <span className="price-value">{formatCurrency(data.liquidity)}</span>
        </div>
      </div>
    </div>
  )
}

