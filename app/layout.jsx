import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// components
import Navbar from './components/Navbar'



export const metadata = {
  title: 'susiloharjo.web.id',
  description: 'Susiloharjo website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="p-5 mb-10">{children}</div>
      </body>
    </html>
  );
}
