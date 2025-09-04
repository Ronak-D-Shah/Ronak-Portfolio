import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
 

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="section-1"><HeroSection /></div>
        <div className="section-2"><AboutSection /></div>
        <div className="section-1"><SkillsSection /></div>
        <div className="section-2"><EducationSection /></div>
        <div className="section-1"><ExperienceSection /></div>
        <div className="section-2"><ProjectsSection /></div>
        <div className="section-1"><ContactSection /></div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}