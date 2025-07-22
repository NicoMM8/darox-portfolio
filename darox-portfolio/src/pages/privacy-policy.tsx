import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | DAROX</title>
        <meta
          name="description"
          content="Lee la política de privacidad de DAROX y cómo protegemos tus datos personales y la información de tu empresa."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Política de Privacidad | DAROX" />
        <meta
          property="og:description"
          content="Lee la política de privacidad de DAROX y cómo protegemos tus datos personales y la información de tu empresa."
        />
        <meta
          property="og:image"
          content="https://darox.es/images/logo_horizontal.png"
        />
        <meta property="og:url" content="https://darox.es/privacy-policy" />
        <meta property="og:type" content="article" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidad | DAROX" />
        <meta
          name="twitter:description"
          content="Lee la política de privacidad de DAROX y cómo protegemos tus datos personales y la información de tu empresa."
        />
        <meta
          name="twitter:image"
          content="https://darox.es/images/logo_horizontal.png"
        />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Política de Privacidad | DAROX",
  "description": "Lee la política de privacidad de DAROX y cómo protegemos tus datos personales y la información de tu empresa.",
  "url": "https://darox.es/privacy-policy"
}`}
        </script>
        <link rel="canonical" href="https://darox.es/privacy-policy" />
      </Head>

      <Navbar />

      <main className="min-h-screen w-full flex items-start justify-center pt-24 pb-16 px-4 bg-radial-darox">
        <div className="w-full max-w-5xl">
          {/* Badge y título */}
          <div className="flex flex-col items-start gap-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-700/90 border border-white/20 text-xs font-bold text-white shadow backdrop-blur-sm">
                LEER
              </span>
              <span className="rounded-lg border border-white/10 px-4 py-1 text-xs font-bold text-white/80 shadow backdrop-blur-sm bg-transparent">
                Política de Privacidad
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              Política de Privacidad
            </h1>
            <span className="text-base text-gray-400">
              Última actualización: 15 de junio de 2025, 00:00
            </span>
          </div>

          {/* Cuerpo */}
          <article className="prose prose-invert max-w-none space-y-8
            prose-h2:text-white prose-h2:text-5xl prose-h2:font-extrabold prose-h2:mb-2
            prose-p:text-gray-400 prose-p:text-lg prose-li:text-gray-400 prose-ul:pl-6">
            <section>
              <h2>1. Información que Recopilamos</h2>
              <p>
                Recopilamos información personal que nos proporcionas directamente, como nombre, correo electrónico y datos de contacto, así como información técnica (IP, navegador, dispositivo) cuando usas nuestros servicios.
              </p>
            </section>
            <section>
              <h2>2. Uso de la Información</h2>
              <ul>
                <li>
                  <strong>Prestación de servicios:</strong> Para gestionar tu cuenta y ofrecerte nuestros productos.
                </li>
                <li>
                  <strong>Mejora de la experiencia:</strong> Analizar el uso de la plataforma y optimizar funcionalidades.
                </li>
                <li>
                  <strong>Comunicaciones:</strong> Enviarte notificaciones, actualizaciones y promociones (puedes darte de baja en cualquier momento).
                </li>
              </ul>
            </section>
            <section>
              <h2>3. Compartición de Datos</h2>
              <p>
                No vendemos tus datos. Solo compartimos información con proveedores de servicios esenciales (hosting, analítica, email) bajo acuerdos de confidencialidad y protección de datos.
              </p>
            </section>
            <section>
              <h2>4. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, pérdida o alteración. Usamos cifrado, firewalls y acceso restringido.
              </p>
            </section>
            <section>
              <h2>5. Tus Derechos</h2>
              <ul>
                <li>
                  <strong>Acceso:</strong> Puedes solicitar una copia de tus datos personales.
                </li>
                <li>
                  <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.
                </li>
                <li>
                  <strong>Supresión:</strong> Pedir la eliminación de tus datos cuando ya no sean necesarios.
                </li>
                <li>
                  <strong>Oposición:</strong> Oponerte al tratamiento de tus datos para ciertos fines.
                </li>
              </ul>
            </section>
            <section>
              <h2>6. Cookies</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario y analizar el tráfico. Puedes gestionar tus preferencias desde la configuración de tu navegador.
              </p>
            </section>
            <section>
              <h2>7. Cambios en la Política</h2>
              <p>
                Podemos actualizar esta política en cualquier momento. Publicaremos la versión actualizada en este enlace y cambiaremos la fecha de “Última actualización”. El uso continuado implica la aceptación de los cambios.
              </p>
            </section>
            <section>
              <h2>8. Contacto</h2>
              <p>
                Si tienes preguntas o deseas ejercer tus derechos, escríbenos a{' '}
                <a
                  href="mailto:legal@darox.com"
                  className="text-indigo-400 hover:underline"
                >
                  legal@darox.com
                </a>
                .
              </p>
            </section>
            <p className="mt-8">
              Al utilizar DAROX, aceptas esta Política de Privacidad en su totalidad.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}