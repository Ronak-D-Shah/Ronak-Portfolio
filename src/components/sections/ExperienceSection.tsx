import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Unicorn Flexo Graphics',
    location: 'Mumbai, India',
    period: 'May 2023 - Aug 2024',
    type: 'Full-time',
    achievements: [
      {
        icon: TrendingUp,
        text: 'Built a real-time inventory platform using React, TypeScript, Tailwind and Chart.js, adding support for 14+ languages'
      },
      {
        icon: Zap,
        text: 'Developed 14+ RESTful APIs with Node.js, and MongoDB for product management, JWT authentication and role-based access control (RBAC) from scratch'
      },
      {
        icon: TrendingUp,
        text: 'Implemented CI/CD and enhanced reliability with Jest and GitHub Actions, increasing test coverage by 70%'
      },
      {
        icon: Users,
        text: 'Scheduled Node.js cron jobs to trigger low-stock alerts via Amazon SES, reducing stockouts by 22% and automating daily sales report emails to management'
      },
      {
        icon: Zap,
        text: 'Collaborated with UX/UI teams to design workflows, boosting user engagement'
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Jest', 'GitHub Actions', 'Amazon SES', 'Tailwind CSS', 'Chart.js'],
    isRecent: true
  },
  {
    title: 'Software Engineering Intern',
    company: 'Shri Shantinath Co',
    location: 'Mumbai, India',
    period: 'Mar 2022 - Aug 2022',
    type: 'Internship',
    achievements: [
      {
        icon: TrendingUp,
        text: 'Extended average session duration by 30 seconds by integrating a product recommendation system in React based on user interaction insights using Google Analytics to tailor suggestions for a textile e-commerce platform'
      },
      {
        icon: Zap,
        text: 'Enabled ₹1.5M+ in secure transactions by integrating Razorpay Checkout SDK in React and implementing server-side validation and webhook handling with Node.js and Express'
      },
      {
        icon: TrendingUp,
        text: 'Cut average API response time to ~200ms by implementing MongoDB indexing and aggregation pipelines'
      },
      {
        icon: Users,
        text: 'Optimized GraphQL requests to the Frontend by caching and debouncing, reducing API calls by 37%'
      }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Razorpay', 'Google Analytics'],
    isRecent: false
  },
  {
    title: 'Web Developer',
    company: 'Edusha University',
    location: 'Mumbai, India',
    period: 'Sept 2021 - Dec 2021',
    type: 'Internship',
    achievements: [
      {
        icon: Users,
        text: 'Developed a responsive web portal using Java (Spring Boot) and Angular 11, enhancing student navigation for university housing and dining services'
      },
      {
        icon: Zap,
        text: 'Integrated WebSocket for real-time student chat, enabling roommate/study group matching for 1,000+ users'
      },
      {
        icon: TrendingUp,
        text: 'Reduced initial page load time by 45% to improve Time to First Byte (TTFB) and boost SEO crawlability'
      }
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'WebSocket', 'SEO Optimization'],
    isRecent: false
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering scalable solutions and driving measurable impact across diverse projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <Card 
                  className="ml-12 md:ml-20 bg-card/80 border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          {exp.isRecent && (
                            <Badge className="bg-gradient-primary text-primary-foreground">
                              Recent
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-1 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-lg">Key Achievements</h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <achievement.icon className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <p className="text-sm leading-relaxed">{achievement.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}