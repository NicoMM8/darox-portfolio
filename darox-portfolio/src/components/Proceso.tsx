import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";

const steps = [
	{
		etapa: "Etapa 1",
		titulo: "Inicio",
		icon: "/images/etapa1.png",
		descripcion:
			"La etapa de inicio es donde todo comienza. Nos alineamos contigo para entender tus objetivos, visión y expectativas. A través de discusiones en profundidad e investigación exhaustiva.",
		features: ["Consulta Integral", "Hoja de Ruta del Proyecto"],
	},
	{
		etapa: "Etapa 2",
		titulo: "Ejecución",
		icon: "/images/etapa2.png",
		descripcion:
			"Con una estrategia clara en su lugar, pasamos a la fase de ejecución, donde las ideas cobran vida. Nuestro equipo trabaja de manera altamente eficiente y colaborativa para implementar el plan.",
		features: ["Integración Perfecta", "Colaboración en Tiempo Real"],
	},
	{
		etapa: "Etapa 3",
		titulo: "Entrega",
		icon: "/images/etapa3.png",
		descripcion:
			"Una vez que el diseño y el desarrollo están finalizados, hacemos la transición sin problemas a la etapa de entrega. Aquí, te proporcionamos todos los activos, documentación y soporte para un lanzamiento fluido.",
		features: ["Soporte Continuo", "Documentación"],
	},
];

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

const StepContent: React.FC<{ step: typeof steps[0] }> = ({ step }) => (
	<>
		<div className="flex items-center gap-4 mb-6 relative z-10">
			<div className="bg-indigo-900/80 rounded-xl flex items-center justify-center shadow-lg border border-indigo-400/30 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/40 h-16 w-16 overflow-hidden">
				<Image
					src={step.icon}
					alt={`Icono de la etapa ${step.titulo} del proceso DAROX`}
					width={64}
					height={64}
					className="h-full w-full object-cover img-shadow-indigo"
					loading="lazy"
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
	</>
);

const Process: React.FC = () => {
	const isMobile = useIsMobile();

	return (
		<section className="container mx-auto px-2 sm:px-4 lg:px-8 py-20 text-white">
			<div className="text-center mb-16">
				{/* Tag destacado igual que en About */}
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
			{/* Grid responsive: 1 columna móvil, 3 columnas en escritorio */}
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
						>
							{steps.map((step, idx) => (
								<SwiperSlide key={idx}>
									<div
										className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.15)] to-[rgba(97,97,97,0.09)] p-6 sm:p-8 shadow-2xl flex flex-col justify-between items-start overflow-hidden transition duration-300 hover:shadow-blue-800/40 h-full"
									>
										{/* Glow animado extra */}
										<div className="pointer-events-none absolute -inset-3 z-0">
											<div className="w-full h-full rounded-3xl bg-blue-900/40 blur-2xl animate-pulseScale"></div>
											<div className="absolute inset-0 rounded-3xl border-2 border-blue-900/40 animate-glow border-dashed"></div>
										</div>
										{/* Contenido */}
										{/* Contenido */}
										<StepContent step={step} />
									</div>
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
							className="
    							relative group rounded-2xl border border-white/10
    							bg-gradient-to-br from-[rgba(0,85,255,0.15)] to-[rgba(97,97,97,0.09)]
    							p-8 flex flex-col justify-between h-full
    							transition duration-300 hover:shadow-blue-800/40 cursor-pointer
    							features-card
  							"
						>
							{/* Línea azul decorativa superior */}
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-2xl" />
							{/* Contenido */}
							{/* Contenido */}
							<StepContent step={step} />
						</motion.div>
					))
				)}
			</div>
		</section>
	);
};

export default Process;