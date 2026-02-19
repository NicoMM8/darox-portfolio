import '../estilos/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head'
import StarsBackground from '../components/StarsBackground'
import React, { useState } from "react";
import Footer from "../components/Footer";

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [footerInView, setFooterInView] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DAROX",
              url: "https://darox.es",
              logo: "https://darox.es/images/logo_horizontal.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "daroxbrandmaker@gmail.com",
                contactType: "customer support",
                areaServed: "ES",
              },
              sameAs: [
                "https://www.instagram.com/darox.bm/",
                "https://x.com/DaroxBrandMaker",
                "https://www.youtube.com/@daroxbrandmaker",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DAROX",
              image: "https://darox.es/images/logo_horizontal.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Burgos",
                addressRegion: "Castilla y León",
                postalCode: "09001",
                addressCountry: "ES",
              },
              email: "daroxbrandmaker@gmail.com",
              url: "https://darox.es",
            }),
          }}
        />
      </Head>
      <StarsBackground />
      <Component {...pageProps} />
      {/* Difuminado solo si el footer NO está visible */}
      {!footerInView && (
        <div className="blur-bottom-overlay" />
      )}
      <Footer onInViewChange={setFooterInView} />
      <SpeedInsights />
    </>
  );
}