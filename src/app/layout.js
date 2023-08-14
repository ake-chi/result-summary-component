import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Result Summary Component',
  description: 'Result Summary Component - Frontend Mentor Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}
