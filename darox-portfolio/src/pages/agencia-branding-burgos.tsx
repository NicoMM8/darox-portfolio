import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoCarousel from '../components/LogoCarousel';
import Resultados from '../components/Resultados';
import AboutBurgos from '../components/burgos/AboutBurgos';
import BeneficiosBurgos from '../components/burgos/BeneficiosBurgos';
import HeroBurgos from '../components/burgos/HeroBurgos';
import QuestionsBurgos from '../components/burgos/QuestionsBurgos';
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

export default function AgenciaBrandingBurgos({ posts }: Props) {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Agencia de Branding y Estrategia en Burgos | DAROX</title>
        <meta
          name="description"
          content="Agencia de branding en Burgos. Construimos marcas sólidas y estrategias corporativas enfocadas en conseguir clientes B2B. Presupuestos desde 490€."
        />
        <meta name="keywords" content="branding burgos, agencia branding burgos, estrategia marca burgos, agencia seo local burgos, darox branding" />
        <link rel="canonical" href="https://darox.es/agencia-branding-burgos/" />

        <meta property="og:title" content="Agencia de Branding y Estrategia en Burgos | DAROX" />
        <meta property="og:description" content="Agencia de branding en Burgos para negocios locales y startups. Construimos marcas sólidas desde 490€." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Agencia de Branding en Burgos" />
        <meta property="og:url" content="https://darox.es/agencia-branding-burgos/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Agencia de Branding y Estrategia en Burgos | DAROX" />
        <meta name="twitter:description" content="Agencia de branding en Burgos. Construimos marcas sólidas desde 490€." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": "https://darox.es/agencia-branding-burgos/#organization",
                "name": "DAROX Brandmaker - Agencia de Branding Burgos",
                "image": "https://darox.es/images/logo_horizontal.webp",
                "url": "https://darox.es/agencia-branding-burgos",
                "email": "contacto@darox.es",
                "telephone": "+34 XXX XXX XXX", // TODO: reemplazar con el número real
                "address": { "@type": "PostalAddress", "addressLocality": "Burgos", "addressRegion": "Castilla y León", "postalCode": "09001", "addressCountry": "ES" },
                "geo": { "@type": "GeoCoordinates", "latitude": "42.3439", "longitude": "-3.6969" },
                "hasMap": "https://www.google.com/maps/search/DAROX+Brandmaker+Burgos/", // TODO: reemplazar con URL real del GBP
                "priceRange": "490€ - 1950€",
                "currenciesAccepted": "EUR",
                "paymentAccepted": "Transferencia Bancaria, Tarjeta de Crédito, Stripe, PayPal",
                "description": "Agencia de branding en Burgos. Estrategia de marca, identidad corporativa y digitalización B2B para pymes de Castilla y León.",
                "areaServed": ["Burgos", "Castilla y León"],
                "parentOrganization": { "@id": "https://darox.es/#organization" },
                "sameAs": [
                  "https://darox.es/#organization",
                  "https://www.google.com/maps/search/DAROX+Brandmaker+Burgos/" // TODO: reemplazar con URL real del GBP
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://darox.es/agencia-branding-burgos/#webpage",
                "url": "https://darox.es/agencia-branding-burgos",
                "name": "Agencia de Branding y Estrategia en Burgos | DAROX",
                "description": "Agencia de branding en Burgos. Construimos marcas sólidas y estrategias corporativas enfocadas en conseguir clientes B2B. Presupuestos desde 490\u20ac.",
                "isPartOf": { "@id": "https://darox.es/#website" },
                "breadcrumb": { "@id": "https://darox.es/agencia-branding-burgos/#breadcrumb" },
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "cssSelector": ["#burgos-intro", "h1"]
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://darox.es/agencia-branding-burgos/#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Agencia Branding Burgos", "item": "https://darox.es/agencia-branding-burgos" }
                ]
              }
            ]
          })}}
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

        <HeroBurgos />

        <LogoCarousel />
        
        <AboutBurgos />

        {/* Encabezado de sección Portfolio */}
        <section className="pt-16 pb-0 px-4 sm:px-6 lg:px-8">
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
            <p className="text-white/80 text-lg md:text-xl mb-8 w-full leading-relaxed">
              No estamos aquí para enseñarte un portfolio de cosas bonitas. Aquí tienes empresas reales que llegaron atascadas o perdiendo clientes, y cómo una buena estrategia de marca les ha dado la vuelta.
            </p>
          </div>
        </section>

        <Resultados />

        <BeneficiosBurgos />

        <QuestionsBurgos />

        {/* SECCIÓN BLOG MINIMALISTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Gradiente súper suave para integrar la sección sin que parezca un bloque distinto */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 pointer-events-none z-[-1]" />
          <div className="relative max-w-5xl mx-auto flex flex-col gap-12 z-10">
            <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Conocimiento</span>
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
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
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
