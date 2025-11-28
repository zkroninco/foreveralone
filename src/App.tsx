import { useMemo } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import heroImageFace from '../forever-aloneface.jpg'
import { Countdown } from './components/Countdown'
import { TokenPrice } from './components/TokenPrice'
import { JupiterIcon, RaydiumIcon } from './components/DexIcons'
import { TwitterIcon, TelegramIcon, DiscordIcon } from './components/SocialIcons'
import { CommunityPulse } from './components/CommunityPulse'
import { SocialWall } from './components/SocialWall'
import './App.css'
import './mobile.css'

const tokenInfo = {
  symbol: 'ALONE',
  name: 'Forever Alone',
  contract: 'ALONExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder - replace with actual contract
  supply: '1,000,000,000',
  chain: 'Solana',
  launchDate: '2024-12-31T00:00:00Z' // Update with your actual launch date/time (ISO format)
}

const highlightCards = [
  {
    title: 'OG Meme Energy',
    stat: '2009',
    badge: 'Rage Comic Era',
    copy: 'Born on image boards, Forever Alone became the anthem for every inside joke about being the last invite. Now it lives on-chain.'
  },
  {
    title: 'Community Driven',
    stat: '100%',
    badge: 'Fair Launch',
    copy: 'No presale, no team allocation. Just pure meme energy powered by the loneliest community on Solana.'
  },
  {
    title: 'Forever Alone',
    stat: '∞',
    badge: 'No Utility',
    copy: 'This is a memecoin. There is no roadmap. There is no utility. Just vibes and the eternal struggle of being alone.'
  }
]

const signalMoments = [
  {
    title: 'Token Launch',
    detail: 'Fair launch on Solana. No presale, no insider allocations. Just pure meme distribution.',
    time: 'Live'
  },
  {
    title: 'DEX Listings',
    detail: 'Available on Jupiter, Raydium, and all major Solana DEXs. Trade the loneliness.',
    time: 'Now'
  },
  {
    title: 'Community Growth',
    detail: 'Building the loneliest community on Solana. Join the Forever Alone army.',
    time: 'Ongoing'
  }
]

const socialLinks = [
  { label: 'Creator', handle: '@berandito', href: 'https://x.com/berandito', icon: TwitterIcon },
  { label: 'X / Twitter', handle: '@ForeverAloneSOL', href: 'https://x.com', icon: TwitterIcon },
  { label: 'Telegram', handle: 't.me/foreveralone', href: 'https://t.me', icon: TelegramIcon },
  { label: 'Discord', handle: 'Forever Alone HQ', href: 'https://discord.com', icon: DiscordIcon }
]

const dexLinks = [
  { name: 'Jupiter', href: 'https://jup.ag', icon: JupiterIcon },
  { name: 'Raydium', href: 'https://raydium.io', icon: RaydiumIcon }
]

const quickLinks = [
  {
    name: 'Pump.Fun',
    href: 'https://pump.fun',
    copy: 'The OG meme pump tracker. Catch the next lonely spiral.'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/ForeverAloneSOL',
    copy: 'The official feed for drops, memes, and PumpFun updates.'
  },
  {
    name: 'Jupiter',
    href: 'https://jup.ag',
    copy: 'Swap $ALONE with the trusted Solana aggregator.'
  }
]

