import React from "react";
import ContaHeader from "@/components/conta/conta-header";

export default async function LayoutConta(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  )
}
