import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import AuthProvider from "@/components/auth/AuthProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizza Dashboard",
  description: "A modern dashboard for managing pizza orders",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const headersList = headers();

  return (
    <html lang="en" className="h-full">
      <body className={`${geist.className} min-h-full antialiased bg-gray-50`}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
