// src/components/LogoCarousel.tsx
import React from 'react'

const LogoCarousel: React.FC = () => {
  const logos = [
    '/images/amazon.svg',
    '/images/Hostinger.svg',
    '/images/whop.svg',
    '/images/amazon.svg',
    '/images/Hostinger.svg',
    '/images/whop.svg',
    // Duplicados para efecto infinito
    '/images/amazon.svg',
    '/images/Hostinger.svg',
    '/images/whop.svg',
    '/images/amazon.svg',
    '/images/Hostinger.svg',
    '/images/whop.svg',
  ]

  return (
    <section className="py-12 overflow-hidden">
      <div className="relative">
        <div className="flex logo-carousel space-x-16 py-4">
          {logos.map((logo, index) => (
              // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={logo}
              alt={
                logo.includes('amazon')
                  ? 'Logo de Amazon, partner tecnológico de DAROX'
                  : logo.includes('hostinger')
                  ? 'Logo de Hostinger, proveedor de hosting de DAROX'
                  : 'Logo de Whop, colaborador de DAROX'
              }
              className="h-20 w-40 object-contain whitescale opacity-80 transition duration-600"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
