import React, { useState } from 'react';
import Header from '@/components/layout/Header'; // Custom Header
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

const UserDashboardPage = () => {
  console.log('UserDashboardPage loaded');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const appName = "MyApp"; // Or get from config/context

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header 
        onToggleSidebar={() => setIsMobileMenuOpen(true)} 
        appName={appName} 
      />
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <Sidebar 
          className="hidden w-64 flex-col border-r bg-background md:flex" 
          appName={appName} 
        />

        {/* Mobile Sidebar in a Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-64">
            {/* Ensure Sidebar component is flexible enough to render correctly here */}
            <Sidebar 
              className="flex h-full flex-col bg-background" // Override default display for sheet
              appName={appName} 
            />
          </SheetContent>
        </Sheet>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard Overview</h1>
          
          {/* Stats Cards Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder for other dashboard elements */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>An overview of recent actions in your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>User John Doe signed up.</li>
                  <li>Order #12345 was placed.</li>
                  <li>Product "Super Widget" updated.</li>
                </ul>
                <Button variant="outline" className="mt-4">View All Activity</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Perform common tasks quickly.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button>Add New Product</Button>
                <Button variant="secondary">Manage Orders</Button>
                <Button variant="outline">View Reports</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboardPage;