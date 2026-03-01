'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'motion/react';

export const AnimatedText = ({ children, className }: { children: string; className?: string }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!textRef.current || !isInView) return;

    const text = textRef.current;
    const words = children.split(' ');
    text.innerHTML = words.map(word => `<span class="inline-block opacity-0">${word}</span>`).join(' ');

    const spans = text.querySelectorAll('span');
    
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out'
    });
  }, [isInView, children]);

  return <h2 ref={textRef} className={className}>{children}</h2>;
};
