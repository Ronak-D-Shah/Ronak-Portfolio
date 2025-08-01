import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: 'Master of Science in Software Engineering Systems',
    school: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Sept 2023 - May 2025',
    description: 'Focusing on advanced software engineering principles, distributed systems, and modern development practices.',
    coursework: [
      'Distributed Systems',
      'Web Design',
      'Design Patterns',
      'Machine Learning',
      'Software Architecture',
      'Object-Oriented Design in Java',
      'Data Management and Database Design',
      'Data Science Methods',
      'Program Structure & Algorithms',
      'User Experience Design & Testing',
    ],
    gpa: 'In Progress',
    status: 'current'
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    school: 'Manipal University Jaipur',
    location: 'Jaipur, India',
    period: 'Sept 2019 - May 2023',
    description: 'Comprehensive foundation in computer science with a minor in Data Science. Graduated with strong academic performance.',
    coursework: [
      'Operating Systems',
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Computer Networks',
      'Database Management Systems',
      'Software Engineering'
    ],
    gpa: 'First Class',
    status: 'completed'
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and software engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <Card 
                  className="ml-12 md:ml-20 bg-card/80 border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group"
                  style={{
                    animationDelay: `${index * 300}ms`
                  }}
                >
                  <CardContent className="p-8">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge 
                        variant={edu.status === 'current' ? 'default' : 'secondary'}
                        className={edu.status === 'current' ? 'bg-gradient-primary text-primary-foreground' : ''}
                      >
                        {edu.status === 'current' ? 'In Progress' : 'Completed'}
                      </Badge>
                      {edu.status === 'current' && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-semibold">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <BookOpen className="w-4 h-4" />
                        Key Coursework:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge 
                            key={course}
                            variant="outline"
                            className="text-xs border-border/50 hover:border-primary hover:bg-primary/10 transition-colors duration-300"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* GPA/Status */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Academic Standing:</span>
                        <span className="font-semibold text-primary">{edu.gpa}</span>
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