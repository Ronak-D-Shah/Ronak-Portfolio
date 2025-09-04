import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'NoSQL', level: 85 }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Redux', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Angular.js', level: 80 }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Backend & Frameworks',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Django', level: 75 },
      { name: 'Flask', level: 80 },
      { name: 'RESTful APIs', level: 90 }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Firebase', level: 80 }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Jest', level: 80 },
      { name: 'Cypress', level: 75 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 }
    ],
    color: 'from-indigo-500 to-purple-500'
  }
];

const additionalSkills = [
  { label: 'Distributed Systems', icon: '🌐' },
  { label: 'Web Design', icon: '🎨' },
  { label: 'User Experience Engineering', icon: '🧩' },
  { label: 'Design Patterns', icon: '📐' },
  { label: 'Machine Learning', icon: '🤖' },
  { label: 'Computer Networks', icon: '🛰️' },
  { label: 'Object Oriented Programming', icon: '🧱' },
  { label: 'Data Structures', icon: '🗂️' },
  { label: 'Algorithms', icon: '⚙️' },
  { label: 'System Design', icon: '🏗️' },
  { label: 'Microservices', icon: '🧬' },
  { label: 'GraphQL', icon: '🔺' },
  { label: 'WebSocket', icon: '🔌' },
  { label: 'CI/CD', icon: '🚀' },
];

export function SkillsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>('.skill-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%'
            } as ScrollTrigger.Vars
          }
        );
      });

      const bars = sectionRef.current?.querySelectorAll('.skill-bar');
      if (bars && bars.length) {
        bars.forEach((bar) => {
          const targetWidth = (bar as HTMLElement).dataset.width;
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: targetWidth || '0%',
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 90%'
              } as ScrollTrigger.Vars
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="skill-card group bg-card/80 border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${categoryIndex * 200}ms`
              }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className={`skill-bar h-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                        data-width={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Technologies & Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={skill.label}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 about-highlight"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="mr-2">{skill.icon}</span>{skill.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}