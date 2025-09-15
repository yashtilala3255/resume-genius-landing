import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "TechCorp",
    content: "I landed my dream job within 2 weeks of using ResumeBuilder Pro. The ATS optimization really works!",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupXYZ",
    content: "The AI suggestions helped me highlight skills I didn't even know were valuable. Got 3 interview calls in one week.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    company: "Design Studio",
    content: "Clean, professional templates that made me stand out. The customization options are incredible!",
    rating: 5,
    initials: "ER"
  },
  {
    name: "David Kim",
    role: "Sales Director",
    company: "Global Corp",
    content: "Switched from my old resume to ResumeBuilder Pro and saw a 300% increase in recruiter responses.",
    rating: 5,
    initials: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "HR Specialist",
    company: "Fortune 500",
    content: "As an HR professional, I can confirm these resumes pass through our ATS systems flawlessly.",
    rating: 5,
    initials: "LT"
  },
  {
    name: "Alex Martinez",
    role: "Data Scientist", 
    company: "Analytics Inc",
    content: "The template variety is amazing. Found the perfect format for my technical background.",
    rating: 5,
    initials: "AM"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Professionals
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our users say about their 
            success stories with ResumeBuilder Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-border/50 relative overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="text-center mt-16 p-8 bg-card rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">2,847</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;