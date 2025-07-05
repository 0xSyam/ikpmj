'use client';

import { useEffect, useState } from 'react';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tampilkan tombol scroll to top ketika user scroll lebih dari 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`go-top ${isVisible ? 'active' : ''}`} 
      onClick={scrollToTop}
    >
      <i className="bx bx-up-arrow-alt"></i>
    </div>
  );
};

export default GoTop; 