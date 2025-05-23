import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrdersContent from "@/components/orders/OrdersContent";

export default async function OrdersPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return <OrdersContent />;
}
