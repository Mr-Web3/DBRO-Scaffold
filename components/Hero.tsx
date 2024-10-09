"use client";
import { useAccount, useBalance } from 'wagmi';
import Image from 'next/image';

const Hero = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <div className="flex flex-col items-center justify-center text-white py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Decentral Bros | Scaffold App</h1>
        <p className="text-xl">Empowering the future of decentralized building.</p>
      </div>
      {address && (
        <div className="flex flex-row justify-between items-center w-full max-w-2xl mt-6 px-4 font-semibold">
          <p>Address: <a className='text-primary' href={`https://sepolia.etherscan.io/address/${address}`} target='_blank' rel="noopener noreferrer">{address.slice(0, 6)}...{address.slice(-4)}</a></p>
          <p>My Balance: <a className='text-primary'>{balance ? parseFloat(balance.formatted).toFixed(4) : '0'} {balance?.symbol}</a></p>
        </div>
      )}
      <div className="relative w-2/3 md:w-1/3 aspect-square">
        <Image
          src="/dbroBanner.png"
          alt="Decentral Bros Hero"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;