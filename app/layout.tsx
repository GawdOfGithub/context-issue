import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from './contexts/contextProvider'

const inter = Inter({ subsets: [] })

export const metadata: Metadata = {
  title: 'Next with Context',
  description: 'This app was  created with the power of scripting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </head>
     <Provider>
      <body className={inter.className}>
          {children}
      </body>
      </Provider>
    </html>
  )
}
