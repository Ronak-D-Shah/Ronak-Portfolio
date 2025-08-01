import { ExternalLink, Github, Calendar, Users, Zap, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Eventure - Event Management Website',
    period: 'Sept 2023 - Dec 2023',
    description: 'A comprehensive e-commerce platform for event ticket booking with advanced features for both users and administrators.',
    longDescription: 'Led the full development of an e-commerce platform using MERN stack (ES6+) and Redux, enabling users to seamlessly book event tickets. The platform features streamlined shopping cart functionality, secure payment processing using Stripe, event rating system, and distinct admin and user routes for efficient management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'ES6+'],
    features: [
      'Secure payment processing with Stripe integration',
      'Shopping cart with real-time updates',
      'Event rating and review system',
      'Admin dashboard for event management',
      'User authentication and authorization',
      'Responsive design for all devices'
    ],
    metrics: [
      { icon: Users, label: 'User Management', value: 'Multi-role system' },
      { icon: Zap, label: 'Payment Processing', value: 'Stripe Integration' },
      { icon: Database, label: 'Database', value: 'MongoDB' }
    ],
    status: 'Completed',
    links: {
      // live: '#',
      github: 'https://github.com/Ronak-D-Shah/Eventure'
    },
    featured: true
  },
  {
    title: 'MediLife - On-Demand Paramedic & Medicine Delivery App',
    period: 'Oct 2022 - Dec 2022',
    description: 'A React Native application providing immediate paramedic services and medicinal needs on iOS and Android platforms.',
    longDescription: 'Built a React Native app for immediate paramedic services and medicinal needs on iOS and Android platforms. Implemented robust backend infrastructure using cloud services, including AWS Amplify, AWS Lambda functions, AWS AppSync, and GraphQL, ensuring the app\'s integrity and security.',
    technologies: ['React Native', 'AWS Amplify', 'AWS Lambda', 'AWS AppSync', 'GraphQL', 'iOS', 'Android'],
    features: [
      'Real-time paramedic service requests',
      'Medicine delivery tracking',
      'Cross-platform mobile application',
      'Cloud-based backend infrastructure',
      'GraphQL API integration',
      'Secure authentication system'
    ],
    metrics: [
      { icon: Globe, label: 'Platform', value: 'iOS & Android' },
      { icon: Zap, label: 'Backend', value: 'AWS Cloud Services' },
      { icon: Database, label: 'API', value: 'GraphQL' }
    ],
    status: 'Completed',
    links: {
      // live: '#',
      github: 'https://github.com/Ronak-D-Shah/MediLife'
    },
    featured: true
  },
  {
    title: 'QuizSavvy - Quiz Management System',
    period: 'Dec 2021 - Mar 2022',
    description: 'A comprehensive quiz management platform built with JavaFX and MySQL for educational institutions.',
    longDescription: 'Created a quiz management system with JavaFX in SceneBuilder, integrating with a MySQL database using JDBC. Led a team of 4, utilizing OOP principles to create reusable & maintainable code supporting diverse user operations.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC', 'SceneBuilder', 'OOP'],
    features: [
      'Interactive quiz creation and management',
      'Student progress tracking',
      'Real-time scoring system',
      'Database-driven question bank',
      'User role management',
      'Desktop application interface'
    ],
    metrics: [
      { icon: Users, label: 'Team Size', value: '4 Members' },
      { icon: Database, label: 'Database', value: 'MySQL' },
      { icon: Zap, label: 'Architecture', value: 'OOP Design' }
    ],
    status: 'Completed',
    links: {
      github: 'https://github.com/Ronak-D-Shah/QuizSavvy'
    },
    featured: false
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that solve real-world problems with modern technologies
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group bg-card/80 border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                      <Badge variant="outline" className="text-xs ml-2">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {/* {project.links.live && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )} */}
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <metric.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                        <p className="text-sm font-medium truncate">{metric.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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
          ))}
        </div>

        {/* Publication */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Research Publication</h3>
          <Card className="bg-card/80 border-border/50 hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold">
                    Cardiovascular Disease Detection using Power Transformation and Gradient-Boosting Classifier
                  </h4>
                  <Button className="mt-4" variant="outline" size="sm" asChild>
                  <a href="https://ieeexplore.ieee.org/abstract/document/9823485?casa_token=13JgHdBTXuYAAAAA:cdpTOIh0nY6i0hFDROUBz5AHttrsKw42UXD8sUkKQTX2i0MgcmM-2PsMTrrLGUy2jmvUHLLJW1s7vVY" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Link
                  </a>
                </Button>
                </div>
                <div className="text-muted-foreground">
                  <p className="text-sm">
                    <strong>Authors:</strong> R Goel, T Aggarwal, J Malik, S Mali, R Shah, and N Karri
                  </p>
                  <p className="text-sm">
                    <strong>Published:</strong> ICACITE, IEEE | April 2022
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Research paper on machine learning approaches for cardiovascular disease detection, 
                  focusing on power transformation techniques and gradient-boosting algorithms for improved accuracy.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                  <Badge variant="outline" className="text-xs">Healthcare</Badge>
                  <Badge variant="outline" className="text-xs">Data Science</Badge>
                  <Badge variant="outline" className="text-xs">IEEE</Badge>
                </div>
                  <Badge className="bg-gradient-primary text-primary-foreground mt-4">
                    Published
                  </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}