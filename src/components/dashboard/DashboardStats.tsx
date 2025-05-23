"use client";

import { Line } from "react-chartjs-2";
import { PizzaOrder } from "@/data/orders";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DashboardStatsProps {
  orders: PizzaOrder[];
}

function DashboardStats({ orders }: DashboardStatsProps) {
  // Calculate stats
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((order) => order.status === "Pending").length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.quantity * 10, 0); // $10 per pizza

  // Create sample data for the last 7 days
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toLocaleDateString();
  }).reverse();

  // Initialize order counts for each day
  const ordersByDate = last7Days.reduce((acc, date) => {
    acc[date] = 0;
    return acc;
  }, {} as Record<string, number>);

  // Add actual order counts
  orders.forEach((order) => {
    const date = new Date(order.orderDate).toLocaleDateString();
    if (ordersByDate.hasOwnProperty(date)) {
      ordersByDate[date] += 1;
    }
  });

  const chartData = {
    labels: Object.keys(ordersByDate),
    datasets: [
      {
        label: "Orders",
        data: Object.values(ordersByDate),
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgb(99, 102, 241)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 transition-all hover:shadow-lg hover:translate-y-[-2px]">
          <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white opacity-20"></div>
          <h3 className="text-sm font-medium text-blue-100">Total Orders</h3>
          <p className="mt-2 text-3xl font-bold text-white">{totalOrders}</p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 transition-all hover:shadow-lg hover:translate-y-[-2px]">
          <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white opacity-20"></div>
          <h3 className="text-sm font-medium text-purple-100">Pending Orders</h3>
          <p className="mt-2 text-3xl font-bold text-white">{pendingOrders}</p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 transition-all hover:shadow-lg hover:translate-y-[-2px]">
          <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white opacity-20"></div>
          <h3 className="text-sm font-medium text-green-100">Total Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            ${totalRevenue}
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all hover:shadow-lg">
        <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-indigo-400 opacity-10 blur-3xl filter"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 rounded-full bg-purple-400 opacity-10 blur-3xl filter"></div>
        
        <h3 className="mb-4 text-sm font-medium text-gray-600">
          Orders Overview (Last 7 Days)
        </h3>
        <div className="h-64">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  padding: 12,
                  titleFont: {
                    size: 14,
                    family: "'Geist', sans-serif",
                  },
                  bodyFont: {
                    size: 13,
                    family: "'Geist', sans-serif",
                  },
                  displayColors: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                  },
                  ticks: {
                    stepSize: 1,
                    font: {
                      size: 12,
                      family: "'Geist', sans-serif",
                    },
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    maxRotation: 0,
                    font: {
                      size: 12,
                      family: "'Geist', sans-serif",
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
