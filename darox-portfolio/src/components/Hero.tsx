// src/components/Hero.tsx
'use client'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden flex flex-col items-center justify-start pt-16">
            {/* Logo grande y elevado */}
            <div className="relative z-10 -mt-8">
                <Image
                    src="/images/logo_horizontal.png"
                    alt="Logo DAROX"
                    width={400}
                    height={400}
                    className="w-80 md:w-96 lg:w-[28rem] h-auto"
                    priority
                />
            </div>

            {/* Texto estilo “crawl”, grande y en blanco */}
            <div className="crawl-container relative z-20">
                <div className="crawl-content">
                    DAROX es el punto de encuentro entre innovación y diseño. Creamos
                    experiencias digitales que laten al ritmo de tu marca, fusionando
                    creatividad, tecnología y pasión por el detalle. Únete al viaje más
                    emocionante hacia el futuro de tu identidad.
                </div>
            </div>

            {/* Fondo pulsante */}
            <div className="absolute inset-0 bg-[url('/images/moon.png')] bg-cover bg-center animate-[heartbeat_1.5s_ease-in-out_infinite] transform origin-center" />

            {/* Overlay de contraste */}
            <div className="absolute inset-0 bg-black/40" />

            <style jsx>{`
                .crawl-container {
                    position: relative;
                    width: 100%;
                    height: 40%;
                    margin-top: 2rem;
                    perspective: 600px;
                    overflow: hidden;
                }
                .crawl-content {
                    width: 80%;
                    margin: 0 auto;
                    padding-bottom: 2rem;
                    font-size: 1.5rem;       /* antes 1.125rem */
                    line-height: 1.8;        /* un poco más espaciado */
                    text-align: center;
                    color: #fff;             /* texto en blanco llano */
                    transform-origin: 50% 100%;
                    transform: rotateX(25deg) translateY(100%);
                    animation: crawl 20s linear forwards;
                }
                @keyframes crawl {
                    0% {
                        transform: rotateX(25deg) translateY(100%);
                        opacity: 1;
                    }
                    100% {
                        transform: rotateX(25deg) translateY(-200%);
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    )
}


