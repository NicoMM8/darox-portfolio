// src/components/cyl/BeneficiosCYL.tsx

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const benefitsList = [
	"Presencia en Castilla y León",
	"Conocimiento del mercado local",
	"Ecosistemas de Autoridad",
	"Dominio del SEO Regional",
	"Marcas Sobrias y Profesionales",
	"Posicionamiento B2B",
	"Trato Cercano y Directo",
	"Competitividad Nacional",
];

const InfiniteCarousel: React.FC<{
	items: string[];
	reverse?: boolean;
	speed?: number;
}> = ({ items, reverse = false, speed = 40 }) => {
	const baseX = useRef(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const fullList = [...items, ...items];

	useAnimationFrame((t, delta) => {
		if (!containerRef.current) return;
		const width = containerRef.current.scrollWidth / 2;
		baseX.current += (reverse ? -1 : 1) * (speed * (delta / 1000));
		if (baseX.current > width) baseX.current -= width;
		if (baseX.current < 0) baseX.current += width;
		containerRef.current.style.transform = `translateX(${-baseX.current}px)`;
	});

	return (
		<div className="overflow-hidden w-full">
			<div ref={containerRef} className="flex gap-2 min-w-max carousel-track">
				{fullList.map((benefit, idx) => (
					<div
						key={idx}
						className="
              px-5 py-2 rounded-[12px] border border-white/15
              bg-black/80 text-white/80 font-semibold
              shadow-sm transition text-base text-left
              whitespace-nowrap
              hover:bg-white hover:text-black hover:border-white/30
              duration-200
              cursor-pointer
            "
					>
						{benefit}
					</div>
				))}
			</div>
		</div>
	);
};

const cardVariants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	whileHover: { y: -5 },
};

const BeneficiosCYL: React.FC = () => {
	return (
		<section
			className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
			id="beneficios-cyl"
		>
			<div className="max-w-7xl mx-auto flex flex-col items-center">
				{/* Título de sección */}
				<div className="w-full flex flex-col items-center text-center gap-6 mb-12">
					<div className="relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(217,70,239,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] mb-4 shadow overflow-hidden tag-destacado">
						<div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
						<span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
						<span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] tag-destacado-text text-white/80">
							PARTNER ESTRATÉGICO
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
						¿Por qué elegir un partner <span className="text-fuchsia-400 drop-shadow-md">de aquí?</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent rounded-full mt-2" />
				</div>

				{/* Carruseles infinitos superiores */}
				<div className="w-full mb-16 flex flex-col gap-3 relative">
					{/* Gradientes laterales para difuminar el carrusel */}
					<div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

					<InfiniteCarousel items={benefitsList} speed={30} />
					<InfiniteCarousel
						items={[...benefitsList].reverse()}
						reverse
						speed={25}
					/>
				</div>

				{/* Grid de beneficios visuales (Bento) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
					{/* Card 1 */}
					<motion.div
						className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full group relative overflow-hidden"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
							<motion.div
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.04 }}
								transition={{ duration: 0.4 }}
								className="relative w-full h-40"
							>
								<Image
									src="/images/Beneficios2.webp"
									alt="Conocemos el terreno en Castilla y León"
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
							</motion.div>
							<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-fuchsia-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
						</div>
						<div className="flex items-center gap-2 mb-3">
							<h4 className="text-2xl font-bold text-white">
								Conocemos el terreno
							</h4>
						</div>
						<p className="text-gray-300 text-lg leading-relaxed">
							Aquí los negocios no se cierran con promesas vacías, se basan en la confianza. Construimos marcas sobrias y profesionales, sin vender humo.
						</p>
					</motion.div>

					{/* Card 2 */}
					<motion.div
						className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full group relative overflow-hidden"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
							<motion.div
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.04 }}
								transition={{ duration: 0.4 }}
								className="relative w-full h-40"
							>
								<Image
									src="/images/Beneficios1.webp"
									alt="Ecosistemas corporativos B2B"
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
							</motion.div>
							<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-fuchsia-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
						</div>
						<div className="flex items-center gap-2 mb-3">
							<h4 className="text-2xl font-bold text-white">No basta con ser bueno</h4>
						</div>
						<p className="text-gray-300 text-lg leading-relaxed">
							Tienes el servicio y la experiencia, pero si tu marca o web se ven viejas, el cliente B2B desconfía. Te ponemos a la altura visual de las grandes empresas de Madrid o Barcelona.
						</p>
					</motion.div>

					{/* Card 3 */}
					<motion.div
						className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full group relative overflow-hidden"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
							<motion.div
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.04 }}
								transition={{ duration: 0.4 }}
								className="relative w-full h-40"
							>
								<Image
									src="/images/precios.webp"
									alt="Posicionamiento y Autoridad Local"
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
							</motion.div>
							<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-fuchsia-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
						</div>
						<div className="flex items-center gap-2 mb-3">
							<h4 className="text-2xl font-bold text-white">Que te encuentren fácil</h4>
						</div>
						<p className="text-gray-300 text-lg leading-relaxed">
							Si alguien busca tu servicio en León, Valladolid o Palencia, hacemos que salgas tú primero dando una imagen impecable y moderna.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default BeneficiosCYL;
