import { render, screen, waitFor, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { TokenPrice } from './TokenPrice'

// Mock the global fetch function
const MOCK_FETCH_SUCCESS_DATA = {
  pairs: [
    {
      priceUsd: '0.001234',
      priceChange: { h24: -5.5 },
      volume: { h24: 123456.78 },
      liquidity: { usd: 987654.32 },
      fdv: 123456789.0
    },
    {
      priceUsd: '0.001200',
      priceChange: { h24: -6.0 },
      volume: { h24: 100000.00 },
      liquidity: { usd: 500000.00 }, // Less liquidity, so the first pair should be picked
      fdv: 120000000.0
    }
  ]
}

const MOCK_FETCH_NO_PAIRS_DATA = {
  pairs: []
}

const MOCK_FETCH_FAILURE_DATA = {
  message: 'Failed to fetch price data'
}

describe('TokenPrice', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.useFakeTimers()
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('displays loading state initially', () => {
    render(<TokenPrice contractAddress="mockContractAddress" />)
    expect(screen.getByText('Loading price data...')).toBeInTheDocument()
  })

  it('displays error when contract address is not set', async () => {
    render(<TokenPrice contractAddress="ALONExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />)
    await waitFor(() => {
      expect(screen.getByText('Set contract address to view price data')).toBeInTheDocument()
    })
  })

  it('displays price data after successful fetch', async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_FETCH_SUCCESS_DATA)
    })

    render(<TokenPrice contractAddress="validContractAddress" />)

    await waitFor(() => {
      expect(screen.getByText('$0.001234')).toBeInTheDocument()
      expect(screen.getByText('↓ 5.50%')).toBeInTheDocument()
      expect(screen.getByText('$123.46K')).toBeInTheDocument() // Formatted volume
      expect(screen.getByText('$123.46M')).toBeInTheDocument() // Formatted market cap
      expect(screen.getByText('$987.65K')).toBeInTheDocument() // Formatted liquidity
    })
    expect(screen.queryByText('Loading price data...')).not.toBeInTheDocument()
  })

  it('displays "no trading data available" when fetch returns no pairs', async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_FETCH_NO_PAIRS_DATA)
    })

    render(<TokenPrice contractAddress="validContractAddress" />)

    await waitFor(() => {
      expect(screen.getByText('No trading data available')).toBeInTheDocument()
    })
  })

  it('displays error message on failed fetch', async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error'
    })

    render(<TokenPrice contractAddress="validContractAddress" />)

    await waitFor(() => {
      expect(screen.getByText('Price data unavailable')).toBeInTheDocument()
    })
  })

  it('refetches data after 2 seconds', async () => {
    (global.fetch as vi.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(MOCK_FETCH_SUCCESS_DATA)
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          pairs: [{
            priceUsd: '0.001300', // New price
            priceChange: { h24: 0.1 },
            volume: { h24: 200000.00 },
            liquidity: { usd: 1000000.00 },
            fdv: 130000000.0
          }]
        })
      })

    render(<TokenPrice contractAddress="validContractAddress" />)

    // Initial fetch
    await waitFor(() => {
      expect(screen.getByText('$0.001234')).toBeInTheDocument()
    })

    // Advance timers by 2 seconds
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    // Expect refetched data
    await waitFor(() => {
      expect(screen.getByText('$0.001300')).toBeInTheDocument()
    })
    expect(global.fetch).toHaveBeenCalledTimes(2)
  })

  it('clears interval on unmount', async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_FETCH_SUCCESS_DATA)
    })

    const { unmount } = render(<TokenPrice contractAddress="validContractAddress" />)

    await waitFor(() => {
      expect(screen.getByText('$0.001234')).toBeInTheDocument()
    })

    unmount()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Expect fetch not to be called again after unmount
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })
})
