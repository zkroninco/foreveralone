import React from 'react';

interface SiteFooterProps {
  creatorHandle: string;
}

const SiteFooter: React.FC<SiteFooterProps> = ({ creatorHandle }) => {
  return (
    <footer className="site-footer">
      <p>
        © 2010 Forever Alone · Original meme by me (
        <a href="https://x.com/berandito" target="_blank" rel="noreferrer" className="footer-link">
          {creatorHandle}
        </a>
        )
      </p>
      <p>Built with love · Forever alone, together.</p>
    </footer>
  );
};

export default SiteFooter;
