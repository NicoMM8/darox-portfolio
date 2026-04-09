import React, { useRef } from 'react';
import Image from 'next/image';
import { useAnimationFrame } from 'framer-motion';

const LogoCarousel: React.FC = () => {
    const items = [
        { type: 'img', src: '/images/amazon.svg', alt: 'AWS' },
        { type: 'img', src: '/images/vercel.svg', alt: 'Vercel' },
        { type: 'img', src: '/images/Hostinger.svg', alt: 'Hostinger' },
        { type: 'img', src: '/images/stripe.svg', alt: 'Stripe' },
        { type: 'img', src: '/images/whop.svg', alt: 'Whop' },
        { type: 'img', src: '/images/figma.svg', alt: 'Figma' },
        { type: 'img', src: '/images/react.svg', alt: 'React' },
        { type: 'img', src: '/images/nextjs.svg', alt: 'Next.js' }
    ];

    const fullItems = [...items, ...items, ...items, ...items];

    const baseX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const speed = 35; 

    useAnimationFrame((t, delta) => {
        if (!containerRef.current) return;
        const width = containerRef.current.scrollWidth / 2;
        baseX.current += speed * (delta / 1000);
        if (baseX.current >= width) baseX.current -= width;
        containerRef.current.style.transform = `translateX(${-baseX.current}px)`;
    });

    return (
        <section className="py-20 relative overflow-hidden bg-transparent border-y border-white/5">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
            


            <div className="w-full max-w-[100vw] relative mx-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_150px,_black_calc(100%-150px),transparent_100%)]">
                
                {/* 
                    Aquí aplicamos la magia sutil: 
                    El contenedor principal es "group".
                    Usamos CSS puramente para crear el efecto de "Depth of Field" (Profundidad de campo).
                    Cuando el cursor entra al slider, TODOS los hijos se difuminan (blur) y se reducen,
                    EXCEPTO el que tiene el hover :hover directo, que salta hacia adelante. 
                */}
                <div 
                    ref={containerRef} 
                    className="flex min-w-max items-center cursor-ew-resize group" 
                >
                    {fullItems.map((item, index) => (
                        <div 
                            key={index} 
                            // Ancho fijo. brightness-0 invert convierte svg colored/black a full blanco.
                            className="flex-shrink-0 w-40 md:w-52 px-4 flex justify-center items-center cursor-crosshair z-0 hover:z-50 group/logo"
                        >
                            <div className="relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-50 brightness-0 invert group-hover/logo:brightness-100 group-hover/logo:invert-0 group-hover/logo:opacity-100 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                                <Image
                                    src={item.src!}
                                    alt={item.alt!}
                                    width={140}
                                    height={50}
                                    className="h-8 md:h-10 w-auto object-contain pointer-events-none"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
