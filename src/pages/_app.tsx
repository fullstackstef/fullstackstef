import '@/styles/globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </Layout>
  )
}
