import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          © 2024{' '}
          <Link href="https://decentralbros.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
            Decentral Bros
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;