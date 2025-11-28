import { useEffect, useMemo, useState } from 'react'

export function CommunityPulse() {
  const [count, setCount] = useState(4200)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 5) + 1)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const formattedCount = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        notation: 'standard'
      }).format(count),
    [count]
  )

  return (
    <div className="pulse-card">
      <p className="pulse-label">Live community signal</p>
      <p className="pulse-value">{formattedCount}</p>
      <p className="pulse-note">lonely wallets pinging Solana right now.</p>
    </div>
  )
}
