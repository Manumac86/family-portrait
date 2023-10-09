import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Providers from './providers/Providers'

export const metadata: Metadata = {
  title: 'Family Portrait App',
  description: 'Made with :heart: by @manumac86'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body className='dark:bg-gray-900 dark:text-gray-200'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
