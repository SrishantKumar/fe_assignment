"use client";

import { useEffect } from "react";
import { useOrdersStore } from "@/store/orders";
import { orders } from "@/data/orders";
import DashboardStats from "@/components/dashboard/DashboardStats";
import OrderFilters from "@/components/orders/OrderFilters";
import OrdersTable from "@/components/orders/OrdersTable";

export default function OrdersContent() {
  const { filteredOrders, setFilter, setSort } = useOrdersStore();

  // Initialize the store with orders data
  useEffect(() => {
    useOrdersStore.setState({ orders });
  }, []);

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg">
        <div className="absolute left-0 top-0 -z-10 h-48 w-48 rounded-full bg-blue-400 opacity-10 blur-[64px] filter"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-48 w-48 rounded-full bg-purple-400 opacity-10 blur-[64px] filter"></div>
        
        <h2 className="mb-6 text-lg font-semibold text-gray-900">Orders Overview</h2>
        <DashboardStats orders={orders} />
      </div>

      {/* Filters Section */}
      <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg">
        <div className="absolute left-0 top-0 -z-10 h-32 w-32 rounded-full bg-green-400 opacity-10 blur-[64px] filter"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-40 w-40 rounded-full bg-yellow-400 opacity-10 blur-[64px] filter"></div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filter Orders</h2>
          <p className="mt-1 text-sm text-gray-600">Find orders by status, date, or search terms</p>
        </div>
        
        <OrderFilters />
      </div>

      {/* Orders Table Section */}
      <div className="relative overflow-hidden rounded-2xl bg-white/90 shadow-xl backdrop-blur-lg">
        <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-pink-400 opacity-10 blur-[64px] filter"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-40 w-40 rounded-full bg-blue-400 opacity-10 blur-[64px] filter"></div>
        
        <div className="p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Recent Orders</h2>
          <OrdersTable orders={filteredOrders} />
        </div>
      </div>
    </div>
  );
}
