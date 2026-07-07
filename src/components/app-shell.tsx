"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  if (isStudioRoute) {
    return <main className="min-h-screen w-full bg-white">{children}</main>;
  }

  return (
    <>
      <div className="fixed inset-0 border-20 border-white pointer-events-none z-50"></div>
      <div
        className="bg-primary"
        style={{
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <main className="relative">{children}</main>
      </div>
    </>
  );
}
