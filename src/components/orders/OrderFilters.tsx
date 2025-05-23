"use client";

import { useOrdersStore } from "@/store/orders";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { OrderStatus } from "@/data/orders";

export default function OrderFilters() {
  const { filters, setFilter } = useOrdersStore();

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />
        <input
          type="text"
          placeholder="Search orders..."
          value={filters.search}
          onChange={(e) => setFilter({ search: e.target.value })}
          className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm text-gray-900 shadow-sm transition-all placeholder:text-gray-500 hover:border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="status" className="text-sm font-medium text-gray-600">
          Status:
        </label>
        <select
          id="status"
          value={filters.status}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-all hover:border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={(e) => setFilter({ status: e.target.value as OrderStatus | "All" })}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Preparing">Preparing</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
}
