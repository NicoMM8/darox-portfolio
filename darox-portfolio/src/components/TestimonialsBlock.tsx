import React from "react";

const testimonials = [
  {
    name: "Richards Johnson",
    position: "Creative Director & Lead Designer",
    image: "https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg",
    quote:
      "Trabajar con Meily fue una experiencia fluida. Su capacidad para unir creatividad y funcionalidad resultó en diseños que no solo lucen increíbles, sino que generan engagement real. ¡Muy recomendada!",
  },
  {
    name: "June Lee",
    position: "CEO de GreenRoots",
    image: "https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png",
    quote:
      "El enfoque estratégico de Meily llevó nuestra visión de marca a otro nivel. El packaging y los elementos que desarrolló elevaron nuestra estética y se alinearon con nuestros valores de sostenibilidad.",
  },
  {
    name: "Jona Carter",
    position: "Founder de EcoLux",
    image: "https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png",
    quote:
      "Cada proyecto que toca Meily se convierte en una mezcla perfecta de diseño y propósito. El packaging reflejó nuestra misión eco y destacó nuestros productos en los estantes.",
  },
  {
    name: "Sofia Toms",
    position: "Founder at GreenK Studios",
    image: "https://framerusercontent.com/images/VG4Ga2U7ZktrC75M3Vg8eUynj4M.png",
    quote:
      "Los diseños de Meily hablan por sí solos: audaces, estratégicos e impactantes. Entendió nuestra marca y entregó conceptos que resonaron con nuestro público objetivo.",
  },
];

const stats = [
  { value: "180+", label: "Proyectos de diseño completados." },
  { value: "96%", label: "Índice de satisfacción de clientes." },
  { value: "15+", label: "Años de experiencia." },
];

// Duración de la animación en segundos (más alto = más lento)
const animationDuration = 30;

const TestimonialsBlock: React.FC = () => (
  <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      {/* Tag destacado */}
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
        <span className="font-semibold text-base tag-destacado-text bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Testimonios
        </span>
      </div>
      {/* Estadísticas */}
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] rounded-xl shadow-lg px-8 py-6 border border-white/10 min-w-[180px]"
          >
            <h3 className="text-3xl font-extrabold gradient-text mb-2 text-center">{s.value}</h3>
            <p className="text-base text-white/70 text-center">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Carrusel infinito */}
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8 animate-[scroll-carousel_linear_infinite]"
            style={{
              width: "max-content",
              animationDuration: `${animationDuration}s`,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="
    relative group rounded-2xl border border-white/10
    bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
    shadow-xl p-8 flex flex-col overflow-hidden
    backdrop-blur-[2.5px]
    transition duration-300 hover:scale-[1.03] hover:shadow-2xl
    min-w-[520px] max-w-2xl
    testimonial-card
  "
                style={{
                  minHeight: 580,
                  flex: "0 0 520px",
                }}
              >
                {/* Línea azul decorativa superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-2xl pointer-events-none opacity-70" />

                {/* Imagen circular con borde y sombra, SIN glow */}
                <div className="flex justify-center items-center mb-6 relative">
                  <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow-lg">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-24 w-24 object-cover rounded-full img-shadow-indigo"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </div>

                {/* Nombre y posición */}
                <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                <span className="text-base text-white/60 mb-4">{t.position}</span>

                {/* Línea difuminada */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full mb-6" />

                {/* Testimonio */}
                <blockquote className="text-lg text-white/80 italic mb-6 text-center">
                  “{t.quote}”
                </blockquote>

                {/* Rating tipo badge */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/15 shadow about-shadow">
                    5.0
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-6 h-6" fill="#FFD700" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsBlock;