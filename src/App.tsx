import { useEffect, useMemo, useState } from 'react'
import heroImageFace from '../forever-aloneface.jpg'
import { Countdown } from './components/Countdown'
import { TwitterIcon, TelegramIcon, DiscordIcon } from './components/SocialIcons'
import { CommunityPulse } from './components/CommunityPulse'
import { SocialWall } from './components/SocialWall'
import './App.css'
import './mobile.css'

const highlightCards = [
  {
    title: 'The Birth of a Meme',
    stat: '2008',
    badge: 'Fresh from /b/',
    copy: 'I just doodled this face for a rage comic. It was a crazy idea, but it kinda works, right? Who knows where this will go!'
  },
  {
    title: 'Community Driven',
    stat: '100%',
    badge: 'Made for Lulz',
    copy: 'I\'m just putting this out there for fun. Hope other people on the internet get it. It\'s for all the lonely people out there.'
  },
  {
    title: 'That Face',
    stat: '∞',
    badge: 'No Utility',
    copy: 'It\'s just a funny face. No big plans, no deep meaning. Just a drawing that expresses a certain... feeling. Hope it makes someone chuckle.'
  }
]

const signalMoments = [
  {
    title: 'The Doodle',
    detail: 'Just a simple doodle in my notebook that ended up in a rage comic. Seemed like a good idea at the time.',
    time: 'Early 2008'
  },
  {
    title: 'The First Post',
    detail: 'Posted it on a forum. Hope it gets some traction. Maybe someone else will relate to this feeling.',
    time: 'Mid 2008'
  },
  {
    title: 'The Future (maybe?)',
    detail: 'Who knows what happens next? Maybe this face will be everywhere. Or maybe not. LOL.',
    time: 'Late 2008'
  }
]

const socialLinks = [
  { label: 'Creator', handle: '@berandito', href: 'https://twitter.com/berandito', icon: TwitterIcon },
  { label: 'Twitter', handle: '@thatfaceguy', href: 'https://twitter.com', icon: TwitterIcon },
  { label: 'Telegram', handle: 't.me/ragecomics', href: 'https://t.me', icon: TelegramIcon },
  { label: 'Discord', handle: 'Meme Makers HQ', href: 'https://discord.com', icon: DiscordIcon }
]

const quickLinks = [
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/r/ragecomics/',
    copy: 'Check out other funny stuff on the internet.'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    copy: 'Follow for the latest memes and updates.'
  }
]

const forumThreads = [
  {
    title: 'Post your best rage comics',
    replies: '420 replies',
    author: 'OP · berandito',
    status: 'Pinned · 12:03 AM'
  },
  {
    title: 'Is this the funniest new face?',
    replies: '128 replies',
    author: 'mod · Nova P.',
    status: 'Yesterday'
  },
  {
    title: 'Share your fan art of "that face"',
    replies: '64 replies',
    author: 'artist · Dr. Mei Chen',
    status: 'Mar 3'
  }
]

const THEME_STORAGE_KEY = 'thatface-theme'

