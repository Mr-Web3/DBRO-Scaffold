import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaTelegram } from 'react-icons/fa';

const socialLinks = [
  { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/DecentralBros_' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Mr-Web3' },
  { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/DecentralBros' },
//   { name: 'Discord', icon: FaDiscord, url: 'https://discord.gg/your_discord_invite' },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors duration-200"
        >
          <social.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;