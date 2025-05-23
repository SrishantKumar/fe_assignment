import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInButton from "@/components/auth/SignInButton";

export default async function SignInPage() {
  const session = await getServerSession();
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to Pizza Dashboard</h1>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>
        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
