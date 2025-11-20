import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = emailSchema.parse({ email: email.trim() });
      setLoading(true);

      const redirectUrl = `${window.location.origin}/auth/reset-password`;

      const { error } = await supabase.auth.resetPasswordForEmail(
        validated.email,
        {
          redirectTo: redirectUrl,
        }
      );

      if (error) {
        toast.error(error.message);
      } else {
        setSent(true);
        toast.success("Password reset email sent! Check your inbox.");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <AuthLayout>
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Check your email</h1>
            <p className="text-muted-foreground">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link to="/auth/login">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Forgot password?</h1>
          <p className="text-muted-foreground">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send reset link"}
          </Button>
        </form>

        <Button asChild variant="ghost" className="w-full">
          <Link to="/auth/login">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </Button>
      </div>
    </AuthLayout>
  );
}