function App() {
  const countdownTarget = useMemo(
    () => new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    []
  )
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (window.localStorage.getItem(THEME_STORAGE_KEY) as 'dark' | 'light') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="page-shell">
      <div className="grid-glow" aria-hidden="true" />

      <header className="site-header">
        <div className="logo-lockup">
          <span className="logo-icon" aria-hidden="true">
            <img
              src={heroImageFace}
              alt="That new funny rage comic face"
              className="logo-icon-image"
            />
          </span>
          <div>
            <p className="logo-title gradient-text">The New Face</p>
            <p className="logo-subtitle gradient-subtitle">Just a New Meme Idea</p>
          </div>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a className="nav-link" href="#story">Origin</a>
          <a className="nav-link" href="#community">Community</a>
        </nav>
        <div className="wallet-button-wrapper">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Freshly Created - 2008</p>
            <h1>
              I drew this face, and now{' '}
              <span className="gradient-text">it's got a webpage</span>.
            </h1>
            <p className="lede">
              Hey guys! I just drew this funny face for a rage comic. It kinda captures that feeling when you're just... there. Hope it makes sense to someone out there. This internet thing is still new, but maybe this will be the next big thing!
            </p>
            <div className="hero-actions">
              <div className="hero-ctas">
                <a className="cta solid" href="#story">
                  See the Comic
                </a>
                <a className="cta ghost" href="#community">
                  Chat with Others
                </a>
              </div>
              <div className="hero-proof">
                <p>
                  Original doodle by{' '}
                  <a href="https://twitter.com/berandito" target="_blank" rel="noreferrer" className="creator-link">
                    @berandito
                  </a>{' '}
                  (2008)
                </p>
                <p>Posted for lulz · Hope it spreads · For the internet!</p>
              </div>
            </div>
            <p className="hero-archive-label blink">Freshly Posted Online · 2008 logs intact (for now!)</p>
          </div>
          <div className="hero-card" aria-label="Mood Board for That Face">
            <div className="hero-face">
              <img
                src={heroImageFace}
                alt="A new funny face for rage comics"
                className="forever-alone-image"
              />
            </div>
            <div className="hero-card-body">
              <p className="hero-quote">
                "Sometimes, you just gotta draw what you feel, amirite?"
              </p>
              <div className="pill-grid">
                <span>just a face</span>
                <span>pure meme</span>
                <span>internet humor</span>
              </div>
              <SocialWall />
            </div>
          </div>
        </section>

        <section className="forum-board" aria-label="Early Internet Forum">
          <div className="section-heading">
            <p className="eyebrow">Forum archives</p>
            <h2>Threads from the hot new boards</h2>
            <p>Pure meme chatter preserved in grey tab sections, just like the old /b/ vibe.</p>
          </div>
          <div className="thread-list">
            {forumThreads.map((thread) => (
              <article className="thread-card" key={thread.title}>
                <div className="thread-title">
                  <span className="thread-pill">RAGE</span>
                  <h3>{thread.title}</h3>
                </div>
                <div className="thread-meta">
                  <span>{thread.replies}</span>
                  <span>{thread.author}</span>
                  <span className="thread-status">{thread.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story panel" id="story">
          <div className="section-heading">
            <p className="eyebrow">Origin Story</p>
            <h2>Just a Doodle, But it Speaks to Me.</h2>
            <p>
              This all started with a doodle in my notebook. I was making a rage comic and I drew this face to capture that feeling of being... well, you know. It was raw, just a simple drawing, but I think it resonates with people. I just posted it online, hope it takes off!
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

          </div>
        </section>

        <section className="signals" id="signals">
          <div className="section-heading">
            <p className="eyebrow">The Future</p>
            <h2>What's Next? Who knows! It's the Internet!</h2>
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

        <section className="community panel" id="community">
          <div className="section-heading">
            <p className="eyebrow">Community</p>
            <h2>Find Your People (or don't, it's cool).</h2>
          </div>
          <div className="community-grid">
            <article className="quote-card">
              <p className="quote">
                “This new face from berandito is epic! My whole forum crew is using it now. 10/10 would post again.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Nova P.</p>
                  <p className="role">Forum Moderator</p>
                </div>
              </div>
            </article>
            <article className="quote-card">
              <p className="quote">
                “Finally, a meme that embraces the awkward. The replies on my thread are blowing up with this face.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Jay “Mod” K.</p>
                  <p className="role">Imageboard Contributor</p>
                </div>
              </div>
            </article>
            <article className="quote-card">
              <p className="quote">
                “My buddy showed me this face. I’m putting it in all my MSN Messenger away messages. So relatable.”
              </p>
              <div className="quote-meta">
                <span className="dot" />
                <div>
                  <p className="author">Dr. Mei Chen</p>
                  <p className="role">Early Adopter</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Connect with Others</p>
            <h2>Find other people who get it.</h2>
            <p>
              Share your comics, chat with friends, and spread the lulz online.
            </p>
          </div>
          <div className="contact-grid">
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
          © {new Date().getFullYear()} The New Face · Original doodle by me (
          <a href="https://twitter.com/berandito" target="_blank" rel="noreferrer" className="footer-link">
            @berandito
          </a>
          )
        </p>
        <p>Made for the internet. Spread the lulz.</p>
      </footer>
      </div>
  )
}

export default App
