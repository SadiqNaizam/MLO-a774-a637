import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils'; // For conditional class names
import { ScrollArea } from '@/components/ui/scroll-area';
// Example icons
import { Home, ShoppingCart, Users, BarChart2, Settings, Package } from 'lucide-react';

// Potentially import header, sidebar, footer if needed

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType; // Lucide icon component
  disabled?: boolean;
}

// Example navigation items for a UserDashboardPage sidebar
const dashboardNavItems: NavItem[] = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/dashboard/products', label: 'Products', icon: Package }, // Example
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/dashboard/customers', label: 'Customers', icon: Users },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
  navItems?: NavItem[]; // Allow passing custom nav items
  appName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className, navItems = dashboardNavItems, appName = "MyApplication" }) => {
  console.log("Rendering Sidebar");
  const location = useLocation();

  return (
    <aside className={cn("hidden border-r bg-muted/40 md:block", className)}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            {/* <YourLogoIcon className="h-6 w-6" /> Replace with your actual logo component or SVG */}
            <span className="">{appName}</span>
          </Link>
          {/* Optional: Notification bell or other icons */}
        </div>
        <div className="flex-1">
          <ScrollArea className="h-[calc(100vh-4rem-60px)]"> {/* Adjust height based on header and footer */}
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                      isActive ? "bg-muted text-primary" : "text-muted-foreground",
                      item.disabled && "pointer-events-none opacity-50"
                    )}
                    aria-disabled={item.disabled}
                    tabIndex={item.disabled ? -1 : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>
        </div>
        {/* Optional: Fixed content at the bottom of the sidebar */}
        {/* <div className="mt-auto p-4">
            <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                        Unlock all features and get unlimited access to our support team.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                    <Button size="sm" className="w-full">
                        Upgrade
                    </Button>
                </CardContent>
            </Card>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;