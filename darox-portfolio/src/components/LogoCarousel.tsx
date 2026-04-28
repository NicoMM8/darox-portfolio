import React, { useRef } from 'react'
import Image from 'next/image'
import { useAnimationFrame } from 'framer-motion'

const LogoCarousel: React.FC = () => {
  const items = [
    { name: 'Next.js', src: '/images/nextjs.svg', hideName: false, keepInverted: true },
    { name: 'React',   src: '/images/react.svg',  hideName: false },
    { name: 'Figma',   src: '/images/figma.svg',  hideName: false },
    { name: 'n8n',     src: '/images/n8n.svg',    hideName: true,  keepInverted: true },
    { name: 'Whop',    src: '/images/whop.svg',   hideName: true,  keepInverted: true },
  ]

  const fullItems = [...items, ...items, ...items, ...items]
  const baseX = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const speed = 35

  useAnimationFrame((_t, delta) => {
    if (!containerRef.current) return
    const width = containerRef.current.scrollWidth / 2
    baseX.current += speed * (delta / 1000)
    if (baseX.current >= width) baseX.current -= width
    containerRef.current.style.transform = `translateX(${-baseX.current}px)`
  })

  return (
    <section className="py-14 relative overflow-hidden bg-transparent border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

      {/* Etiqueta clara: son tecnologías, no clientes */}
      <p className="text-center text-xs uppercase tracking-widest text-white/30 font-semibold mb-8 px-4">
        Tecnologías con las que construimos
      </p>

      <div className="w-full max-w-[100vw] relative mx-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_150px,_black_calc(100%-150px),transparent_100%)]">
        <div
          ref={containerRef}
          className="flex min-w-max items-center cursor-ew-resize"
        >
          {fullItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 md:w-48 px-4 py-6 flex justify-center items-center z-0 hover:z-50 group/logo"
            >
              <div className={`flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-40 brightness-0 invert group-hover/logo:opacity-100 group-hover/logo:scale-110 ${item.keepInverted ? '' : 'group-hover/logo:brightness-100 group-hover/logo:invert-0'}`}>
                <Image
                  src={item.src}
                  alt={`Logo de ${item.name}`}
                  width={120}
                  height={60}
                  className="h-8 md:h-10 w-auto object-contain pointer-events-none"
                  loading="lazy"
                />
                {!item.hideName && (
                  <span className="text-base md:text-xl font-bold tracking-tight text-white whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
