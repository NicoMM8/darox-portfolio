import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import LogoCarousel from '../components/LogoCarousel';
import Resultados from '../components/Resultados';
import BeneficiosCYL from '../components/cyl/BeneficiosCYL';
import QuestionsCYL from '../components/cyl/QuestionsCYL';
import { getAllPosts } from '../lib/mdx';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
  image?: string;
}

interface Props {
  posts: Post[];
}

export default function AgenciaBrandingCastillaLeon({ posts }: Props) {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Agencia de Branding en Castilla y León | DAROX</title>
        <meta
          name="description"
          content="Agencia de branding estratégico y ecosistemas corporativos para empresas en Castilla y León. Proyecta autoridad y lidera tu sector B2B."
        />
        <meta name="keywords" content="agencia branding castilla y leon, estrategia de marca pymes castilla leon, identidad corporativa cyl, darox branding" />
        <link rel="canonical" href="https://darox.es/agencia-branding-castilla-leon" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Agencia de Branding en Castilla y León | DAROX" />
        <meta property="og:description" content="Agencia de branding estratégico y ecosistemas corporativos para empresas en Castilla y León. Proyecta autoridad y lidera tu sector B2B." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Agencia de Branding en Castilla y León" />
        <meta property="og:url" content="https://darox.es/agencia-branding-castilla-leon" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Agencia de Branding en Castilla y León | DAROX" />
        <meta name="twitter:description" content="Agencia de branding estratégico y ecosistemas corporativos para empresas en Castilla y León. Proyecta autoridad y lidera tu sector B2B." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        {/* LocalBusiness Schema regional adaptado a Branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://darox.es/agencia-branding-castilla-leon/#organization",
                  "name": "DAROX Brandmaker - Agencia de Branding",
                  "image": "https://darox.es/images/logo_horizontal.webp",
                  "url": "https://darox.es/agencia-branding-castilla-leon",
                  "email": "contacto@darox.es",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Burgos",
                    "addressRegion": "Castilla y León",
                    "postalCode": "09001",
                    "addressCountry": "ES"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "42.3439",
                    "longitude": "-3.6969"
                  },
                  "priceRange": "490€ - 1950€",
                  "description": "Agencia digital especializada en diseño de marca, branding estratégico y sistemas corporativos para empresas industriales y B2B en Castilla y León.",
                  "areaServed": ["Burgos", "Valladolid", "León", "Salamanca", "Palencia", "Zamora", "Soria", "Segovia", "Ávila"]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://darox.es/agencia-branding-castilla-leon/#webpage",
                  "url": "https://darox.es/agencia-branding-castilla-leon",
                  "name": "Agencia de Branding en Castilla y León | DAROX",
                  "description": "Agencia de branding estratégico y ecosistemas corporativos para empresas en Castilla y León.",
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "breadcrumb": { "@id": "https://darox.es/agencia-branding-castilla-leon/#breadcrumb" },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#hero-title-cyl", "#hero-description-cyl"]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/agencia-branding-castilla-leon/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                    { "@type": "ListItem", "position": 2, "name": "Agencia Branding Castilla y León", "item": "https://darox.es/agencia-branding-castilla-leon" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/fondo2_poster.webp"
        aria-hidden="true"
        style={{ opacity: videoOpacity }}
        className="fixed inset-0 w-full h-full object-cover object-center z-[-1] pointer-events-none"
      >
        <source src="/images/fondo2.mp4" type="video/mp4" />
      </motion.video>

      <main className="min-h-screen bg-transparent text-white">
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white">
            <div className="container mx-auto px-6 text-center z-10">
                {/* Logo grande y elevado */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -64 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative z-10 -mt-8 mb-6"
                    >
                        <Image
                            src="/images/logo_horizontal.webp"
                            alt="Logo de DAROX, agencia de branding en Castilla y León"
                            width={400}
                            height={400}
                            className="w-80 md:w-96 lg:w-[28rem] h-auto"
                            priority
                            loading="eager"
                        />
                    </motion.div>
                </div>

                {/* BLOQUE DE TEXTO DESTACADO */}
                <motion.div
                    initial={{ opacity: 0, x: 64 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative z-20 text-center max-w-5xl mx-auto px-2 flex flex-col items-center"
                >
                    <h1 id="hero-title-cyl" className="flex flex-col items-center mb-6 gap-3">
                        <span className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-fuchsia-400 drop-shadow-md">
                            Agencia de Branding en Castilla y León
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight text-center">
                            Imagen de gran empresa. Trato de cercanía.
                        </span>
                    </h1>
                    <p
                        id="hero-description-cyl"
                        className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow"
                    >
                        Si tienes un buen producto pero tu marca parece de hace 15 años, terminarás peleando por ser el más barato. Te ayudamos a actualizar la imagen de tu negocio para que puedas cobrar lo que realmente vale tu trabajo.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
                        <Link 
                            href="/contacto" 
                            className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] border border-fuchsia-500/50 hover:-translate-y-0.5 text-base w-full sm:w-auto px-10 py-3"
                        >
                            Solicitar Auditoría de Marca
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Fondo con animación de alejamiento y caída */}
            <motion.div 
                style={{ opacity, scale, y: yParallax }}
                className="absolute inset-0 z-0 mix-blend-screen"
            >
                <div className="
                    absolute inset-0
                    bg-[url('/images/fondo_hero.webp')]
                    bg-no-repeat
                    bg-center
                    bg-[length:180%]
                    sm:bg-[length:120%]
                    transform origin-center
                " />
                
                {/* Overlay muy sutil */}
                <div className="absolute inset-0 bg-black/10" />
            </motion.div>
        </section>

        {/* LOGOS */}
        <LogoCarousel />

        {/* RESULTADOS */}
        <section className="pt-24 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] mb-4 shadow overflow-hidden tag-destacado">
              <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
              <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
              <span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] tag-destacado-text text-white/80">
                CASOS DE ESTUDIO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Resultados de <span className="gradient-text">verdad.</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 w-full leading-relaxed max-w-4xl">
              Aquí no verás humo ni plantillas. Aquí tienes empresas reales de la región que llegaron atascadas o perdiendo clientes frente a la competencia, y cómo un buen reposicionamiento les dio la vuelta.
            </p>
          </div>
        </section>

        <Resultados />

        <BeneficiosCYL />

        <QuestionsCYL />

        {/* SECCIÓN BLOG MINIMALISTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 pointer-events-none z-[-1]" />
          <div className="relative max-w-5xl mx-auto flex flex-col gap-12 z-10">
            <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-fuchsia-500 font-bold tracking-widest text-xs uppercase">Conocimiento</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Desde el <span className="gradient-text">Blog</span>
                </h2>
              </div>
              <Link 
                href="/blog" 
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium"
              >
                Ver todos los artículos
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts && posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {post.image && (
                    <div className="relative w-full h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={post.image} 
                        alt={`Portada de ${post.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-fuchsia-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-white/40 text-xs font-medium">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'readTime',
    'image',
  ]);

  // Solo tomamos los 3 más recientes
  const posts = allPosts.slice(0, 3);

  return {
    props: { posts },
  };
}
