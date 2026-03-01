'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const AnimatedLogo = ({ className }: { className?: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!svgRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const paths = svgRef.current.querySelectorAll('path');
    const lengths: number[] = [];
    
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      lengths[i] = length;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    gsap.timeline()
      .to(paths, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        stagger: 0.08
      })
      .to(paths, {
        strokeDashoffset: (i) => lengths[i],
        duration: 1.5,
        ease: 'power2.inOut',
        stagger: 0.08
      })
      .set(paths, { opacity: 0 });
  }, []);

  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className={className}>
      <g fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round">
        <path d="M 150 212 Q 316 400 150 588" />
        <path d="M 230 196 Q 396 400 230 604" />
        <path d="M 310 144 Q 476 400 310 656" />
        <path d="M 390 104 Q 556 400 390 696" />
        <path d="M 650 212 Q 484 400 650 588" />
        <path d="M 570 196 Q 404 400 570 604" />
        <path d="M 490 144 Q 324 400 490 656" />
        <path d="M 410 104 Q 244 400 410 696" />
      </g>
    </svg>
  );
};
