import './globals.css'
import { Public_Sans } from 'next/font/google'

const inter = Public_Sans({ subsets: ['latin'], weight: "200"  })

export const metadata = {
  title: 'SportsCraft',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
