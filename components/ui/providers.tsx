"use client";

import { MenuContextProvider } from "@/app/providers/MenuContextProvider";
import QueryProvider from "@/app/providers/QueryProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <QueryProvider>
        <MenuContextProvider>{children}</MenuContextProvider>
      </QueryProvider>
    </NuqsAdapter>
  );
}
