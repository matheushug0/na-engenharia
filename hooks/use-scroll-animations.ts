'use client';

import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .stagger-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
