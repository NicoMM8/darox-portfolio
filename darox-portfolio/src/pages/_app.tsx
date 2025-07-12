import '../estilos/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head'
import StarsBackground from '../components/StarsBackground' 

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <StarsBackground /> {/* <-- Añade aquí */}
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}