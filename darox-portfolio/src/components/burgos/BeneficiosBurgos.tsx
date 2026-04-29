// src/components/burgos/BeneficiosBurgos.tsx

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const benefitsList = [
	"Presencialidad en Burgos",
	"Conocimiento del mercado local",
	"Webs ultrarrápidas",
	"Dominio del SEO en Castilla y León",
	"Automatización para pymes",
	"Soporte técnico directo",
	"Trato sin intermediarios",
	"Enfoque en B2B industrial",
	"Mayor Retención",
	"Arquitectura Escalable",
	"Soluciones CRM conectadas",
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
	initial: { opacity: 0, y: 40, scale: 0.97 },
	animate: { opacity: 1, y: 0, scale: 1 },
	whileHover: { scale: 1.03, boxShadow: "0 8px 40px 0 rgba(0,85,255,0.25)" },
};

const BeneficiosBurgos: React.FC = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative">
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="mb-8">
					<div
						className="
              relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
              border border-white/10
              bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
              backdrop-blur-[2.5px]
              mb-4 animate-fade-in-up
              shadow
              overflow-hidden
              tag-destacado
            "
					>
						<div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
						<span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
						<span className="font-semibold text-base tag-destacado-text">
							Beneficios de tener tu agencia en Burgos
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
						Tecnología de élite.
						<br />
					</h2>
					<h3 className="text-2xl text-white font-semibold mb-4">
						A quince minutos de tu oficina.
					</h3>
				</div>

				<div className="w-full mb-12 flex flex-col items-start gap-3">
					<InfiniteCarousel items={benefitsList.slice(0, 6)} speed={40} />
					<InfiniteCarousel items={benefitsList.slice(6)} reverse speed={30} />
				</div>

				<div className="flex flex-col md:flex-row gap-8 items-start w-full">
					{/* Card grande a la izquierda */}
					<motion.div
						className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full group relative overflow-hidden w-full md:w-[50%] min-h-[520px] md:min-h-[607px] max-h-full"
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
								className="relative w-full h-56"
							>
								<Image
									src="/images/beneficios-main.webp"
									alt="Reuniones de planificación estratégica presenciales en Burgos - DAROX"
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
							</motion.div>
							<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-10 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
						</div>
						<div className="w-full flex flex-col justify-center items-start mt-8 flex-1">
							<h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
								Comunicación Cara a Cara
							</h4>
							<div className="w-8 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mb-4" />
							<p className="text-white/60 text-base mb-6 max-w-md">
								Si tienes un problema, no te pasamos con un bot de atención al cliente ni te abrimos un "ticket". Estamos en Burgos. Nos tomamos un café en tu oficina o en nuestro estudio, hablamos claro y lo solucionamos rápido.
							</p>
							<div className="flex gap-4 mt-auto">
								<motion.a
									href="/contacto"
									className="px-6 py-2 rounded-[10px] bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition border-2 border-blue-600"
									whileHover={{
										scale: 1.08,
										backgroundColor: "#2563eb",
									}}
									transition={{ duration: 0.2 }}
								>
									Agendar Café
								</motion.a>
							</div>
						</div>
					</motion.div>

					{/* Dos cards apiladas a la derecha */}
					<div className="w-full md:w-[40%] flex flex-col gap-6">
						{/* Card 3 */}
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
									className="relative w-full h-32"
								>
									<Image
										src="/images/precios.webp"
										alt="SEO Local y Posicionamiento para pymes en Burgos"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</motion.div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h4 className="text-xl font-bold text-white">
									Presencia de Marca Local
								</h4>
								<span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">
									GEOLOCALIZADO
								</span>
							</div>
							<p className="text-white/60 text-base">
								Sabemos cómo busca la gente en Burgos y en toda Castilla y León. Ajustamos tu identidad y perfil de empresa para que cuando busquen tu servicio, tu marca proyecte mayor autoridad.
							</p>
						</motion.div>
						{/* Card 4 */}
						<motion.div
							className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full group relative overflow-hidden"
							variants={cardVariants}
							initial="initial"
							whileInView="animate"
							whileHover="whileHover"
							transition={{ duration: 0.5, delay: 0.15 }}
							viewport={{ once: true }}
						>
							<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
								<motion.div
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.4 }}
									className="relative w-full h-32"
								>
									<Image
										src="/images/Beneficios1.webp"
										alt="Código limpio y veloz frente a la competencia de Burgos"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</motion.div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h4 className="text-xl font-bold text-white">Ecosistemas Digitales</h4>
								<span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">
									RENDIMIENTO
								</span>
							</div>
							<p className="text-white/60 text-base">
								Mientras tu competencia sigue con identidades anticuadas y páginas lentas, nosotros construimos un ecosistema de marca ágil y premium que enamora a tu cliente B2B.
							</p>
						</motion.div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-12 w-full">
					<motion.div
						className="w-full md:w-1/2 max-w-md group relative"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full overflow-hidden">
							<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
								<motion.div
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.4 }}
									className="relative w-full h-32"
								>
									<Image
										src="/images/beneficios-revisiones.webp"
										alt="Proyectos B2B y automatización para el sector industrial"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</motion.div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h4 className="text-xl font-bold text-white">
									Enfoque en B2B e Industria
								</h4>
								<span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">
									EXPERIENCIA
								</span>
							</div>
							<p className="text-white/60 text-base">
								No hacemos blogs personales ni webs para bodas. Nuestro fuerte son las empresas: industria, despachos y negocios de servicios que necesitan transmitir profesionalidad y captar clientes serios.
							</p>
						</div>
					</motion.div>
					
					<motion.div
						className="w-full md:w-1/2 max-w-md group relative"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5, delay: 0.15 }}
						viewport={{ once: true }}
					>
						<div className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full overflow-hidden">
							<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
								<motion.div
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.4 }}
									className="relative w-full h-32"
								>
									<Image
										src="/images/reales.webp"
										alt="Entrega en plazos firmados en Burgos"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</motion.div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h4 className="text-xl font-bold text-white">Plazos Cumplidos, por Contrato</h4>
								<span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">
									SERIEDAD
								</span>
							</div>
							<p className="text-white/60 text-base">
								En los negocios, el tiempo es dinero. Si te decimos que tardamos un mes, es un mes. Cerramos los plazos antes de empezar para que no sufras proyectos que se alargan medio año sin sentido.
							</p>
						</div>
					</motion.div>

					<motion.div
						className="w-full md:w-1/2 max-w-md group relative"
						variants={cardVariants}
						initial="initial"
						whileInView="animate"
						whileHover="whileHover"
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full overflow-hidden">
							<div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative">
								<motion.div
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.04 }}
									transition={{ duration: 0.4 }}
									className="relative w-full h-32"
								>
									<Image
										src="/images/Beneficios2.webp"
										alt="Integraciones y automatización CRM local"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</motion.div>
								<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
							</div>
							<div className="flex items-center gap-2 mb-2">
								<h4 className="text-xl font-bold text-white">
									Automatización y Contacto Ágil
								</h4>
								<span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">
									EFICIENCIA
								</span>
							</div>
							<p className="text-white/60 text-base">
								Si un cliente potencial entra a tu web un domingo por la tarde, no puedes dejarle esperando hasta el lunes. Integramos herramientas para que tu web responda, tome sus datos y te lo deje todo listo para vender.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default BeneficiosBurgos;
