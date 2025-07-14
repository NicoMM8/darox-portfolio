import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/JRAKWKlMtuarIVCJ574VvX8hUDQ.png" alt="Estadísticas" className="h-16 mx-auto mb-4" loading="lazy" />
            <h4 className="text-xl font-bold mb-2">Tiempo de Respuesta Rápido</h4>
            <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded mb-3">NUEVO</span>
            <p className="text-gray-300">
              Priorizamos la eficiencia sin comprometer la calidad.
            </p>
          </div>
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/ldgnQLBGvrfDRFhMWwp0l01S1M.png" alt="UI" className="h-16 mx-auto mb-4" loading="lazy" />
            <h4 className="text-xl font-bold mb-2">Publica en Segundos</h4>
            <p className="text-gray-300">
              Publica tu sitio en segundos con nuestro proceso optimizado.
            </p>
          </div>
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/70Cw0V8JFQzVCIhorQ15yMIaI.jpg" alt="Vista Móvil" className="h-16 mx-auto mb-4" loading="lazy" />
            <h4 className="text-xl font-bold mb-2">Solicitudes y Revisiones</h4>
            <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded mb-3">NUEVO</span>
            <p className="text-gray-300">
              Nuestro proceso incluye múltiples rondas de solicitudes y revisiones, asegurando que tus comentarios sean incorporados.
            </p>
          </div>
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/QzVJof4LyYozD7Me8ArhbSZj2w.jpg" alt="Abstractos 3D" className="h-16 mx-auto mb-4" loading="lazy" />
            <h4 className="text-xl font-bold mb-2">Precios Sin Preocupaciones</h4>
            <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded mb-3">NUEVO</span>
            <p className="text-gray-300">
              Ya sea que estés comenzando o escalando, nuestros planes de precios flexibles están diseñados para adaptarse a tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats