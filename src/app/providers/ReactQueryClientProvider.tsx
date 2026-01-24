"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ReactQueryClientProps {
  children: ReactNode;
}

const queryCLient = new QueryClient();
const ReactQueryClientProvider: FC<ReactQueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
