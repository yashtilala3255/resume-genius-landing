import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Palette, 
  Target, 
  Eye, 
  Download, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Multiple Resume Templates",
    description: "Choose from 50+ professionally designed templates that work across all industries and job levels."
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Personalize colors, fonts, layouts, and sections to match your style and industry requirements."
  },
  {
    icon: Target,
    title: "Resume Score & Tips",
    description: "Get instant feedback and AI-powered suggestions to optimize your resume for better results."
  },
  {
    icon: Eye,
    title: "Real-Time Preview",
    description: "See your changes instantly with our live preview feature. What you see is what you get."
  },
  {
    icon: Download,
    title: "Instant PDF Export",
    description: "Download your polished resume as a high-quality PDF, ready to send to employers."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description: "Get smart suggestions for bullet points, skills, and keywords tailored to your target role."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stand Out
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive resume builder gives you all the tools to create a 
            professional resume that gets you noticed by recruiters and hiring managers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;