import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered Study Planning
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Study </span>
              Journey
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Upload your syllabus, let AI create your personalized 21-day study plan, 
              and track your progress with intelligent insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">21</div>
                <div className="text-sm text-muted-foreground">Day Plans</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Personalized</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Smart Study Panel Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border animate-pulse">
              <Upload className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm font-medium">Upload PDFs</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border animate-pulse" style={{animationDelay: '1s'}}>
              <Brain className="w-8 h-8 text-secondary mb-2" />
              <div className="text-sm font-medium">AI Analysis</div>
            </div>
            
            <div className="absolute top-1/2 -left-8 bg-card rounded-xl shadow-lg p-4 border border-border animate-pulse" style={{animationDelay: '2s'}}>
              <Calendar className="w-8 h-8 text-success mb-2" />
              <div className="text-sm font-medium">Smart Planning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
