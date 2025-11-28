import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegram, FaDiscord } from 'react-icons/fa'

export function TwitterIcon({ size = 24 }: { size?: number }) {
  return <FaXTwitter size={size} />
}

export function TelegramIcon({ size = 24 }: { size?: number }) {
  return <FaTelegram size={size} />
}

export function DiscordIcon({ size = 24 }: { size?: number }) {
  return <FaDiscord size={size} />
}

