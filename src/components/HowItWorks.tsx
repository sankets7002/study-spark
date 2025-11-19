import { Card } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Upload Your Content",
    description: "Upload PDFs, images, or paste your syllabus text. Our OCR technology handles scanned documents perfectly.",
  },
  {
    step: "02",
    title: "AI Processing",
    description: "Our AI analyzes and structures your content into organized topics and subtopics with estimated difficulty.",
  },
  {
    step: "03",
    title: "Get Your Plan",
    description: "Receive a personalized study plan optimized for your timeline, with daily tasks and milestones.",
  },
  {
    step: "04",
    title: "Track & Achieve",
    description: "Complete tasks, track progress, maintain streaks, and reach your goals with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your study routine
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <Card className="p-6 bg-gradient-card border-border hover:shadow-md transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
