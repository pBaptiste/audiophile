import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import DataProvider from './context/data-provider'
import Navbar from './components/navbar'
import Footer from './components/footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Explore a wide range of high-quality audio technologies at our e-commerce store. Find the latest headphones, speakers, and earphones. Enhance your audio experience with cutting-edge technology and immersive sound. Shop now for the best deals on top brands in the audio industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <DataProvider>
          <Navbar />
          {children}
        </DataProvider>
        <Footer />
      </body>
    </html>
  )
}
