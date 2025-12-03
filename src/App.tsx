import { useEffect, useState } from 'react';
import './styles/base.css';
import './styles/theme.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';

import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

// Constants for blog content
const blogContent = {
  title: 'Forever Alone: Viral?',
  creatorHandle: '@berandito',
  archiveLabel: 'Found in a dusty /rage/ archive · 2009 logs intact',
  heroQuote: '"Every artist hopes their work resonates. This one... exploded."',
  pillGrid: ['lol', 'comic', 'viral'],
};

const highlightCards = [
  {
    title: 'The Doodle',
    stat: '2009',
    badge: 'Rage Comic Era',
    copy: 'It started as nothing more than a fast sketch for a comic. I never expected it to turn into a recognizable symbol for isolation across the early web.'
  },
  {
  title: 'Unexpected Virality',
    stat: 'Everywhere',
    badge: 'Unstoppable Spread',
    copy: 'From tiny forums to major sites, the face kept showing up. Watching a doodle jump platforms and communities on its own felt unreal, like it detached from me and wandered into the world by itself.'
  },
  {
    title: 'My Story',
    stat: 'Personal',
    badge: 'Reflections',
    copy: 'This space is where I’ve been collecting the ups, downs, and odd moments of seeing a meme grow far beyond its origin. The experience has been strange, surprising, and honestly a bit overwhelming.'
  }
];

const THEME_STORAGE_KEY = 'foreveralone-theme';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (window.localStorage.getItem(THEME_STORAGE_KEY) as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="page-shell">
      <div className="grid-glow" aria-hidden="true" />

      <SiteHeader theme={theme} setTheme={setTheme} creatorHandle={blogContent.creatorHandle} />

      <main>
        <HeroSection blogContent={blogContent} />
        <StorySection highlightCards={highlightCards} />
        <ContactSection signatureText="Thanks for visiting my corner of the internet. Stay real, stay memeing. - B." />
      </main>

      <SiteFooter creatorHandle={blogContent.creatorHandle} />
    </div>
  );
}

export default App;