"use client";

import React, { ReactNode } from "react"; // This is the React library
import { config, projectId } from "@/config"; // This is the wagmiConfig
import { createWeb3Modal } from "@web3modal/wagmi/react"; // This is the Web3Modal library
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // This is the React Query library
import { WagmiProvider } from "wagmi"; // This is the Wagmi library

// Setup queryClient
const queryClient = new QueryClient(); // This is the React Query client

if (!projectId) throw new Error("Project ID is not defined"); // This is the project ID

// Create modal
createWeb3Modal({
  wagmiConfig: config, // This is the wagmiConfig
  projectId, // This is the project ID
  themeMode: "dark", // This is the theme mode
  themeVariables: {
    "--w3m-accent": "rgba(19, 182, 111, 1)", // Blue accent color
    "--w3m-font-family": "Arial, sans-serif", // Optional: Customize font family if needed
  },
});

export default function Web3ModalProvider({ children }: { children: ReactNode }) { // This is the Web3ModalProvider
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}