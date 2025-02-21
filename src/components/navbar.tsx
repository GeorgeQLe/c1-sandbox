import Link from 'next/link';

import { Bell, LayoutDashboard } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-bold text-xl">C1 Sandbox</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/admin/dashboard">
                    <button className="hover:bg-gray-100 p-2 rounded-full">
                      <LayoutDashboard className="size-6"/>
                    </button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Admin Dashboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <button className="hover:bg-gray-100 p-2 rounded-full">
              <Bell className="size-6"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};