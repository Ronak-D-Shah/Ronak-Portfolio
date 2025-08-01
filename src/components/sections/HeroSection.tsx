import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-hero.jpg';

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

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
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
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://github.com/Ronak-D-Shah', '_blank')}
              >
                View My Work
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
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
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ronak-shah-5858b81a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:shah.ronak2@northeastern.edu"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
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