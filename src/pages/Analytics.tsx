import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

export default function Analytics() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Insights into your learning progress and performance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Study Time Analytics</CardTitle>
              <CardDescription>
                Time spent on different topics
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-16">
              <BarChart className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-sm text-muted-foreground">
                No data available yet
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Trends</CardTitle>
              <CardDescription>
                Your learning progress over time
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-16">
              <BarChart className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-sm text-muted-foreground">
                Start studying to see your trends
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Topic Performance</CardTitle>
            <CardDescription>
              How well you're doing in different subjects
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-16">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">
              Complete topics to see your performance metrics
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
