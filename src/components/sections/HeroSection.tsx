import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-hero.jpg';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Innovator'
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const bgParallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      );

      gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, y: 20, rotate: -2, scale: 0.98 },
        { autoAlpha: 1, y: 0, rotate: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      const particles = sectionRef.current?.querySelectorAll('.hero-particle');
      if (particles && particles.length) {
        gsap.to(particles, {
          y: 'random(-20, 20)',
          x: 'random(-10, 10)',
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: {
            amount: 2,
            from: 'random'
          }
        });
      }

      // Parallax without pinning (short, natural feel)
      ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          const p = self.progress;
          gsap.to(bgParallaxRef.current, { yPercent: -20 * p, ease: 'none', overwrite: 'auto' });
          gsap.to(imageRef.current, { yPercent: -10 * p, ease: 'none', overwrite: 'auto' });
          gsap.to(contentRef.current, { yPercent: -5 * p, ease: 'none', overwrite: 'auto' });
        }
      } as ScrollTrigger.Vars);

      // Magnetic social icons
      const magnets = gsap.utils.toArray<HTMLAnchorElement>('.magnet');
      magnets.forEach((el) => {
        const bounds = () => el.getBoundingClientRect();
        const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' });
        const onMove = (e: MouseEvent) => {
          const b = bounds();
          const relX = e.clientX - (b.left + b.width / 2);
          const relY = e.clientY - (b.top + b.height / 2);
          gsap.to(el, { x: relX * 0.15, y: relY * 0.15, duration: 0.2, ease: 'power2.out' });
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', reset);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div ref={bgParallaxRef} className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground font-medium mx-1">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">Ronak</span> Shah
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-3xl font-semibold text-primary">
                  {displayText}
                  <span className={`${isTyping ? 'typing' : ''}`}>|</span>
                </span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about building scalable solutions and turning complex problems into elegant code. 
              Currently pursuing MS in Software Engineering Systems at Northeastern University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 btn-micro"
                onClick={() => window.open('https://github.com/Ronak-D-Shah', '_blank')}
              >
                View My Work
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 btn-micro"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/Ronak-D-Shah"
                target="_blank"
                rel="noopener noreferrer"
                className="magnet p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ronak-shah-5858b81a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnet p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:shah.ronak2@northeastern.edu"
                className="magnet p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <Card className="relative p-1 bg-gradient-primary shadow-card">
              <div className="relative overflow-hidden rounded-lg bg-background">
                <img
                  src={profileImage}
                  alt="Ronak Shah"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}