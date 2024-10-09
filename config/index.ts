import { injected, coinbaseWallet, walletConnect } from "wagmi/connectors"; // wallets you want to use
import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains"; // Networks you want to use

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID; // This gets your project ID from the .env file
const RPC = process.env.NEXT_PUBLIC_RPC; // This gets your RPC URL from the .env file

if (!projectId) throw new Error("Project ID is not defined");
if (!RPC) throw new Error("RPC URL is not defined");

const metadata = {
  name: "Decentral Bros",
  description: "Decentral Bros | Live Workshop on Base", // Description of your project
  url: "https://workshop.decentralbros.xyz", // origin must match your domain & subdomain
  icons: ["https://workshop.decentralbros.xyz/images/dbro.png"], // icon of your project
};

// Create your own wagmiConfig
export const config = createConfig({ // This is the wagmiConfig 
  chains: [base], // This is the network you want to use
  transports: { // This is the RPC you want to use
    [base.id]: http(RPC),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }), // This is the wallet you want to use
    injected({ shimDisconnect: true }), // This is the wallet you want to use
    coinbaseWallet({
      appName: metadata.name, // This is the name of your project
      appLogoUrl: metadata.icons[0], // This is the icon of your project
      preference: "eoaOnly", // This is the wallet you want to use
    }),
  ],
  ssr: true, // This is the server side rendering
});