import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary"></div>
          <span className="text-xl font-bold text-foreground">ResumeBuilder Pro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="hero"
            onClick={() => window.open('https://resume-builder-scalex.vercel.app/', '_blank')}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;