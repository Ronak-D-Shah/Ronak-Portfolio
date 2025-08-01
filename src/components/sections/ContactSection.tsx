import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shah.ronak2@northeastern.edu',
    href: 'mailto:shah.ronak2@northeastern.edu'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (857) 230-7723',
    href: 'tel:+18572307723'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA',
    href: '#'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Ronak-D-Shah',
    color: 'hover:text-primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronak-shah-5858b81a5/',
    color: 'hover:text-primary'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://formspree.io/f/myzppvra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Unable to send message. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-primary transition-colors duration-300">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <Card className="bg-card/80 border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href !== '#' ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/80 border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-primary">
              <h4 className="text-lg font-semibold text-primary-foreground">
                Looking for a Software Engineer?
              </h4>
              <p className="text-sm text-primary-foreground/90">
                I'm currently open to new opportunities and exciting projects.
              </p>
              <a 
                href="mailto:shah.ronak2@northeastern.edu" 
                className="inline-block"
                >
                <Button 
                  variant="secondary" 
                  className="bg-background text-foreground hover:bg-background/90 w-full"
                >
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="bg-card/80 border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}