function App() {
  const countdownTarget = useMemo(
    () => new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    []
  )
  const launchDateDisplay = useMemo(
    () =>
      new Date(tokenInfo.launchDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
    []
  )

  return (
    <div className="page-shell">
      <div className="grid-glow" aria-hidden="true" />

      <header className="site-header">
        <div className="logo-lockup">
          <span className="logo-icon" aria-hidden="true">
            <img
              src={heroImageFace}
              alt="Forever Alone meme character"
              className="logo-icon-image"
            />
          </span>
          <div>
            <p className="logo-title gradient-text">Forever Alone</p>
            <p className="logo-subtitle gradient-subtitle">Meme Revival Studio</p>
          </div>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a className="nav-link" href="#token">Token</a>
          <a className="nav-link" href="#story">Lore</a>
          <a className="nav-link" href="#buy">Buy</a>
          <a className="nav-link" href="#community">Community</a>
        </nav>
        <div className="wallet-button-wrapper">
          <WalletMultiButton />
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Solana Memecoin · Forever Alone</p>
            <h1>
              The loneliest meme is now{' '}
              <span className="gradient-text">on-chain</span>.
            </h1>
            <p className="lede">
              Forever Alone ($ALONE) — the classic rage comic face I drew back on image boards as{' '}
              <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="creator-link">
                @berandito
              </a>
              {' '}that defined internet loneliness is now a token on Solana. 
              No utility, no roadmap. Just pure meme energy and the eternal struggle of being alone.
            </p>
            <div className="hero-actions">
              <div className="hero-ctas">
                <a className="cta solid" href="#buy">
                  Buy $ALONE
                </a>
                <a className="cta ghost" href="#token">
                  View Token Info
                </a>
              </div>
              <div className="hero-proof">
                <p>
                  Original doodle by{' '}
                  <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="creator-link">
                    @berandito
                  </a>{' '}
                  (2009)
                </p>
                <p>Fair launch · No presale · 100% community</p>
              </div>
            </div>
            <dl className="hero-stat-grid">
              <div className="hero-stat-card">
                <dt>Symbol</dt>
                <dd>{tokenInfo.symbol}</dd>
              </div>
              <div className="hero-stat-card">
                <dt>Total Supply</dt>
                <dd>{tokenInfo.supply}</dd>
              </div>
              <div className="hero-stat-card">
                <dt>Chain</dt>
                <dd>{tokenInfo.chain}</dd>
              </div>
              <div className="hero-stat-card">
                <dt>Launch Date</dt>
                <dd>{launchDateDisplay}</dd>
              </div>
            </dl>
          </div>
          <div className="hero-card" aria-label="Forever Alone mood board">
            <div className="hero-face">
              <img
                src={heroImageFace}
                alt="Forever Alone meme character"
                className="forever-alone-image"
              />
            </div>
            <div className="hero-card-body">
              <p className="hero-quote">
                "Every wallet needs one lonely token. We're just making it happen on Solana."
              </p>
              <div className="pill-grid">
                <span>no utility</span>
                <span>pure meme</span>
                <span>fair launch</span>
                <span>forever alone</span>
              </div>
              <SocialWall />
            </div>
          </div>
        </section>

        <section className="token-hub" id="token">
          <div className="token-hub-heading">
            <div>
              <p className="eyebrow">Token intel</p>
              <h2>Everything you need before you ape in.</h2>
              <p className="token-hub-lede">
                A single block with countdown, market signals, and community telemetry so you can move fast (or stay lonely).
              </p>
            </div>
            <div className="token-pills">
              <span>Fair launch</span>
              <span>No presale</span>
              <span>Community owned</span>
            </div>
          </div>

          <div className="token-hub-grid">
            <div className="token-stack">
              <article className="status-card countdown-card">
                <div className="status-card-header">
                  <p className="eyebrow">Launch Countdown</p>
                  <p className="status-card-description">Counting down to the next lonely spiral.</p>
                </div>
                <Countdown targetDate={countdownTarget} />
              </article>

              <article className="status-card community-card">
                <div className="status-card-header">
                  <p className="eyebrow">Community Pulse</p>
                  <p className="status-card-description">How many loners are pinging Solana right now.</p>
                </div>
                <CommunityPulse />
                <div className="status-meta-grid">
                  <div>
                    <span className="status-meta-label">Launch</span>
                    <span className="status-meta-value">{launchDateDisplay}</span>
                  </div>
                  <div>
                    <span className="status-meta-label">Supply</span>
                    <span className="status-meta-value">{tokenInfo.supply}</span>
                  </div>
                  <div>
                    <span className="status-meta-label">Chain</span>
                    <span className="status-meta-value">{tokenInfo.chain}</span>
                  </div>
                </div>
              </article>
            </div>

            <article className="status-card token-card">
              <div className="status-card-header">
                <p className="eyebrow">Token Snapshot</p>
                <h2>Forever Alone ($ALONE)</h2>
                <p>Fair launch, no presale, no team allocation. Just pure meme energy.</p>
              </div>
              <TokenPrice contractAddress={tokenInfo.contract} />
              <div className="token-details">
                <div className="token-detail-row">
                  <span className="token-label">Contract Address</span>
                  <code className="token-value contract">{tokenInfo.contract}</code>
                  <button
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(tokenInfo.contract)
                      alert('Contract address copied!')
                    }}
                    aria-label="Copy contract address"
                  >
                    Copy
                  </button>
                </div>
                <div className="token-detail-row">
                  <span className="token-label">Token Symbol</span>
                  <span className="token-value">{tokenInfo.symbol}</span>
                </div>
                <div className="token-detail-row">
                  <span className="token-label">Total Supply</span>
                  <span className="token-value">{tokenInfo.supply}</span>
                </div>
                <div className="token-detail-row">
                  <span className="token-label">Blockchain</span>
                  <span className="token-value">{tokenInfo.chain}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="buy trade" id="buy">
          <div className="section-heading">
            <p className="eyebrow">Buy $ALONE</p>
            <h2>Trade the loneliness.</h2>
            <p>
              Available on all major Solana DEXs. Connect your wallet and join the Forever Alone community.
            </p>
          </div>
          <div className="trade-grid">
            <div className="dex-grid">
              {dexLinks.map((dex) => {
                const IconComponent = dex.icon
                return (
                  <a
                    key={dex.name}
                    href={dex.href}
                    target="_blank"
                    rel="noreferrer"
                    className="dex-card"
                  >
                    <div className="dex-icon">
                      <IconComponent size={56} />
                    </div>
                    <h3>{dex.name}</h3>
                    <p>Trade on {dex.name}</p>
                  </a>
                )
              })}
            </div>
            <div className="quick-link-stack">
              <p className="eyebrow">Quick Access</p>
              <h3>Main pages</h3>
              <p className="quick-link-copy">
                Jump straight to the platforms we mention for launches, memes, and swaps.
              </p>
              <div className="quick-link-grid">
                {quickLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="quick-link-card">
                    <div>
                      <h3>{link.name}</h3>
                      <p>{link.copy}</p>
                    </div>
                    <span className="quick-link-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="story" id="story">
          <div className="section-heading">
            <p className="eyebrow">Origin Story</p>
            <h2>Melancholy, but make it iconic.</h2>
            <p>
              Forever Alone started as my scribbled rage comic (I’m{' '}
              <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="creator-link">
                @berandito
              </a>
              ). My raw linework captured the universal feeling of being the odd one out. Now it lives on-chain as a Solana memecoin.
            </p>
          </div>
          <div className="story-grid">
            {highlightCards.map((item) => (
              <article className="glass-card" key={item.title}>
                <div className="card-heading">
                  <span className="badge">{item.badge}</span>
                  <span className="stat">{item.stat}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
            <article className="glass-card creator-card">
            <div className="card-heading">
              <span className="badge">Original Creator</span>
              <span className="stat">2009</span>
            </div>
            <h3>Created by me (@berandito)</h3>
            <p>
              I created the Forever Alone meme back when rage comics were the weirdest way to say “I’m alone,” and it became one of the most iconic faces of that era.
            </p>
            </article>
          </div>
        </section>

        <section className="signals" id="signals">
          <div className="section-heading">
            <p className="eyebrow">Roadmap</p>
            <h2>What's next? Nothing. This is a memecoin.</h2>
          </div>
          <div className="timeline">
            {signalMoments.map((signal) => (
              <article className="timeline-card" key={signal.title}>
                <header>
                  <span className="pill">{signal.time}</span>
                  <h3>{signal.title}</h3>
                </header>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="community" id="community">
          <div className="section-heading">
            <p className="eyebrow">Community Receipts</p>
            <h2>Loners, unite (ironically).</h2>
          </div>
          <div className="community-grid">
            <article className="quote-card">
              <p className="quote">
                “The Forever Alone pop-up made my entire friend group cry-laugh. 10/10 would spiral again.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Nova P.</p>
                  <p className="role">Event Producer</p>
                </div>
              </div>
            </article>
            <article className="quote-card">
              <p className="quote">
                “Finally, a meme brand that embraces the awkward. The hotline activation sold out in 42 minutes.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Jay “Mod” K.</p>
                  <p className="role">Discord Host</p>
                </div>
              </div>
            </article>
            <article className="quote-card">
              <p className="quote">
                “We licensed the Forever Alone face for a campus mental health week. Students loved the honesty.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Dr. Mei Chen</p>
                  <p className="role">Student Affairs</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Join the Community</p>
            <h2>Connect with the Forever Alone army.</h2>
            <p>
              Follow us on social media, join the Telegram, and be part of the loneliest community on Solana.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <p className="contact-label">Contract Address</p>
              <code className="contact-link contract-small">{tokenInfo.contract}</code>
              <p className="contact-note">Always verify the contract address before trading.</p>
            </div>
            <div className="contact-card socials">
              <p className="contact-label">Social Links</p>
              <ul>
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noreferrer" className="social-link">
                        <IconComponent size={20} />
                        <span>{link.label}</span>
                        <span className="social-handle">{link.handle}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Forever Alone ($ALONE) · Original meme by me (
          <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="footer-link">
            @berandito
          </a>
          )
        </p>
        <p>Built on Solana · Forever alone, together.</p>
      </footer>
      </div>
  )
}

export default App
