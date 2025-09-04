import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

interface Props {
  flip?: boolean;
}

export function SectionWave({ flip = false }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut', attr: { viewBox: flip ? '0 0 1440 321' : '0 0 1440 319' } });
    }, ref);
    return () => ctx.revert();
  }, [prefersReducedMotion, flip]);

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block w-full h-12 text-border">
        {/* Decorative divider intentionally left minimal */}
      </svg>
    </div>
  );
}


