import React from 'react';
import heroImageFace from '../../forever-aloneface.jpg'; // Adjust path as necessary

interface SiteHeaderProps {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
  creatorHandle: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ theme, setTheme, creatorHandle }) => {
  return (
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
          <h1 className="logo-title gradient-text">Forever Alone</h1>
          <p className="logo-subtitle gradient-subtitle">Blog by {creatorHandle}</p>
        </div>
      </div>
      <nav className="primary-nav" aria-label="Primary navigation">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#story">My Story</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>
      <div className="wallet-button-wrapper"> {/* Renamed to theme-toggle-wrapper */}
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        {/* Removed WalletMultiButton */}
      </div>
    </header>
  );
};

export default SiteHeader;