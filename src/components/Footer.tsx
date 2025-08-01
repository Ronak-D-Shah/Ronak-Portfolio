import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Ronak Shah. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary" />
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}