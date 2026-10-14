"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    router.replace("/chat");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Welcome to AI Travel Agent</h1>
      <p className="text-lg text-gray-600">Your personal AI travel assistant</p>
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={handleLogin}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
        >
          Login
        </Button>
        <Button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition">
          Signup
        </Button>
      </div>
    </div>
  );
}
