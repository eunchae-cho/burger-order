import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RecoilProvider from "@/lib/providers/RecoilProvider";
import Header from "@/components/layout/Header";
import {Toaster} from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oh Burger',
  description: 'burger-order',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
      <RecoilProvider>
          <Toaster />
          <Header />
              {children}
      </RecoilProvider>
      </body>
    </html>
  )
}
