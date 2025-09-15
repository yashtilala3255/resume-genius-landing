import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Edit3, Plus, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Select a Template",
    description: "Choose from 50+ professional templates designed for your industry and career level."
  },
  {
    number: "02", 
    icon: Edit3,
    title: "Customize Design",
    description: "Personalize colors, fonts, and layouts with our easy-to-use drag-and-drop editor."
  },
  {
    number: "03",
    icon: Plus,
    title: "Add Your Content",
    description: "Fill in your information with AI-powered suggestions and real-time optimization tips."
  },
  {
    number: "04",
    icon: Download,
    title: "Download PDF",
    description: "Export your polished, ATS-friendly resume and start applying to your dream jobs."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your professional resume ready in just 4 simple steps. 
            It takes less than 10 minutes from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50 h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white text-lg font-bold mb-2">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Start Building Your Resume
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;