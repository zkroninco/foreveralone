import React from 'react';

interface HighlightCard {
  title: string;
  stat: string;
  badge: string;
  copy: string;
}

interface StorySectionProps {
  highlightCards: HighlightCard[];
}

const StorySection: React.FC<StorySectionProps> = ({ highlightCards }) => {
  return (
    <section className="story panel" id="story">
      <div className="section-heading">
        <p className="eyebrow">My Story</p>
        <h2>The journey of an unexpected viral hit.</h2>
        <p>
          I didn’t think much of it at the time. I was putting together a rage comic and sketched this lonely, lopsided face to show someone who gets left out of everything. It was just a quick drawing, rough and unplanned, but somehow it struck a chord. People kept using it, repeating it, shaping it into something far bigger than the panel it came from. This is where I’ve been writing about how it all happened.
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
  );
};

export default StorySection;
