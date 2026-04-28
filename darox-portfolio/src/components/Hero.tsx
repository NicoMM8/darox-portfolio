import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Animaciones cinemáticas de "alejamiento" (Zoom-Out)
    // El planeta se hace pequeño para ganar nitidez y sensación de profundidad
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75])
    
    // Desvanecimiento suave conforme se hace pequeño
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
    
    // El planeta "cae" hacia abajo simulando que ganamos altura respecto a él
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
                            alt="Logo de DAROX, agencia de branding y diseño web"
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
                    className="relative z-20 text-center max-w-4xl mx-auto px-2 flex flex-col items-center"
                >
					<h1 className="flex flex-col items-center mb-6 gap-3">
						{/* SEO Kicker: keyword principal visible y prominente */}
						<span className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-fuchsia-400 drop-shadow-md">
							Agencia de Branding y Diseño Web
						</span>
						<span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight text-center">
							Construye Tu Marca
						</span>
					</h1>
					<p
						id="hero-description"
						className="text-lg sm:text-2xl md:text-3xl font-normal text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow"
					>
						Transformamos ideas en marcas auténticas y potentes que atraen clientes, generan ingresos y te posicionan como líder en tu sector.
					</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
                        <Button href="/contacto" variant="primary" className="w-full sm:w-auto px-10">
                            Descubre cómo construir tu marca
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


