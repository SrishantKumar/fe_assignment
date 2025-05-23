export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: OrderStatus;
}

export const orders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2025-05-23 10:30',
    status: 'Preparing',
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2025-05-23 10:15',
    status: 'Pending',
  },
  {
    id: 'PZA003',
    customerName: 'Mike Johnson',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2025-05-23 09:45',
    status: 'Out for Delivery',
  },
  {
    id: 'PZA004',
    customerName: 'Sarah Wilson',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2025-05-23 09:30',
    status: 'Delivered',
  },
  {
    id: 'PZA005',
    customerName: 'Tom Brown',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2025-05-23 09:15',
    status: 'Cancelled',
  },
];
