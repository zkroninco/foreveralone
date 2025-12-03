import React from 'react';
import heroImageFace from '../../forever-aloneface.jpg'; // Adjust path as necessary

interface BlogContent {
  title: string;
  creatorHandle: string;
  archiveLabel: string;
  heroQuote: string;
  pillGrid: string[];
}

interface HeroSectionProps {
  blogContent: BlogContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ blogContent }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">My First Post</p>
        <h1>It's Happening.</h1>
        <p className="lede">
          I was messing around with another rage comic tonight and ended up doodling this lopsided, miserable face to show someone who gets left out of everything. Didn’t spend more than a minute on it. Just a quick sketch to exaggerate that lonely feeling everyone tries to pretend they don’t have.
        </p>
        <p className="lede">
          It’s strange. I posted the comic and that face seems to be the only thing people are noticing. It’s already getting saved, reposted, and edited on a few boards. I didn’t expect that. It was supposed to be a throwaway panel, nothing more.
        </p>
        <p className="lede">
          If people keep using it, fine. Maybe it turns into something. Maybe it disappears tomorrow. Either way, it’s weird seeing a doodle travel faster than anything I put actual effort into. If this thing keeps spreading, I guess I’ll update here.
        </p>
        <p className="lede">– B.</p>
        <div className="hero-actions">
          <div className="hero-proof">
            <p>
              Original doodle by{' '}
              <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="creator-link">
                {blogContent.creatorHandle}
              </a>{' '}
              (2009)
            </p>
            <p>Personal Blog · My Journey</p>
          </div>
        </div>
        <p className="hero-archive-label blink">{blogContent.archiveLabel}</p>
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
          <p className="hero-quote">{blogContent.heroQuote}</p>
          <div className="pill-grid">
            {blogContent.pillGrid.map((pill, index) => (
              <span key={index}>{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
