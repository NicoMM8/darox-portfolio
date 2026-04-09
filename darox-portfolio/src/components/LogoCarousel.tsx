import React from 'react';
import Image from 'next/image';

const LogoCarousel: React.FC = () => {
    const items = [
        { name: 'Amazon', src: '/images/amazon.svg', hideName: false },
        { name: 'Hostinger', src: '/images/Hostinger.svg', hideName: false },
        { name: 'Whop', src: '/images/whop.svg', hideName: true },
        { name: 'Figma', src: '/images/figma.svg', hideName: false },
        { name: 'React', src: '/images/react.svg', hideName: false },
        { name: 'Next.js', src: '/images/nextjs.svg', hideName: false }
    ];



    return (
        <section className="py-20 relative overflow-hidden bg-transparent border-y border-white/5">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
            


            <div className="w-full max-w-7xl mx-auto px-4 relative">
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 group">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex justify-center items-center cursor-default z-0 hover:z-50 group/logo"
                        >
                            <div className="flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-40 brightness-0 invert group-hover/logo:brightness-100 group-hover/logo:invert-0 group-hover/logo:opacity-100 group-hover/logo:scale-110">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={120}
                                    height={60}
                                    className="h-10 md:h-12 w-auto object-contain pointer-events-none"
                                    loading="lazy"
                                />
                                {!item.hideName && (
                                    <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
