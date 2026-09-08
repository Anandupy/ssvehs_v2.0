import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top cursor-pointer hover:bg-sky-800 transition-transform active:scale-95 group"
      aria-label="Back to Top"
      title="Scroll to Top"
    >
      <ChevronsUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
