import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are the resume templates ATS-friendly?",
    answer: "Yes! All our templates are specifically designed to pass through Applicant Tracking Systems (ATS). We regularly test our templates with major ATS platforms to ensure 99%+ compatibility."
  },
  {
    question: "Can I edit my resume after downloading?",
    answer: "Absolutely! Your resume is automatically saved to your account. You can come back anytime to edit, update, or create new versions. All changes are synced in real-time."
  },
  {
    question: "What file formats can I download?",
    answer: "You can download your resume as a high-quality PDF, which is the standard format preferred by recruiters and ATS systems. Pro users also get access to Word document exports."
  },
  {
    question: "How does the AI-powered content suggestion work?",
    answer: "Our AI analyzes your job title, industry, and experience level to suggest relevant skills, keywords, and bullet points that are trending in your field. It helps optimize your resume for specific job postings."
  },
  {
    question: "Can I create multiple resume versions?",
    answer: "Yes! Pro users can create unlimited resume versions. This is perfect for tailoring your resume to different job applications or industries while keeping all versions organized in your account."
  },
  {
    question: "Is my personal information secure?",
    answer: "Your data security is our top priority. We use enterprise-grade encryption and never share your personal information with third parties. Your resumes are stored securely and only accessible by you."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! All users get email support. Pro users receive priority support with faster response times. We also have an extensive knowledge base and video tutorials to help you get started."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-card hover:bg-accent hover:text-accent-foreground rounded-lg border border-border/50 transition-colors text-sm font-medium">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-card hover:bg-accent hover:text-accent-foreground rounded-lg border border-border/50 transition-colors text-sm font-medium">
              View Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;