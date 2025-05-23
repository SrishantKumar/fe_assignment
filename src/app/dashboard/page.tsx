import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="relative overflow-hidden rounded-3xl bg-white/90 p-12 shadow-xl backdrop-blur-lg transition-all hover:shadow-2xl">
        {/* Background decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-48 w-48 rounded-full bg-blue-400 opacity-10 blur-[64px] filter"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-48 w-48 rounded-full bg-purple-400 opacity-10 blur-[64px] filter"></div>
        
        <div className="relative space-y-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl ring-4 ring-purple-500/10">
            {session?.user?.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || "User"}
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>

          <div className="text-center">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              Hello, {session?.user?.name || session?.user?.email || "User"}!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to your Pizza Dashboard
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/dashboard/orders"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white transition-all hover:shadow-lg hover:translate-y-[-2px] active:scale-95"
            >
              <span>View Your Orders</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
