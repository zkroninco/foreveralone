interface IconProps {
  size?: number
}

const baseStyle = {
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'contain'
} as const

export function JupiterIcon({ size = 56 }: IconProps) {
  return (
    <img
      src="/logos/jupiter.svg"
      alt="Jupiter DEX logo"
      width={size}
      height={size}
      style={baseStyle}
    />
  )
}

export function RaydiumIcon({ size = 56 }: IconProps) {
  return (
    <img
      src="/logos/raydium.svg"
      alt="Raydium DEX logo"
      width={size}
      height={size}
      style={baseStyle}
    />
  )
}
