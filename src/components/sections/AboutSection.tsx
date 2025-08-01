import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'I love building scalable full-stack apps—whether with the MERN stack, Spring Boot, or cloud tools. Clean code and solid architecture drive me.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'I enjoy breaking down complex problems and turning them into real solutions—whether in code, LeetCode, or a strategic game of chess.'
  },
  {
    icon: Users,
    title: 'Collaborative Leader',
    description: 'I believe great software is built together. I thrive in cross-functional teams, guiding efforts to deliver impactful results.'
  },
  {
    icon: Rocket,
    title: 'Innovation Focused',
    description: 'Tech evolves fast—I stay curious and hands-on with emerging tools and ideas to help shape what’s next in software.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-primary transition-colors duration-300">
          Hi there! I'm Ronak Shah – and I absolutely love bringing ideas to life through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              Right now, I'm diving deep into my Master's in Software Engineering Systems at Northeastern University here in Boston. My fascination with tech really kicked off during my undergrad days at Manipal University Jaipur. That's where I first realized how much fun it is to take a concept and build it into something tangible and genuinely useful.
              </p>
              <p>
              I've been lucky enough to get some fantastic hands-on experience, particularly at places like Unicorn Flexo Graphics and Shri Shantinath Co. Those roles were awesome for building a solid foundation across full-stack development, understanding how to design robust systems, and just generally keeping my finger on the pulse of new technologies. What truly gets me excited is a good challenge – whether it's making a web app incredibly smooth, optimizing a database to hum with efficiency, or finding a clever way to implement a cutting-edge feature.
              </p>
              <p>
              When I'm not glued to my keyboard, you'll probably find me exploring the latest tech breakthroughs, tinkering with a personal project (usually trying to solve some little real-world problem I've spotted!), or contributing to open-source. I honestly believe technology has this incredible power to make a positive difference, and I'm always looking to connect and team up with other passionate folks to build something meaningful.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="animate-slide-in-right">
            <Card className="bg-card/50 border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Boston, MA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education</span>
                    <span className="font-medium">MS Software Engineering Systems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">University</span>
                    <span className="font-medium">Northeastern University</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Graduation</span>
                    <span className="font-medium">May 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-medium">Full-Stack Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="group bg-card/50 border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}