import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container max-w-screen-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary"></div>
              <span className="text-xl font-bold">ResumeBuilder Pro</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Build professional, ATS-friendly resumes that get you hired faster. 
              Trusted by 50,000+ professionals worldwide.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Templates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cover Letter Builder</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">ATS Checker</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Examples</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Resources</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a 
              href="https://scalexwebsolution.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Powered by: Scale X web solution
            </a>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;