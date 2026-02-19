// src/components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">
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
                            src="/images/logo_horizontal.png"
                            alt="Logo de DAROX, agencia de branding y diseño web"
                            width={400}
                            height={400}
                            className="w-80 md:w-96 lg:w-[28rem] h-auto"
                            priority
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
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">
                        Construye Tu Marca
                    </h1>
                    <p className="text-lg sm:text-2xl md:text-3xl font-normal text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow">
                        Transformamos ideas en marcas auténticas y potentes que atraen clientes, generan ingresos y te posicionan como líder en tu sector.
                    </p>
                    <Link
                        href="/contacto"
                        className="
                            px-8 py-4 rounded-full
                            text-lg sm:text-xl font-bold
                            shadow-xl
                            hover:scale-105
                            transition-transform duration-200
                            about-shadow
                            text-white
                            bg-gradient-to-r from-purple-700 to-fuchsia-500
                            hover:from-purple-800 hover:to-fuchsia-600
                            mt-2
                        "
                    >
                        Descubre cómo construir tu marca
                    </Link>
                </motion.div>
            </div>

            {/* Fondo pulsante */}
            <div className="
                absolute inset-0
                bg-[url('/images/fondo.png')]
                bg-no-repeat
                bg-center
                bg-[length:180%]
                sm:bg-[length:120%]
                animate-[heartbeat_1.5s_ease-in-out_infinite]
                transform origin-center
            " />

            {/* Overlay de contraste */}
            <div className="absolute inset-0 bg-black/20" />
        </section>
    )
}


