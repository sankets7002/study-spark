import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            SmartStudy
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/auth/login">Sign In</Link>
          </Button>
          <Button asChild variant="default">
            <Link to="/auth/register">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
