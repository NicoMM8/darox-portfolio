import React from "react";

const features = [
	{
		icon: "https://framerusercontent.com/images/AJiedqWbxVBOUN9xB5kV5MNLyw.svg",
		title: "Boost Your Revenue",
		badge: "PRO",
		subtitle: "Increase Profits",
		description:
			"Unlock new revenue streams with data-driven strategies and marketing.",
	},
	{
		icon: "https://framerusercontent.com/images/2kQwQv9nQwQwQwQwQwQwQwQwQwQwQwQw.svg",
		title: "Customizable Assets",
		badge: "",
		subtitle: "Editable Designs",
		description:
			"Easily modify and personalize design elements to fit your brand’s identity.",
	},
	{
		icon: "https://framerusercontent.com/images/3jJjJjJjJjJjJjJjJjJjJjJjJjJjJjJj.svg",
		title: "Bug Less Development",
		badge: "",
		subtitle: "Optimized Code",
		description:
			"Our bug-less development ensures that your website runs smooth and fast.",
	},
];

// Añade las otras 3 características extra
const extraFeatures = [
	{
		icon: "https://framerusercontent.com/images/extra1.svg",
		title: "Fast Delivery",
		badge: "",
		subtitle: "Lightning Speed",
		description:
			"Get your assets delivered in record time, so you never have to wait.",
	},
	{
		icon: "https://framerusercontent.com/images/extra2.svg",
		title: "24/7 Support",
		badge: "",
		subtitle: "Always Available",
		description:
			"Our team is ready to help you at any hour, any day.",
	},
	{
		icon: "https://framerusercontent.com/images/extra3.svg",
		title: "Scalable Solutions",
		badge: "",
		subtitle: "Grow With You",
		description:
			"Our services scale as your business grows, always adapting to your needs.",
	},
];

const Features: React.FC = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 text-white bg-black">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					{/* Tag destacado tipo Framer igual que en About y Proceso */}
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
						{/* Bullet blanco */}
						<span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
						{/* Texto con gradiente */}
						<span className="font-semibold text-base tag-destacado-text">
							Características
						</span>
					</div>
					<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
						Características de Diseño Ilimitadas <br />
						<span className="gradient-text">¡Entregadas en un Segundo!</span>
					</h3>
					<p className="text-lg text-gray-200 max-w-3xl mx-auto">
						Obtén características de diseño ilimitadas que te brindan la libertad de
						crear sin límites.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{features.map((f, idx) => (
						<a
							key={idx}
							href="#Servicios"
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
							{/* Flecha animada en la esquina superior derecha */}
							<span className="absolute top-5 right-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 17L17 7M7 7h10v10"
									/>
								</svg>
							</span>
							{/* Icono circular con glow y sombra */}
							<div className="flex items-center mb-6">
								<div className="relative mr-4 features-icon-bg">
									<div className="relative z-10 h-12 w-12 flex items-center justify-center rounded-full">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={f.icon}
											alt="Icono"
											className="h-12 w-12 object-contain rounded-full"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<h4 className="text-lg font-bold text-white">{f.title}</h4>
									{f.badge && (
										<span className="text-xs font-semibold px-3 py-1 ml-2 features-badge">
											{f.badge}
										</span>
									)}
								</div>
							</div>
							<div className="text-gray-300 text-base mb-1">{f.subtitle}</div>
							{/* Línea difuminada */}
							<div className="w-full h-0.5 my-4 rounded-full features-linea-difuminada" />
							<div className="text-gray-400 text-base">{f.description}</div>
						</a>
					))}
				</div>
				{/* Extra features abajo */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{extraFeatures.map((f, idx) => (
						<a
							key={idx}
							href="#Servicios"
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
							{/* Flecha animada en la esquina superior derecha */}
							<span className="absolute top-5 right-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-white opacity-80"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 17L17 7M7 7h10v10"
									/>
								</svg>
							</span>
							{/* Icono circular con glow y sombra */}
							<div className="flex items-center mb-6">
								<div className="relative mr-4 features-icon-bg">
									<div className="relative z-10 h-12 w-12 flex items-center justify-center rounded-full">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={f.icon}
											alt="Icono"
											className="h-12 w-12 object-contain rounded-full"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<h4 className="text-lg font-bold text-white">{f.title}</h4>
									{f.badge && (
										<span className="text-xs font-semibold px-3 py-1 ml-2 features-badge">
											{f.badge}
										</span>
									)}
								</div>
							</div>
							<div className="text-gray-300 text-base mb-1">{f.subtitle}</div>
							{/* Línea difuminada */}
							<div className="w-full h-0.5 my-4 rounded-full linea-difuminada" />
							<div className="text-gray-400 text-base">{f.description}</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;