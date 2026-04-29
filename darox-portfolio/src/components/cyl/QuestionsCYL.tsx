// src/components/cyl/QuestionsCYL.tsx

import React, { useState } from "react";
import Head from "next/head";

const faqs = [
	{
		question: "¿Trabajáis con empresas de toda Castilla y León?",
		answer: "Sí. Prestamos servicio a negocios B2B, industria y profesionales en Burgos, Valladolid, León, Salamanca, Palencia, Zamora, Soria, Segovia y Ávila. Entendemos perfectamente la realidad empresarial de la región.",
	},
	{
		question: "¿Cuánto cuesta un proyecto de branding o reposicionamiento?",
		answer: "En DAROX no trabajamos con humo ni presupuestos inflados. Nuestros sistemas parten desde 490€ (Start Pack, para marcas nuevas) y 980€ (Grow Pack, identidad corporativa y presencia digital completa). Precio cerrado por contrato. Sin sorpresas.",
	},
	{
		question: "¿Cuánto tardáis en tener la identidad lista?",
		answer: "Entre 3 y 4 semanas para una identidad corporativa estándar. Sabemos que en la industria el tiempo vale dinero, por lo que los plazos se fijan por contrato y se cumplen a rajatabla.",
	},
	{
		question: "¿El sistema de marca incluye posicionamiento SEO local?",
		answer: "Sí. Toda la identidad y presencia digital que construimos está pensada para dominar las búsquedas locales. Incluimos auditoría estratégica y optimización de tu presencia en Google para que tu marca lidere en tu provincia.",
	},
	{
		question: "Mi sector es muy tradicional. ¿De verdad necesito esto?",
		answer: "Precisamente en sectores tradicionales (industria, logística, fabricación) es donde el branding marca la mayor diferencia. Si tu competencia se ve antigua y tú proyectas modernidad y solidez, el cliente te elegirá a ti asumiendo que tu servicio es mejor.",
	},
    {
		question: "Me interesa. ¿Qué tengo que hacer para empezar?",
		answer: "El primer paso es una llamada estratégica breve. Analizamos tu sector en Castilla y León, vemos qué hace tu competencia y trazamos un plan de ataque directo. Sin compromiso.",
	},
];

const QuestionsCYL: React.FC = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const toggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<>
			<section
				className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-transparent overflow-hidden"
				id="faq-cyl"
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
							Resolvemos las dudas habituales de las empresas de Castilla y León antes de empezar a trabajar.
						</p>
					</div>
					{/* Preguntas en grid de 2 columnas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
						{faqs.map((faq, idx) => (
							<button
								key={idx}
								type="button"
								onClick={() => toggle(idx)}
								className={`relative border border-white/10 bg-black/80 rounded-2xl px-6 py-5 flex flex-col hover:shadow-lg transition group text-left focus:outline-none hover:border-fuchsia-500/50`}
								aria-expanded={openIdx === idx}
								aria-controls={`faq-answer-cyl-${idx}`}
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
											className="text-white/70 group-hover:text-fuchsia-400 transition"
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
										id={`faq-answer-cyl-${idx}`}
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

export default QuestionsCYL;
