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
            <div className={`relative z-20 text-center max-w-4xl mx-auto px-2 flex flex-col items-center transition-all duration-700 delay-200 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
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
                    Descubre cómo
                </Link>
            </div>

            {/* Fondo pulsante */}
            <div className="absolute inset-0 bg-[url('/images/fondo.png')] bg-center bg-[length:120%] animate-[heartbeat_1.5s_ease-in-out_infinite] transform origin-center" />

            {/* Overlay de contraste */}
            <div className="absolute inset-0 bg-black/20" />
        </section>
    )
}


