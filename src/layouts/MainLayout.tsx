import { ReactNode, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User as UserIcon, LayoutDashboard, Upload, Calendar, BarChart, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { NavLink } from "@/components/NavLink";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/auth/login");
    }
  };

  const getUserInitials = () => {
    if (!user?.email) return "U";
    return user.email.charAt(0).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Smart Study Panel</span>
            </Link>
            
            <nav className="hidden md:flex gap-6">
              <NavLink 
                to="/dashboard" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                <LayoutDashboard className="h-4 w-4 inline mr-1" />
                Dashboard
              </NavLink>
              <NavLink 
                to="/upload" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                <Upload className="h-4 w-4 inline mr-1" />
                Upload
              </NavLink>
              <NavLink 
                to="/study-plan" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                <BookOpen className="h-4 w-4 inline mr-1" />
                Study Plan
              </NavLink>
              <NavLink 
                to="/calendar" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                <Calendar className="h-4 w-4 inline mr-1" />
                Calendar
              </NavLink>
              <NavLink 
                to="/analytics" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                <BarChart className="h-4 w-4 inline mr-1" />
                Analytics
              </NavLink>
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">My Account</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        {children}
      </main>
    </div>
  );
};
