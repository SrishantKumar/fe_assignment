export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export type PizzaOrder = {
  id: number;
  orderDate: Date;
  status: OrderStatus;
  quantity: number;
  customerName: string;
  pizzaType: string;
};

const indianNames = [
  "Aarav Patel",
  "Aditi Sharma",
  "Arjun Kumar",
  "Diya Verma",
  "Ishaan Singh",
  "Kavya Reddy",
  "Neha Gupta",
  "Pranav Mehta",
  "Riya Desai",
  "Rohan Malhotra",
  "Sanya Kapoor",
  "Ved Agarwal",
  "Zara Khan",
  "Vihaan Choudhury",
  "Ananya Iyer"
];

const pizzaTypes = [
  "Tandoori Paneer",
  "Chicken Tikka",
  "Veggie Supreme",
  "Spicy Indian",
  "Butter Chicken",
  "Paneer Makhani"
];

// Generate orders for the last 7 days
const generateOrders = () => {
  const orders: PizzaOrder[] = [];
  const statuses = ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"] as const;
  let id = 1;

  // Generate 2-4 orders for each of the last 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const numOrders = Math.floor(Math.random() * 3) + 2; // 2-4 orders per day

    for (let j = 0; j < numOrders; j++) {
      // Distribute throughout the day (9 AM to 9 PM)
      const hours = Math.floor(Math.random() * 12) + 9;
      const minutes = Math.floor(Math.random() * 60);
      date.setHours(hours, minutes, 0, 0);

      orders.push({
        id: id++,
        orderDate: new Date(date.getTime()),
        status: statuses[Math.floor(Math.random() * 5)],
        quantity: Math.floor(Math.random() * 3) + 1, // 1-3 pizzas per order
        customerName: indianNames[Math.floor(Math.random() * indianNames.length)],
        pizzaType: pizzaTypes[Math.floor(Math.random() * pizzaTypes.length)],
      });
    }
  }

  return orders.sort((a, b) => 
    b.orderDate.getTime() - a.orderDate.getTime()
  );
};

export const orders = generateOrders();
