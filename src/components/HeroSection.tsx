import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import resumeMockup from "@/assets/resume-mockup.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Trusted by 50,000+ professionals
              </Badge>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Build Your Resume in{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Minutes
                </span>{" "}
                – Stand Out, Get Hired!
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Create professional, ATS-friendly resumes with our AI-powered builder. 
                Choose from expert-designed templates and get hired faster.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Create My Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Templates
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">50,000+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Built in minutes</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={resumeMockup} 
                alt="Professional resume template preview" 
                className="w-full max-w-md mx-auto rounded-xl shadow-strong"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-56 h-56 bg-gradient-hero rounded-full blur-2xl opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;