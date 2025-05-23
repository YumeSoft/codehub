// app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeHub',
  description: 'My awesome Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
