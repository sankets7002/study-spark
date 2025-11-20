import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-primary items-center justify-center p-12">
        <div className="max-w-md text-center">
          <Link to="/" className="inline-block mb-8">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Smart Study Panel
            </h1>
          </Link>
          <p className="text-xl text-primary-foreground/90 mb-6">
            Transform your study materials into structured learning paths
          </p>
          <ul className="text-left space-y-4 text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📄</span>
              <span>Upload PDFs, images, or paste text</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <span>AI-powered topic extraction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📅</span>
              <span>Custom study plans & progress tracking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};
