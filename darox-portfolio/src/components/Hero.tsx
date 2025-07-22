// src/components/Hero.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100); // pequeño delay para el efecto
    }, []);

    return (
        <section className="relative min-h-[90vh] h-auto flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
            {/* Logo grande y elevado */}
            <div className={`relative z-10 -mt-8 mb-6 transition-all duration-700 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
                <Image
                    src="/images/logo_horizontal.png"
                    alt="Logo de DAROX, agencia de branding y diseño web"
                    width={400}
                    height={400}
                    className="w-80 md:w-96 lg:w-[28rem] h-auto"
                    priority
                />
            </div>

            {/* BLOQUE DE TEXTO DESTACADO */}
            <div className={`relative z-20 text-center max-w-3xl md:max-w-5xl mx-auto px-2 flex flex-col items-center transition-all duration-700 delay-200 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white drop-shadow-lg break-words leading-tight">
                    Soluciones inteligentes para tu marca
                </h1>
                <div className="mb-6 md:mb-8 mx-auto text-white shadow-lg break-words leading-snug max-w-4xl flex flex-col items-center">
                    <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                        Fusionamos inteligencia artificial, creatividad humana,
                    </span>
                    <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                        diseño y estrategia tecnológica para que 
                    </span>
                    <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                        conquistes clientes y libertad.
                    </span>
                </div>
                <Link
                    href="/contacto"
                    className="
                        px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5
                        rounded-full
                        text-base sm:text-xl md:text-2xl font-bold
                        shadow-xl
                        hover:scale-105
                        transition-transform duration-200
                        about-shadow
                        text-white
                        animate-fade-in-up
                        inline-flex items-center justify-center
                        bg-gradient-to-r from-blue-600 to-blue-400
                        hover:from-blue-700 hover:to-blue-500
                        mt-2
                    "
                >
                    Descubre cómo
                </Link>
            </div>

            {/* Fondo pulsante */}
            <div className="absolute inset-0 bg-[url('/images/moon.png')] bg-cover bg-center animate-[heartbeat_1.5s_ease-in-out_infinite] transform origin-center" />

            {/* Overlay de contraste */}
            <div className="absolute inset-0 bg-black/40" />
        </section>
    )
}


