import Link from "next/link";
import { signOut } from "next-auth/react";
import { HomeIcon, QueueListIcon } from "@heroicons/react/24/outline";

export default function DashboardNav() {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-8">
        <Link href="/dashboard" className="text-xl font-bold">
          Pizza Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <QueueListIcon className="h-5 w-5" />
            Orders
          </Link>
        </div>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
      >
        Sign Out
      </button>
    </nav>
  );
}
