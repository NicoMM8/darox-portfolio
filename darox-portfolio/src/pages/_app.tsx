import '../estilos/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head'
import StarsBackground from '../components/StarsBackground' 
import React, { useState } from "react";
import Footer from "../components/Footer";
import CookiePreferences from "../components/CookiePreferences";

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [footerInView, setFooterInView] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <StarsBackground />
      <Component {...pageProps} />
      {/* Difuminado solo si el footer NO está visible */}
      {!footerInView && (
        <div className="blur-bottom-overlay" />
      )}
      <Footer onInViewChange={setFooterInView} />
      <SpeedInsights />
      <CookiePreferences />
    </>
  );
}