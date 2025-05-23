import { PizzaOrder } from "@/data/orders";
import StatusBadge from "./StatusBadge";
import { format } from "date-fns";

interface OrdersTableProps {
  orders: PizzaOrder[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Pizza Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Order Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {order.customerName}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {order.pizzaType}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {order.quantity}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {format(new Date(order.orderDate), "yyyy-MM-dd HH:mm")}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
