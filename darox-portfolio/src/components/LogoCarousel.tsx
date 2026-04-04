import React, { useRef } from 'react';
import Image from 'next/image';
import { useAnimationFrame } from 'framer-motion';

const LogoCarousel: React.FC = () => {
    const items = [
        { type: 'img', src: '/images/amazon.svg', alt: 'AWS' },
        { type: 'text', text: 'Vercel ▲', style: 'font-sans font-bold tracking-tighter' },
        { type: 'img', src: '/images/Hostinger.svg', alt: 'Hostinger' },
        { type: 'text', text: 'Stripe', style: 'font-mono font-bold tracking-wider' },
        { type: 'img', src: '/images/whop.svg', alt: 'Whop' },
        { type: 'text', text: 'Figma', style: 'font-serif italic font-bold' },
        { type: 'text', text: 'React ⚛', style: 'font-sans font-light tracking-widest' },
        { type: 'text', text: 'Next.js', style: 'font-black tracking-tighter uppercase' }
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
            
            <div className="text-center mb-12 relative z-10">
                <span className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase border border-zinc-800 px-4 py-1 rounded-full">
                    Tech Stack & Partners
                </span>
            </div>

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
                            // La clase clave es peer/hover y el manejo de opacidades y desenfoques.
                            className="flex-shrink-0 px-10 md:px-16 flex justify-center items-center opacity-60 grayscale transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-20 group-hover:blur-[4px] group-hover:scale-95 hover:!opacity-100 hover:!blur-none hover:!scale-125 hover:!grayscale-0 cursor-crosshair z-0 hover:z-50"
                        >
                            {item.type === 'img' ? (
                                <Image
                                    src={item.src!}
                                    alt={item.alt!}
                                    width={140}
                                    height={50}
                                    className="h-8 md:h-10 w-auto object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    loading="lazy"
                                />
                            ) : (
                                <span className={`text-2xl md:text-3xl pointer-events-none text-zinc-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${item.style}`}>
                                    {item.text}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
