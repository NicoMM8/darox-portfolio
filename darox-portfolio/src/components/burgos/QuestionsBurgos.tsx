// src/components/burgos/QuestionsBurgos.tsx

import React, { useState } from "react";
import Head from "next/head";

const faqs = [
	{
		question: "¿Cuánto cuesta un proyecto de branding?",
		answer: "En DAROX no inflamos precios. Nuestros sistemas de marca parten desde 490€ (Start Pack, para marcas nuevas) y 980€ (Grow Pack, identidad corporativa y ecosistema digital de alta conversión). Precio cerrado por contrato. Sin sorpresas.",
	},
	{
		question: "¿Cuánto tardáis en tener la identidad lista?",
		answer: "Entre 3 y 4 semanas para una identidad corporativa estándar. Los plazos se firman en contrato y son inamovibles. Sabemos que en los negocios el tiempo es dinero, así que no hay proyectos que se alarguen meses injustificadamente.",
	},
	{
		question: "¿El ecosistema de marca incluye posicionamiento (SEO) para salir en Burgos?",
		answer: "Sí. Desde el tono de voz hasta la ejecución técnica, todo está pensado para dominar las búsquedas locales. Incluimos auditoría estratégica e integración directa con tu perfil de Google Business Profile para que tu marca destaque.",
	},
	{
		question: "¿Trabajáis con empresas de toda la provincia y de Castilla y León?",
		answer: "Sí. Prestamos servicio en Burgos capital, Aranda de Duero, Miranda de Ebro y cualquier punto de Castilla y León. Además, al tener base aquí, podemos organizar reuniones presenciales si tu proyecto B2B lo requiere.",
	},
	{
		question: "¿Me ayudáis a gestionar la ficha de Google Maps?",
		answer: "Sí. Implementamos el schema LocalBusiness correcto y optimizamos tu ficha de Google Business Profile. Es el paso fundamental para aparecer en el pack local de Maps cuando alguien busca tu servicio en Burgos.",
	},
    {
		question: "Me interesa. ¿Qué tengo que hacer para empezar?",
		answer: "El primer paso es una llamada estratégica de 15 minutos. Analizamos tu sector en Burgos, vemos qué está haciendo tu competencia y te presentamos un plan de ataque claro. Sin compromiso.",
	},
];

const QuestionsBurgos: React.FC = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const toggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<>
			<section
				className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-transparent overflow-hidden"
				id="faq-burgos"
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
							Resolvemos las dudas más comunes sobre diseño web, posicionamiento en Burgos y cómo trabajamos.
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
								aria-controls={`faq-answer-burgos-${idx}`}
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
										id={`faq-answer-burgos-${idx}`}
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
			<Head>
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
			</Head>
		</>
	);
};

export default QuestionsBurgos;
