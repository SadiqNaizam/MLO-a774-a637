import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Menu, UserCircle, LogOut, Settings } from 'lucide-react'; // Example icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Potentially import header, sidebar, footer if needed

interface HeaderProps {
  onToggleSidebar?: () => void; // Optional: For mobile sidebar toggle
  appName?: string;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, appName = "MyApplication" }) => {
  console.log("Rendering Header");

  // Placeholder user data - replace with actual auth state
  const isAuthenticated = true; // Example, replace with actual auth check
  const userName = "User Name"; // Example, replace with actual user name

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            {/* <YourLogoIcon className="h-6 w-6" /> Replace with your actual logo component or SVG */}
            <span className="hidden font-bold sm:inline-block">
              {appName}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {/* Example dashboard navigation links */}
            <Link
              to="/dashboard"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/orders" // Example link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Orders
            </Link>
            <Link
              to="/dashboard/settings" // Example link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Settings
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        {onToggleSidebar && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Search (optional) */}
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input type="search" placeholder="Search..." className="md:w-64" />
          </div> */}
          <nav className="flex items-center">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <UserCircle className="h-6 w-6" /> {/* Or Avatar component */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userName}</p>
                      {/* <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p> */}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/profile"> {/* Example link */}
                      <UserCircle className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                     <Link to="/dashboard/settings"> {/* Example link */}
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem> {/* onClick for logout */}
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;