import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function VerifyEmail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setEmail(session.user.email || "");
        if (session.user.email_confirmed_at) {
          navigate("/dashboard");
        }
      } else {
        navigate("/auth/login");
      }
    });
  }, [navigate]);

  const resendVerification = async () => {
    if (!email) return;

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Verification email sent!");
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Mail className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="text-muted-foreground">
            We've sent a verification link to
          </p>
          <p className="font-medium">{email}</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Click the link in the email to verify your account.
          </p>
          
          <Button onClick={resendVerification} variant="outline" className="w-full">
            Resend verification email
          </Button>

          <Button
            onClick={() => navigate("/auth/login")}
            variant="ghost"
            className="w-full"
          >
            Back to login
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
