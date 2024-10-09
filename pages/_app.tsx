import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'

const Web3ModalProvider = dynamic(
  () => import('@/components/Web3ModalProvider'), // This is the Web3ModalProvider
  { ssr: false } // This is the server side rendering
)

export default function App({ Component, pageProps }: AppProps) { // This is the App component
  return (
    <Web3ModalProvider>
      <Component {...pageProps} />
    </Web3ModalProvider>
  )
}
