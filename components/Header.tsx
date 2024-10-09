"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect, useBalance } from 'wagmi'
import SocialIcons from './SocialIcons';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({ address })

  const navItems = [ // This is the navigation items add other nav pages here as you build them out under the pages folder.
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tokenomics", label: "Tokenomics" },
  ];

  return (
    <header className="bg-black text-white font-orbitron px-4 w-full border-b border-secondary-color relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-16 h-20 md:w-16 relative">
          <Image
            src="/dbro.jpg"
            alt="Decentral Bros Logo"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            priority
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 font-bold mr-4">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`${
                      isActive ? "text-primary" : "hover:primary"
                    } py-1.5 px-0 md:px-1 text-lg font-bold`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Social Icons */}
          <div className="mr-4">
            <SocialIcons />
          </div>
          
          {/* Wallet Connection */}
          <div className="flex items-center">
            {isConnected ? (
              <button 
                onClick={() => disconnect()}
                className="bg-red-500 text-black px-4 py-2 rounded-full font-semibold"
              >
                Disconnect
              </button>
            ) : (
              <button 
                onClick={() => open()}
                className="bg-primary text-black px-4 py-2 rounded-full font-semibold"
              >
                Connect
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center absolute top-full left-0 w-full bg-black border-t border-secondary-color z-50`}
      >
        <ul className="flex flex-col space-y-4 p-4 w-full font-orbitron font-bold">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="w-full text-center">
                <Link
                  href={href}
                  className={`block w-full ${
                    isActive ? "text-main-pink" : "hover:text-main-pink"
                  } py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Social Icons for Mobile */}
        <div className="mb-4">
          <SocialIcons />
        </div>
        
        {/* Mobile Wallet Connection */}
        <div className="flex flex-col items-center w-full p-4">
          {isConnected && address && (
            <>
              <span className="mb-2 text-primary">
                Address: <a className="text-white" href={`https://sepolia.etherscan.io/address/${address}`} target='_blank' rel="noopener noreferrer">{address.slice(0, 6)}...{address.slice(-4)}</a>
              </span>
              <span className="mb-4 text-primary">
                Balance: <a className="text-white" href={`https://sepolia.etherscan.io/address/${address}`} target='_blank' rel="noopener noreferrer">{balance?.formatted.slice(0, 5)} {balance?.symbol}</a>
              </span>
            </>
          )}
          {isConnected ? (
            <button 
              onClick={() => disconnect()}
              className="bg-red-500 text-black px-4 py-2 rounded w-full"
            >
              Disconnect
            </button>
          ) : (
            <button 
              onClick={() => open()}
              className="bg-blue-500 text-black px-4 py-2 rounded w-full"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;