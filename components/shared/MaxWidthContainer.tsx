import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MaxWidthContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto max-w-7xl w-full px-3 md:px-6 py-4", className)}
    >
      {children}
    </div>
  );
}
