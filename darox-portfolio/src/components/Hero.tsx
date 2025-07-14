// src/components/Hero.tsx
'use client'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center pt-16">
            {/* Logo grande y elevado */}
            <div className="relative z-10 -mt-8 mb-6">
                <Image
                    src="/images/logo_horizontal.png"
                    alt="Logo DAROX"
                    width={400}
                    height={400}
                    className="w-80 md:w-96 lg:w-[28rem] h-auto"
                    priority
                />
            </div>

            {/* NUEVO BLOQUE DE TEXTO DESTACADO */}
            <div className="relative z-20 text-center max-w-5xl mx-auto px-2">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white drop-shadow-lg whitespace-nowrap">
                    Soluciones inteligentes para tu marca
                </h1>
                <p className="text-2xl md:text-3xl font-medium mb-10 mx-auto bg-black/50 rounded-xl px-8 py-6 text-white shadow-lg backdrop-blur-md">
                    Fusionamos
                    <span className="text-pink-400 font-bold pulse pulse-delay-0"> inteligencia artificial</span>,
                    <span className="text-indigo-400 font-bold pulse pulse-delay-1"> creatividad humana</span>,
                    <span className="text-purple-400 font-bold pulse pulse-delay-2"> diseño</span> y
                    <span className="text-pink-400 font-bold pulse pulse-delay-3"> estrategia tecnológica </span>
                    para que conquistes
                    <span className="text-indigo-300 font-bold pulse pulse-delay-4"> clientes</span>,
                    <span className="text-pink-300 font-bold pulse pulse-delay-5"> ingresos</span> y
                    <span className="text-purple-300 font-bold pulse pulse-delay-6"> libertad financiera</span>.
                </p>
                <a
                    href="#"
                    className="btn-principal px-12 py-5 rounded-full text-2xl font-bold shadow-xl hover:scale-105 transition-transform duration-200"
                >
                    Descubre cómo
                </a>
            </div>

            {/* Fondo pulsante */}
            <div className="absolute inset-0 bg-[url('/images/moon.png')] bg-cover bg-center animate-[heartbeat_1.5s_ease-in-out_infinite] transform origin-center" />

            {/* Overlay de contraste */}
            <div className="absolute inset-0 bg-black/40" />
        </section>
    )
}


