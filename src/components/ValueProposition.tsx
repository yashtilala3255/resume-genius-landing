import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Brain, 
  MousePointer, 
  Clock,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "ATS-Friendly Designs",
    description: "All our templates are optimized to pass Applicant Tracking Systems, ensuring your resume gets seen by human recruiters.",
    badge: "99% Pass Rate"
  },
  {
    icon: Brain,
    title: "AI-Powered Tips",
    description: "Get intelligent suggestions for content improvements, keyword optimization, and industry-specific recommendations.",
    badge: "Smart AI"
  },
  {
    icon: MousePointer,
    title: "Easy Drag-and-Drop",
    description: "Effortlessly customize your resume layout with our intuitive drag-and-drop editor. No design skills required.",
    badge: "Zero Learning Curve"
  },
  {
    icon: Clock,
    title: "Save & Edit Anytime",
    description: "Your resumes are automatically saved in the cloud. Access and edit them anytime, anywhere, from any device.",
    badge: "Always Available"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ResumeBuilder Pro
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who've accelerated their careers with our 
            advanced resume building platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 border-border/50 relative overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {benefit.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Resumes Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">2 Min</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;