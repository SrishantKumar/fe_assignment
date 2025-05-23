import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInButton from "@/components/auth/SignInButton";

export default async function SignInPage() {
  const session = await getServerSession();
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-pink-100 px-4">
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-0 -z-10 h-32 w-32 -translate-x-1/2 transform rounded-full bg-blue-400 opacity-10 blur-3xl filter"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-40 w-40 rounded-full bg-pink-400 opacity-10 blur-3xl filter"></div>
      <div className="absolute left-0 top-1/2 -z-10 h-36 w-36 -translate-y-1/2 transform rounded-full bg-yellow-400 opacity-10 blur-3xl filter"></div>
      
      {/* Main card */}
      <div className="w-full max-w-md transform space-y-8 rounded-2xl bg-white/80 p-10 shadow-xl backdrop-blur-lg transition-all hover:shadow-2xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome to Pizza Dashboard</h1>
          <p className="mt-3 text-gray-600">Manage your orders with style</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white/80 px-4 text-gray-500">Sign in with</span>
          </div>
        </div>

        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
