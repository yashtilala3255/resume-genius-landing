import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with basic resume building",
    badge: null,
    features: [
      "3 Professional templates",
      "Basic customization",
      "PDF export",
      "Resume score analysis",
      "Email support"
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "month", 
    description: "Unlock all features and premium templates",
    badge: "Most Popular",
    features: [
      "50+ Premium templates",
      "Full customization control",
      "Unlimited PDF downloads",
      "AI-powered suggestions",
      "Real-time ATS checking",
      "Multiple resume versions",
      "Priority support",
      "LinkedIn optimization"
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Lifetime",
    price: "$89",
    period: "one-time",
    description: "Pay once, use forever. Best value for serious professionals",
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Lifetime access",
      "All future templates",
      "Advanced AI features",
      "Cover letter builder",
      "Personal branding kit",
      "Career coaching resources"
    ],
    cta: "Get Lifetime Access",
    variant: "default" as const,
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free and upgrade when you need more advanced features. 
            All plans include our core resume building tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-medium ${
                plan.popular 
                  ? 'border-primary shadow-soft scale-105 lg:scale-110' 
                  : 'border-border/50 hover:scale-105'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground px-4">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button 
                  variant={plan.variant}
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">What's included:</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day money-back guarantee • No setup fees • Cancel anytime
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Zap className="h-3 w-3 text-accent" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-3 w-3 text-success" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-warning" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;