import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";

const steps = [
	{
		etapa: "Etapa 1",
		titulo: "Inicio",
		icon: "/images/cohete.png",
		descripcion:
			"La etapa de inicio es donde todo comienza. Nos alineamos contigo para entender tus objetivos, visión y expectativas. A través de discusiones en profundidad e investigación exhaustiva.",
		features: ["Consulta Integral", "Hoja de Ruta del Proyecto"],
	},
	{
		etapa: "Etapa 2",
		titulo: "Ejecución",
		icon: "/images/equipo.png",
		descripcion:
			"Con una estrategia clara en su lugar, pasamos a la fase de ejecución, donde las ideas cobran vida. Nuestro equipo trabaja de manera altamente eficiente y colaborativa para implementar el plan.",
		features: ["Integración Perfecta", "Colaboración en Tiempo Real"],
	},
	{
		etapa: "Etapa 3",
		titulo: "Entrega",
		icon: "/images/entrega.png",
		descripcion:
			"Una vez que el diseño y el desarrollo están finalizados, hacemos la transición sin problemas a la etapa de entrega. Aquí, te proporcionamos todos los activos, documentación y soporte para un lanzamiento fluido.",
		features: ["Soporte Continuo", "Documentación"],
	},
];

const ilustracionProceso =
	"https://framerusercontent.com/images/djbcRHCD89IflJ1okJAa1J65cuM.png";

// Hook para detectar si es móvil
function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 1024);
		checkMobile(); // Ejecuta al montar
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return isMobile;
}

const Process: React.FC = () => {
	const isMobile = useIsMobile();
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="container mx-auto px-2 sm:px-4 lg:px-8 py-20 text-white">
			<div className="text-center mb-16">
				{/* Tag destacado tipo Framer igual que en About */}
				<div
					className="
                        relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
                        border border-white/10
                        bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
                        backdrop-blur-[2.5px]
                        mb-4 animate-fade-in-up
                        shadow
                        overflow-hidden
                        mx-auto
                        tag-destacado
                    "
				>
					<div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
					<span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
					<span className="font-semibold text-base tag-destacado-text">
						¿Cómo Trabajamos?
					</span>
				</div>
				<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
					Simplificamos el Viaje <br />
					<span className="gradient-text">
						Desde el Diseño Hasta el Lanzamiento.
					</span>
				</h3>
				<p className="text-lg text-gray-200 max-w-3xl mx-auto">
					Hacemos que sea fácil dar vida a tus ideas, guiándote desde el
					concepto hasta un producto completamente lanzado.
				</p>
			</div>
			{/* Grid responsivo: 1 columna móvil, 2 columnas en md+ */}
			<div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6 items-stretch w-full`}>
				{/* Tarjetas */}
				{isMobile ? (
					<div className="w-full">
						<Swiper
							breakpoints={{
								0: { slidesPerView: 1, spaceBetween: 16 },
								640: { slidesPerView: 1, spaceBetween: 24 },
							}}
							pagination={{ clickable: true }}
							mousewheel={{ forceToAxis: true, sensitivity: 1 }}
							modules={[Pagination, Mousewheel]}
							className="h-full"
							onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
						>
							{steps.map((step, idx) => (
								<SwiperSlide key={idx}>
									<motion.div
										key={activeIndex}
										initial={{ opacity: 0, y: 40, scale: 0.95 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										transition={{
											duration: 0.5,
											ease: [0.39, 0.575, 0.565, 1],
										}}
										className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.15)] to-[rgba(97,97,97,0.09)] p-6 sm:p-8 shadow-2xl flex flex-col justify-between items-start overflow-hidden transition duration-300 hover:shadow-blue-800/40 h-full"
									>
										<div className="flex items-center gap-4 mb-6 relative z-10">
											<div className="bg-indigo-900/80 rounded-xl flex items-center justify-center shadow-lg border border-indigo-400/30 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/40 h-16 w-16 overflow-hidden">
												<img
													src={step.icon}
													alt="Icono de Etapa"
													className="h-full w-full object-cover img-shadow-indigo"
												/>
											</div>
											<div className="relative flex items-center">
												<span className="px-4 py-1 rounded-lg bg-indigo-800/80 text-xs font-semibold text-gray-300 shadow border border-indigo-500/30 relative z-10">
													{step.etapa}
												</span>
											</div>
										</div>
										<h4 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
											{step.titulo}
										</h4>
										<p className="text-gray-400 mb-6">
											{step.descripcion}
										</p>
										<div className="flex gap-3 flex-wrap mb-4">
											{step.features.map((f, i) => (
												<span
													key={i}
													className="bg-black/40 border border-indigo-800 text-gray-400 px-4 py-2 rounded-xl text-xs font-medium shadow hover:bg-indigo-900/60 transition hover:scale-105"
												>
													{f}
												</span>
											))}
										</div>
									</motion.div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				) : (
					steps.map((step, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.5,
								ease: [0.39, 0.575, 0.565, 1],
							}}
							className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.15)] to-[rgba(97,97,97,0.09)] p-6 sm:p-8 shadow-2xl flex flex-col justify-between items-start overflow-hidden transition duration-300 hover:shadow-blue-800/40 h-full"
						>
							<div className="flex items-center gap-4 mb-6 relative z-10">
								<div className="bg-indigo-900/80 rounded-xl flex items-center justify-center shadow-lg border border-indigo-400/30 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/40 h-16 w-16 overflow-hidden">
									<img
										src={step.icon}
										alt="Icono de Etapa"
										className="h-full w-full object-cover img-shadow-indigo"
									/>
								</div>
								<div className="relative flex items-center">
									<span className="px-4 py-1 rounded-lg bg-indigo-800/80 text-xs font-semibold text-gray-300 shadow border border-indigo-500/30 relative z-10">
										{step.etapa}
									</span>
								</div>
							</div>
							<h4 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
								{step.titulo}
							</h4>
							<p className="text-gray-400 mb-6">
								{step.descripcion}
							</p>
							<div className="flex gap-3 flex-wrap mb-4">
								{step.features.map((f, i) => (
									<span
										key={i}
										className="bg-black/40 border border-indigo-800 text-gray-400 px-4 py-2 rounded-xl text-xs font-medium shadow hover:bg-indigo-900/60 transition hover:scale-105"
									>
										{f}
									</span>
								))}
							</div>
						</motion.div>
					))
				)}
				{/* Imagen solo en escritorio grande */}
				{!isMobile && (
					<div className="hidden lg:flex col-span-1 h-full items-center justify-center">
						<div className="w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-lg bg-white/10 flex items-center justify-center mx-auto">
							<img
								src={ilustracionProceso}
								alt="Ilustración del proceso"
								className="object-cover w-full h-full"
								loading="lazy"
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Process;