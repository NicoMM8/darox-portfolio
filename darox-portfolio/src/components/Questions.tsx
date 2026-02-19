import React, { useState } from "react";

const faqs = [
	{
		question: "¿Qué necesito para empezar?",
		answer:
			"Solo tu idea, visión y ganas de crecer. Nosotros nos encargamos de la planificación, el diseño y la implementación.",
	},
	{
		question: "¿Cuánto tiempo tarda un proyecto típico?",
		answer:
			"De media, entre 4 y 6 semanas desde el briefing inicial hasta la entrega final, según el alcance y la complejidad.",
	},
	{
		question: "¿Cómo se calcula el precio final?",
		answer:
			"Tras definir el alcance y las funcionalidades, te ofrecemos un presupuesto cerrado. No hay costes ocultos ni sorpresas.",
	},
	{
		question: "¿Qué tipo de personalización está disponible?",
		answer:
			"Adaptamos la estética, la estructura y las funcionalidades exactamente a tus necesidades, desde el branding hasta integraciones a medida.",
	},
	{
		question: "¿Puedo pedir cambios una vez entregado?",
		answer:
			"Incluimos varias rondas de revisiones gratuitas. Después de la entrega, ofrecemos paquetes de mantenimiento y soporte a medida.",
	},
	{
		question: "¿Es fácil editar para principiantes?",
		answer:
			"Sí. Entregamos un CMS intuitivo y tutoriales en vídeo para que gestiones tu contenido sin conocimientos técnicos.",
	},
	{
		question: "¿Qué recibo exactamente tras la compra?",
		answer:
			"Recibes todos los archivos fuente (PSD/Figma), manuales de uso, acceso al repositorio y un mes de soporte post-lanzamiento.",
	},
	{
		question: "¿Ofrecen hosting y dominio?",
		answer:
			"Podemos gestionar tu hosting y registrar tu dominio, optimizados para velocidad y seguridad. También te asesoramos si ya tienes tu propio proveedor.",
	},
	{
		question: "¿Cómo garantizan el SEO?",
		answer:
			"Implementamos prácticas SEO on-page (estructura, etiquetas, velocidad) y te asesoramos en estrategia de contenidos para mejorar tu visibilidad.",
	},
	{
		question: "¿Qué sucede si no estoy satisfecho?",
		answer:
			"Contamos con una garantía de devolución en los primeros 7 días después de la entrega, tras evaluar sus causas y proponer mejoras.",
	},
	{
		question: "¿Necesito saber programar?",
		answer:
			"No, nada. Tú decides el contenido y la dirección, nosotros nos encargamos de todo el desarrollo técnico.",
	},
	{
		question: "¿Cómo gestionan la seguridad de mis datos?",
		answer:
			"Aplicamos certificados SSL, copias de seguridad automáticas y monitorización 24/7 para proteger tu información y la de tus usuarios.",
	},
	{
		question: "¿Qué tecnologías utilizan?",
		answer:
			"Trabajamos con Next.js, React, Tailwind, Node.js y soluciones serverless en Vercel para ofrecerte performance y escalabilidad.",
	},
	{
		question: "¿Puedo escalar el proyecto en el futuro?",
		answer:
			"Sí. Nuestra arquitectura modular permite añadir nuevas funcionalidades o micrositios sin rehacer la base existente.",
	},
	{
		question: "¿Tienen experiencia en mi sector?",
		answer:
			"Contamos con proyectos en diversos sectores: e-commerce, educación, salud, tecnología... Nos adaptamos a tus necesidades específicas.",
	},
	{
		question: "¿Cómo es el proceso de trabajo?",
		answer:
			"Desde el briefing inicial hasta la entrega final, seguimos un flujo ágil con revisiones periódicas para asegurar que cumplimos tus expectativas.",
	},
];

const Questions: React.FC = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const toggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<>
			<section
				className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] overflow-hidden"
				id="faq"
			>
				<div className="max-w-4xl mx-auto flex flex-col items-start">
					{/* Título y descripción */}
					<div className="w-full flex flex-col gap-6 mb-8">
						<div className="relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] mb-4 shadow overflow-hidden">
							<div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
							<span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
							<span className="font-semibold text-base bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
								FAQ
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
							<span className="gradient-text">Preguntas Frecuentes</span>
						</h2>
						<div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full mt-2 mb-6" />
						<p className="text-base text-white/70 mb-8">
							Resuelve tus dudas sobre el proceso, personalización y soporte. Si
							tienes otra pregunta, contáctanos.
						</p>
					</div>
					{/* Preguntas en grid de 2 columnas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						{faqs.map((faq, idx) => (
							<button
								key={idx}
								type="button"
								onClick={() => toggle(idx)}
								className={`relative border border-white/10 bg-black/80 rounded-2xl px-6 py-5 flex flex-col hover:shadow-lg transition group text-left focus:outline-none`}
								aria-expanded={openIdx === idx}
								aria-controls={`faq-answer-${idx}`}
							>
								<div className="flex items-center justify-between">
									<span className="text-lg font-medium text-white">
										{faq.question}
									</span>
									<span
										className={`ml-4 flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-45" : ""
											}`}
									>
										{/* Icono tipo plus/minus */}
										<svg
											width={28}
											height={28}
											fill="none"
											viewBox="0 0 24 24"
											className="text-white/70 group-hover:text-blue-400 transition"
											aria-hidden="true"
											focusable="false"
										>
											<path
												d="M12 5v14M5 12h14"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
											/>
										</svg>
									</span>
								</div>
								{openIdx === idx && (
									<span
										id={`faq-answer-${idx}`}
										className="text-base text-white/70 mt-3 transition-opacity duration-300"
									>
										{faq.answer}
									</span>
								)}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Schema.org FAQPage para rich snippets en Google */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqs.map((faq) => ({
							"@type": "Question",
							name: faq.question,
							acceptedAnswer: {
								"@type": "Answer",
								text: faq.answer,
							},
						})),
					}),
				}}
			/>
		</>
	);
};

export default Questions;