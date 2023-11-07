import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import openSans from '@/fonts/openSans'
import Header from './Header'

export const metadata: Metadata = {
  title: 'Orlando Silva',
  description: 'Curated Art Portfolio of Orlando Silva',
}

export default function RootLayout({children}: { children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`max-w-screen relative flex flex-col ${openSans.light}`}>
        {children}
      </body>
    </html>
  )
}
