"use client"

import Head from "next/head"
import '../scss/global.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
import { CartProvider } from './../utils/CartContext/CartContext';
import CookieBanner from './../utils/CookieBanner/CookieBanner';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['100','300','400','700','900'],
  subsets: ['latin-ext'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning={true} className={lato.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true}>
        <CartProvider>
          {children}
          <CookieBanner />
        </CartProvider>
        <SpeedInsights />
        <Analytics />
      </body>
      {/* <GoogleAnalytics gaId="G-606GP5V2VM" /> */}
    </html>
  )
}