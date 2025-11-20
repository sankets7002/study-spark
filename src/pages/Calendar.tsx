import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

export default function Calendar() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Calendar</h1>
          <p className="text-muted-foreground">
            View your study schedule and upcoming topics
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Study Schedule</CardTitle>
            <CardDescription>
              Track your daily learning activities
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-16">
            <CalendarIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">
              Calendar view will be available once you create a study plan
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
