import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Upload, BookOpen, Calendar, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your study progress and manage your learning
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Study Streak
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0 days</div>
              <p className="text-xs text-muted-foreground">
                Keep learning to build your streak!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Progress
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0%</div>
              <p className="text-xs text-muted-foreground">
                No active study plans yet
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Topics Covered
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Start uploading to track topics
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Study Hours
              </CardTitle>
              <Upload className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0h</div>
              <p className="text-xs text-muted-foreground">
                Time invested in learning
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Study Plan</CardTitle>
            <CardDescription>
              Your scheduled topics for today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="mb-4">No study plan created yet</p>
              <Button asChild>
                <Link to="/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Study Material
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>
              Track your completion across all study plans
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-medium">0%</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <p className="text-sm text-muted-foreground">
              Upload your first study material to get started
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
