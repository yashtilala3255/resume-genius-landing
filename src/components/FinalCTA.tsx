import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-hero rounded-full blur-2xl opacity-10"></div>
      
      <div className="container max-w-screen-xl relative">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Your Dream Job Starts with a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Perfect Resume
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join 50,000+ professionals who've accelerated their careers with ResumeBuilder Pro. 
              Start building your professional resume today and land the job you deserve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-6">
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View All Templates
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Setup in 2 Minutes</div>
                <div className="text-xs text-muted-foreground">No learning curve</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">100% ATS-Safe</div>
                <div className="text-xs text-muted-foreground">Guaranteed compatibility</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">14-Day Guarantee</div>
                <div className="text-xs text-muted-foreground">Risk-free trial</div>
              </div>
            </div>
          </div>

          {/* Final encouragement */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Free plan available • No credit card required • Join 50,000+ professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;