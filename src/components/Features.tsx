import { Card } from "@/components/ui/card";
import { Upload, Brain, Calendar, BarChart3, CheckCircle2, Zap } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Upload",
    description: "Upload PDFs, images, or paste text. Our OCR technology extracts content instantly with precision.",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced AI breaks down your syllabus into structured topics, subtopics, and learning objectives.",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    title: "Custom Study Plans",
    description: "Generate personalized 21-day plans or customize duration based on your needs and deadlines.",
    color: "text-success",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visual dashboards show completion rates, pending work, and total study hours at a glance.",
    color: "text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Task Management",
    description: "Check off completed tasks, maintain study streaks, and build consistent learning habits.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Smart Insights",
    description: "Get intelligent recommendations based on your progress and learning patterns.",
    color: "text-success",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform how you study and achieve your academic goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
