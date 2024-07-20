import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
