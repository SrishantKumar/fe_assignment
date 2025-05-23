import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">
        Hello, {session?.user?.name || "User"}!
      </h1>
      <p className="mt-2 text-gray-600">
        Welcome to your pizza dashboard. Use the navigation above to view and manage orders.
      </p>
    </div>
  );
}
