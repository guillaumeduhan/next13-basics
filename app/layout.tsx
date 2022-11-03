import { Suspense } from 'react'
import Header from './components/Header'
import Loading from './components/Loading'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next 13 Basics</title>
        <meta name="description" content="Next 13 Basics by @codewithguillaume" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="text-white bg-slate-900">
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
