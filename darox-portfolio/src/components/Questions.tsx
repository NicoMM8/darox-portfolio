import React, { useState } from "react";
import Head from "next/head";

const faqs = [
	{
		question: "¿Por qué decís que una web sin un CRM automatizado no sirve de nada?",
		answer: "Sin automatización, una web pierde entre el 40% y el 70% de los leads captados. Si un cliente entra a tu web, te deja sus datos y tú tardas 24 horas en responderle manualmente desde un Excel, lo has perdido. Integramos automatizaciones para que tu sistema capture, filtre y nutra a los leads en piloto automático.",
	},
	{
		question: "¿Qué significa exactamente que garantizáis el SEO?",
		answer: "Garantizamos que tu web estará técnicamente optimizada para posicionarse en Google desde el primer día: velocidad de carga extrema (Core Web Vitals superiores), arquitectura semántica correcta y textos estructurados para tu intención de búsqueda local. No instalamos un plugin y lo llamamos SEO: construimos la base técnica completa.",
	},
	{
		question: "Mi sector es muy tradicional o específico, ¿podéis ayudarme?",
		answer: "Sí. Hemos digitalizado negocios en sectores tan distintos como clínicas dentales, empresas de logística industrial, bodegas y bufetes de abogados. La ingeniería de negocio y la psicología de ventas funcionan en cualquier sector. Analizamos a tu competencia, detectamos sus puntos débiles y construimos un sistema para superarlos.",
	},
	{
		question: "¿Hay costes ocultos, hosting o licencias sorpresa?",
		answer: "No. Todos los costes están blindados por contrato antes de empezar. En nuestra propuesta detallamos exactamente qué incluye el desarrollo, qué tecnologías usamos y si hay costes de terceros (hosting, dominio, herramientas). Sin cargos inesperados a mitad del proyecto.",
	},
	{
		question: "¿Cuánto tiempo tardaremos en lanzar el proyecto?",
		answer: "Entre 3 y 6 semanas según el pack contratado. Un sistema web de una página (Grow Pack) está listo en 3-4 semanas; un proyecto corporativo completo (Business Pack) en 4-6 semanas. Los plazos se firman en contrato: la fecha de lanzamiento es inamovible.",
	},
	{
		question: "¿Seré dueño de mi web y podré gestionarla yo mismo?",
		answer: "Sí, eres el propietario total de todos los activos: código, dominio, contenidos y accesos. Te entregamos el sistema completamente documentado y fácil de actualizar sin tocar una línea de código. También ofrecemos sesiones de formación para que tu equipo tome el control desde el primer día.",
	},
	{
		question: "¿Qué pasa si el diseño final no me convence?",
		answer: "Cada proyecto incluye rondas de revisión estructuradas en cada hito. No desaparecemos un mes y volvemos con algo que no te gusta: revisamos cada componente estratégico contigo durante el proceso. Si al final del proyecto el resultado no cumple lo acordado en el briefing, lo ajustamos sin coste adicional.",
	},
	{
		question: "Me interesa. ¿Cuál es el primer paso para empezar a trabajar juntos?",
		answer: "El primer paso es una sesión estratégica gratuita de 15 minutos. Analizamos la situación actual de tu negocio, identificamos las mayores oportunidades de mejora y te presentamos una hoja de ruta clara. Sin compromiso y sin presión comercial. Puedes agendarla directamente desde la página de contacto.",
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

export default Questions;