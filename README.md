# DBRO Scaffold

This is a Next.js project bootstrapped with `create-next-app`, customized for the Decentral Bros (DBRO) project. It includes Web3 integration, a responsive header with social icons, and other custom components.

## Getting Started

Follow these steps to set up the DBRO scaffold on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-Web3/dbro-scaffold.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dbro-scaffold
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Set up your environment variables:
   - Copy the `.env.example` file to `.env.local`
   - Update the values in `.env.local` with your own configuration

5. Start the development server:
   ```bash
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `components/`: Contains reusable React components (e.g., Header, Footer, SocialIcons)
- `pages/`: Next.js pages and API routes
- `styles/`: Global styles and Tailwind CSS configuration
- `public/`: Static assets (images, fonts, etc.)

## Key Features

- Web3 integration with wallet connection (configured for Base mainnet)
- Responsive header with navigation and social icons
- Custom styling using Tailwind CSS
- TypeScript support for improved developer experience

## Customization

You can start customizing the project by modifying the following files:

- `pages/index.tsx`: The main landing page
- `components/Header.tsx`: The site header with navigation and wallet connection
- `components/SocialIcons.tsx`: Social media icons and links
- `styles/globals.css`: Global styles and Tailwind CSS imports

## Network Configuration

This scaffold is set up to work with the Base mainnet by default. If you want to change the network:

1. Modify the `wagmi.config.ts` file to update the chain configuration.
2. Update the `.env.local` file with the correct RPC URL for your chosen network.

To get an RPC URL, you can sign up for a free account at [Alchemy](https://www.alchemy.com/). Alchemy provides Web3 APIs and allows you to create endpoints for various networks.

## Adding Support for Additional Wallets

To add support for more wallets:

1. Update the Web3Modal configuration in your project.
2. Modify the `wagmi.config.ts` file to include the new wallet connectors.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - a utility-first CSS framework.
- [Web3Modal](https://web3modal.com/) - a library to help with wallet connections.
- [wagmi](https://wagmi.sh/) - a collection of React Hooks for Ethereum.
- [Base](https://base.org/) - learn about the Base network.
- [Alchemy](https://www.alchemy.com/) - Web3 development platform and API provider.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

We welcome contributions to improve the DBRO scaffold. Please feel free to submit issues or pull requests to our GitHub repository.

## License

[MIT License](LICENSE) $DBRO
