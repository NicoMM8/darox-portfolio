// src/components/LogoCarousel.tsx
import React from 'react'
import Image from 'next/image'

const LogoCarousel: React.FC = () => {
  const logos = [
    { src: '/images/amazon.svg', alt: 'Logo de Amazon, partner tecnológico de DAROX' },
    { src: '/images/Hostinger.svg', alt: 'Logo de Hostinger, proveedor de hosting de DAROX' },
    { src: '/images/whop.svg', alt: 'Logo de Whop, colaborador de DAROX' },
  ]

  const fullLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-12 overflow-hidden">
      <div className="relative">
        <div className="flex logo-carousel space-x-16 py-4">
          {fullLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
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
