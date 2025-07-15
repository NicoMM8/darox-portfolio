import React from "react";
import { motion } from "framer-motion";

const benefitsList = [
  "Mejorada UX",
  "Conversiones Aumentadas",
  "Carga Rápida",
  "Optimización SEO",
  "Personalizable",
  "Escalable",
  "Compromiso Aumentado",
  "Expandable",
  "Seguro",
  "Fácil de Usar"
];

// Carrusel infinito real
const InfiniteCarousel: React.FC<{
  items: string[];
  reverse?: boolean;
  duration?: number;
}> = ({ items, reverse = false, duration = 18 }) => {
  // Duplicamos los items para el bucle
  const fullList = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-2"
        style={{
          flexDirection: reverse ? "row-reverse" : "row",
          minWidth: "max-content",
        }}
        animate={{
          x: reverse ? ["0%", "-50%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
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
      </motion.div>
    </div>
  );
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: { scale: 1.03, boxShadow: "0 8px 40px 0 rgba(0,85,255,0.25)" }
};

const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
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
            {/* Línea azul decorativa superior, fina y sutil */}
            <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
            {/* Bullet blanco */}
            <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
            {/* Texto con gradiente */}
            <span className="font-semibold text-base tag-destacado-text">
              Beneficios de trabajar con DAROX
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
            No Solo Diseñamos, <br />
            Construimos.
          </h2>
          <h3 className="text-2xl text-white/60 font-semibold mb-4">
            Si puedes soñarlo, ¡podemos hacerlo realidad!
          </h3>
        </div>
        {/* Pills en dos filas, salto en Compromiso Aumentado */}
        <div className="w-full mb-12 pl-2 flex flex-col items-start gap-2">
          <div className="flex flex-wrap gap-2">
            {benefitsList.slice(0, 6).map((benefit, index) => (
              <motion.div
                key={index}
                className="
                  px-5 py-2 rounded-[12px] border border-white/15
                  bg-black/80 text-white/80 font-semibold
                  shadow-sm transition text-base text-left
                  whitespace-nowrap
                  hover:bg-white hover:text-black hover:border-white/30
                  duration-200
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ scale: 1.07, boxShadow: "0 8px 40px 0 rgba(0,85,255,0.15)" }}
                viewport={{ once: true }}
              >
                {benefit}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {benefitsList.slice(6).map((benefit, index) => (
              <motion.div
                key={index}
                className="
                  px-5 py-2 rounded-[12px] border border-white/15
                  bg-black/80 text-white/80 font-semibold
                  shadow-sm transition text-base text-left
                  whitespace-nowrap
                  hover:bg-white hover:text-black hover:border-white/30
                  duration-200
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (index + 6), duration: 0.4 }}
                whileHover={{ scale: 1.07, boxShadow: "0 8px 40px 0 rgba(0,85,255,0.15)" }}
                viewport={{ once: true }}
              >
                {benefit}
              </motion.div>
            ))}
            {/* Botón pill al final */}
            <motion.a
              href="#"
              className="
                px-5 py-2 rounded-[11px] border border-white/15
                bg-white text-black font-semibold
                shadow-sm transition text-base text-left
                flex items-center whitespace-nowrap
                hover:bg-blue-600 hover:text-white hover:border-blue-600
                duration-200
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 40px 0 rgba(0,85,255,0.15)" }}
              viewport={{ once: true }}
            >
              Contacta Ahora
            </motion.a>
          </div>
        </div>
        {/* Bloque principal: Card grande a la izquierda, dos cards apiladas a la derecha */}
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">
          {/* Card grande a la izquierda */}
          <motion.div
            className="w-full md:w-1/2"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="group relative">
              <motion.img
                src="https://framerusercontent.com/images/nt3TDX5zl4zsmwO69xL44yiUM.jpg"
                alt="Abstracto 3D Azul"
                className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />
              {/* Glow animado */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-500 opacity-30 blur-2xl rounded-full pointer-events-none group-hover:opacity-50 transition" />
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-8">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Submit Unlimited Requests</h4>
              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mb-4" />
              <p className="text-white/60 text-base mb-6 max-w-md">
                Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we’re here to assist you at every step.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="px-6 py-2 rounded-[10px] bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition border-2 border-blue-600"
                  whileHover={{ scale: 1.08, backgroundColor: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Book an Appointment
                </motion.a>
                <motion.a
                  href="#"
                  className="px-6 py-2 rounded-[10px] bg-white/10 text-white font-semibold shadow hover:bg-white/20 transition border-2 border-white/15 backdrop-blur-[2px]"
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ duration: 0.2 }}
                >
                  What is Landin?
                </motion.a>
              </div>
            </div>
          </motion.div>
          {/* Dos cards apiladas a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
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
                <motion.img
                  src="https://framerusercontent.com/images/QzVJof4LyYozD7Me8ArhbSZj2w.jpg"
                  alt="Worry Free Pricing"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Glow animado */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">Worry Free Pricing</h4>
                <span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">NEW</span>
              </div>
              <p className="text-white/60 text-base">
                Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, so you can get started without any financial stress.
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
                <motion.img
                  src="https://framerusercontent.com/images/70Cw0V8JFQzVCIhorQ15yMIaI.jpg"
                  alt="References"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Glow animado */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">References</h4>
                <span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">NEW</span>
              </div>
              <p className="text-white/60 text-base">
                Discover what our clients say about us and see real results from our previous projects.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Cards pequeñas alineadas horizontalmente debajo del bloque grande */}
        <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-12 w-full">
          {/* Card 1 */}
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
                <motion.img
                  src="https://framerusercontent.com/images/ldgnQLBGvrfDRFhMWwp0l01S1M.png"
                  alt="Requests & Revisions"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Glow animado */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">Requests &amp; Revisions</h4>
                <span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">NEW</span>
              </div>
              <p className="text-white/60 text-base">
                Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and that the final product meets your expectations.
              </p>
            </div>
          </motion.div>
          {/* Card 2 */}
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
                <motion.img
                  src="https://framerusercontent.com/images/JRAKWKlMtuarIVCJ574VvX8hUDQ.png"
                  alt="Quick Turnaround"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Glow animado */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">Quick Turnaround</h4>
                <span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">NEW</span>
              </div>
              <p className="text-white/60 text-base">
                We prioritize efficiency without compromising quality.
              </p>
            </div>
          </motion.div>
          {/* Card 3 - Nueva caja a la derecha */}
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
                <motion.img
                  src="https://framerusercontent.com/images/70Cw0V8JFQzVCIhorQ15yMIaI.jpg"
                  alt="New Feature"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Glow animado */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">New Feature</h4>
                <span className="bg-blue-600 text-xs font-semibold text-white px-2 py-0.5 rounded ml-1">NEW</span>
              </div>
              <p className="text-white/60 text-base">
                Description for the new feature or benefit. You can customize este texto según lo que quieras destacar aquí.
              </p>
            </div>
          </motion.div>
        </div>
        {/* ...resto del contenido si lo hubiera */}
      </div>
    </section>
  );
};

export default Benefits;