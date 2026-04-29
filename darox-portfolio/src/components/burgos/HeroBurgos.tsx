// src/components/burgos/HeroBurgos.tsx

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../ui/Button'

export default function HeroBurgos() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Animaciones cinemáticas de "alejamiento" (Zoom-Out)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75])
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 350])

    return (
        <section 
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white"
        >
            <div className="container mx-auto px-6 text-center z-10">
                {/* Logo grande y elevado */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -64 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative z-10 -mt-8 mb-6"
                    >
                        <Image
                            src="/images/logo_horizontal.webp"
                            alt="Logo de DAROX, agencia de branding y diseño web en Burgos"
                            width={400}
                            height={400}
                            className="w-80 md:w-96 lg:w-[28rem] h-auto"
                            priority
                            loading="eager"
                        />
                    </motion.div>
                </div>

                {/* BLOQUE DE TEXTO DESTACADO */}
                <motion.div
                    initial={{ opacity: 0, x: 64 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative z-20 text-center max-w-5xl mx-auto px-2 flex flex-col items-center"
                >
					<h1 className="flex flex-col items-center mb-6 gap-3">
						{/* SEO Kicker: keyword principal visible y prominente */}
						<span className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-fuchsia-400 drop-shadow-md">
							Agencia de Branding en Burgos
						</span>
						<span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight text-center">
							Imagen de gran empresa. Trato de agencia local.
						</span>
					</h1>
					<p
						id="burgos-intro"
						className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow"
					>
						Olvídate de logos genéricos y webs de plantilla. Construimos marcas sólidas y páginas rápidas que posicionan en Google y facilitan tus ventas.
					</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
                        <Button href="/contacto" variant="primary" className="w-full sm:w-auto px-10">
                            Solicitar Auditoría de Marca
                        </Button>
                    </div>
                </motion.div>
                
            </div>

            {/* Fondo con animación de alejamiento y caída */}
            <motion.div 
                style={{ opacity, scale, y: yParallax }}
                className="absolute inset-0 z-0 mix-blend-screen"
            >
                <div className="
                    absolute inset-0
                    bg-[url('/images/fondo_hero.webp')]
                    bg-no-repeat
                    bg-center
                    bg-[length:180%]
                    sm:bg-[length:120%]
                    transform origin-center
                " />
                
                {/* Overlay muy sutil */}
                <div className="absolute inset-0 bg-black/10" />
            </motion.div>
        </section>
    )
}
