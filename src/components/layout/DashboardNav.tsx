"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { HomeIcon, QueueListIcon } from "@heroicons/react/24/outline";

export default function DashboardNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white/90 px-4 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <Link
          href="/dashboard"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          🍕 PizzaHub
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${isActive("/dashboard") 
              ? "bg-gray-100 text-gray-900" 
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/dashboard/orders"
            className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${isActive("/dashboard/orders") 
              ? "bg-gray-100 text-gray-900" 
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
          >
            <QueueListIcon className="h-5 w-5" />
            Orders
          </Link>
        </div>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 text-sm font-medium text-white transition-all hover:translate-y-[-1px] hover:shadow-lg"
      >
        Sign Out
      </button>
    </nav>
  );
}
