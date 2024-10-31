'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  base,sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from 'react';



  const config = getDefaultConfig({
  appName: 'XENTRO',
  projectId: '0.0.1',
  chains: [ sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

 const queryClient = new QueryClient();

 const RainbowKitContexts = ({children}:{children:ReactNode}) => {
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );
  };

  export default RainbowKitContexts