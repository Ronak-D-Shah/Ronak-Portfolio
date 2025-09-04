import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

export function Footer() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <footer ref={footerRef} className="bg-card/60 border-t border-border/50 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold gradient-text mb-2">Ronak Shah</div>
            <p className="text-sm text-muted-foreground">Software Engineer focused on building scalable, delightful products.</p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/Ronak-D-Shah" target="_blank" className="magnet p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ronak-shah-5858b81a5/" target="_blank" className="magnet p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:shah.ronak2@northeastern.edu" className="magnet p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Tech</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>React + TypeScript</li>
              <li>Vite + Tailwind CSS</li>
              <li>shadcn/ui + Radix</li>
              <li>GSAP + ScrollTrigger</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Let’s work together</h4>
            <p className="text-sm text-muted-foreground mb-3">Open to full-time roles and select freelance work.</p>
            <a href="#contact" className="inline-block">
              <div className="btn-micro bg-gradient-primary text-primary-foreground rounded-md px-4 py-2">Get in touch</div>
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
}