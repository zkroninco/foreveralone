import { useState, useEffect, useMemo } from 'react'

interface CountdownProps {
  targetDate: string // ISO date string
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false })
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const formattedTargetDate = useMemo(() => {
    const parsed = new Date(targetDate)
    if (Number.isNaN(parsed.getTime())) {
      return null
    }

    try {
      const locale = navigator.language ?? 'en-US'
      const formatter = new Intl.DateTimeFormat(locale, {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
      return formatter.format(parsed)
    } catch {
      return parsed.toLocaleString()
    }
  }, [targetDate])

  if (timeLeft.isExpired) {
    return (
      <div className="countdown expired">
        <h3>🚀 Launch Complete!</h3>
        <p>The token is now live. Trade the loneliness.</p>
      </div>
    )
  }

  return (
    <div className="countdown" title={formattedTargetDate ? `Launch target: ${formattedTargetDate}` : undefined}>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      {formattedTargetDate && (
        <p className="countdown-info">
          Launch target: <time dateTime={targetDate}>{formattedTargetDate}</time>
        </p>
      )}
    </div>
  )
}
