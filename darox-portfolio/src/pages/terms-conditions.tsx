import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | DAROX</title>
        <meta
          name="description"
          content="Lee los términos y condiciones de uso de los servicios de DAROX."
        />
      </Head>

      <Navbar />

      <main
        className="min-h-screen w-full flex items-start justify-center pt-24 pb-16 px-4 bg-radial-darox"
      >
        <div className="w-full max-w-5xl">
          {/* Badge y título */}
          <div className="flex flex-col items-start gap-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-700/90 border border-white/20 text-xs font-bold text-white shadow backdrop-blur-sm">
                LEER
              </span>
              <span className="rounded-lg border border-white/10 px-4 py-1 text-xs font-bold text-white/80 shadow backdrop-blur-sm bg-transparent">
                Términos y Condiciones
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              Términos y Condiciones
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
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al utilizar DAROX, reconoces que has leído, entendido y aceptas estar sujeto a estos Términos y Condiciones, así como a nuestra Política de Privacidad. Estos Términos aplican a todos los usuarios de la plataforma, incluidos visitantes, usuarios registrados y cualquier otra persona que acceda a DAROX.
              </p>
            </section>
            <section>
              <h2>2. Uso de los Servicios</h2>
              <ul>
                <li>
                  <strong>Ser mayor de 18 años:</strong> o contar con autorización de tu representante legal.
                </li>
                <li>
                  <strong>Crear una cuenta:</strong> si deseas acceder a funciones avanzadas. Eres responsable de mantener la confidencialidad de tus credenciales.
                </li>
                <li>
                  <strong>No realizar actividades prohibidas:</strong> como distribuir malware, suplantar identidades o promover acciones ilegales.
                </li>
              </ul>
            </section>
            <section>
              <h2>3. Contenido Generado por el Usuario</h2>
              <p>
                Puedes subir textos, imágenes y otros recursos (“Contenido de Usuario”), pero siempre conservas la propiedad. Al publicar, otorgas a DAROX una licencia mundial y libre de regalías para usar, reproducir y mostrar dicho contenido para mejorar el servicio.
              </p>
            </section>
            <section>
              <h2>4. Propiedad Intelectual</h2>
              <p>
                Todos los derechos sobre el software, diseños, logotipos y marcas de DAROX pertenecen a DAROX. Queda prohibida la copia, distribución o creación de obras derivadas sin autorización previa por escrito.
              </p>
            </section>
            <section>
              <h2>5. Terminación del Servicio</h2>
              <p>
                DAROX se reserva el derecho de suspender o cancelar tu cuenta si violas estos Términos, sin previo aviso. Al finalizar, cesan todos los permisos otorgados.
              </p>
            </section>
            <section>
              <h2>6. Exención de Responsabilidad</h2>
              <p>
                Los servicios se proporcionan “tal cual” y “según disponibilidad”. DAROX no garantiza que la plataforma esté libre de errores o interrupciones. El uso es bajo tu propio riesgo.
              </p>
            </section>
            <section>
              <h2>7. Limitación de Responsabilidad</h2>
              <p>
                En la máxima medida permitida por la ley, DAROX no será responsable de daños indirectos, incidentales o consecuentes (pérdida de datos, ingresos, reputación) derivados del uso de la plataforma.
              </p>
            </section>
            <section>
              <h2>8. Cambios en los Términos</h2>
              <p>
                Podemos actualizar estos Términos en cualquier momento. Publicaremos la versión actualizada en este enlace y cambiaremos la fecha de “Última actualización”. El uso continuado de los servicios implica la aceptación de dichos cambios.
              </p>
            </section>
            <section>
              <h2>9. Ley Aplicable</h2>
              <p>
                Estos Términos se rigen por las leyes de España. Cualquier disputa se resolverá ante los tribunales de Burgos, renunciando a cualquier otro fuero.
              </p>
            </section>
            <section>
              <h2>10. Contacto</h2>
              <p>
                Si tienes preguntas o comentarios sobre estos Términos, escribe a{' '}
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
              Al utilizar DAROX, aceptas estos Términos y Condiciones en su totalidad.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
