import { OrderStatus } from "@/data/orders";
import clsx from "clsx";

const statusStyles: Record<OrderStatus, { bg: string; text: string }> = {
  Pending: { bg: "bg-yellow-100", text: "text-yellow-800" },
  Preparing: { bg: "bg-blue-100", text: "text-blue-800" },
  "Out for Delivery": { bg: "bg-purple-100", text: "text-purple-800" },
  Delivered: { bg: "bg-green-100", text: "text-green-800" },
  Cancelled: { bg: "bg-red-100", text: "text-red-800" },
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const style = statusStyles[status];
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium",
        style.bg,
        style.text
      )}
    >
      {status}
    </span>
  );
}
