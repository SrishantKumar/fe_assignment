"use client";

import { useState, useMemo } from "react";
import { orders, OrderStatus } from "@/data/orders";
import OrdersTable from "@/components/orders/OrdersTable";

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");
  const [sortBy, setSortBy] = useState<"orderDate" | "id">("orderDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...orders];

    // Apply status filter
    if (statusFilter !== "All") {
      result = result.filter((order) => order.status === statusFilter);
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "orderDate") {
        return sortOrder === "asc"
          ? new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
          : new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
      } else {
        return sortOrder === "asc"
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id);
      }
    });

    return result;
  }, [statusFilter, sortBy, sortOrder]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-semibold">Pizza Orders</h1>
        <div className="flex flex-wrap gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "All")}
            className="rounded-lg border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [newSortBy, newSortOrder] = e.target.value.split("-") as [
                "orderDate" | "id",
                "asc" | "desc"
              ];
              setSortBy(newSortBy);
              setSortOrder(newSortOrder);
            }}
            className="rounded-lg border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="orderDate-desc">Latest Orders First</option>
            <option value="orderDate-asc">Oldest Orders First</option>
            <option value="id-asc">Order ID (A-Z)</option>
            <option value="id-desc">Order ID (Z-A)</option>
          </select>
        </div>
      </div>
      <OrdersTable orders={filteredAndSortedOrders} />
    </div>
  );
}
