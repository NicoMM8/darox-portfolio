import '../estilos/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head'
import StarsBackground from '../components/StarsBackground'
import React, { useState } from "react";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [footerInView, setFooterInView] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <StarsBackground />
      <Component {...pageProps} />
      {/* Difuminado solo si el footer NO está visible */}
      {!footerInView && (
        <div className="blur-bottom-overlay" />
      )}
      <WhatsAppButton />
      <Footer onInViewChange={setFooterInView} />
      <SpeedInsights />
    </>
  );
}