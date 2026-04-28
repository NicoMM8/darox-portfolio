import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import About from '../components/About';
import Results from '../components/Resultados';
import Benefits from '../components/Beneficios';
import Services from '../components/Servicios';
import Questions from '../components/Questions';
import { getAllPosts } from '../lib/mdx';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
  image?: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  // El vídeo empieza invisible en el Hero y aparece al hacer scroll
  // scrollY: 0px → opacity 0 (Hero limpio con su imagen de planeta)
  // scrollY: 600px → opacity 0.8 (vídeo visible para el resto de secciones)
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);
  return (
    <>
      <Head>
        <title>Agencia de Branding y Diseño Web Profesional | DAROX</title>
        {/* Preload: imagen LCP del hero */}
        <link rel="preload" as="image" href="/images/fondo_hero.webp" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Agencia de branding y diseño web en Burgos y España. Creamos sistemas de alta conversión, identidades visuales y automatización CRM para negocios que no toleran la mediocridad."
        />
        <meta name="keywords" content="agencia branding españa, diseño web empresas, automatización, marketing, branding startup, darox" />
        <link rel="canonical" href="https://darox.es/" />

        {/* Open Graph */}
        <meta property="og:title" content="Agencia de Branding y Diseño Web Profesional | DAROX" />
        <meta property="og:description" content="¿Buscas diseño web en España o branding estratégico que genere ventas? En DAROX creamos sistemas de alta conversión y automatización. Agenda tu sesión." />
        <meta property="og:url" content="https://darox.es/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Agencia de Branding y Diseño Web en Burgos" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Agencia de Branding y Diseño Web Profesional | DAROX" />
        <meta name="twitter:description" content="¿Buscas diseño web en España o branding estratégico que genere ventas? En DAROX creamos sistemas de alta conversión y automatización. Agenda tu sesión." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        {/* === SCHEMA SEO GRAPH (10/10 Interconnected Structure) === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://darox.es/#organization",
                  "name": "DAROX",
                  "alternateName": "DAROX Brandmaker",
                  "image": "https://darox.es/images/logo_horizontal.webp",
                  "logo": "https://darox.es/images/logo_horizontal.webp",
                  "url": "https://darox.es",
                  "email": "contacto@darox.es",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Burgos Capital",
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
                  "areaServed": ["Burgos", "Castilla y León", "España"],
                  "priceRange": "490€ - 1950€",
                  "description": "Agencia de branding y diseño web en Burgos y España. Especialistas en identidad visual, desarrollo web de alta conversión y automatización CRM para pymes y startups.",
                  "knowsAbout": ["Branding", "Diseño Web", "SEO", "Automatización CRM", "UI/UX", "Marketing Digital"],
                  "foundingDate": "2023",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "19:00"
                  },
                  "sameAs": [
                    "https://www.instagram.com/darox.bm/",
                    "https://x.com/DaroxBrandMaker",
                    "https://www.youtube.com/@daroxbrandmaker"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://darox.es/#website",
                  "url": "https://darox.es",
                  "name": "DAROX",
                  "description": "Agencia de branding y diseño web en Burgos. Creamos sistemas de alta conversión y automatización para negocios que no toleran la mediocridad.",
                  "inLanguage": "es-ES",
                  "publisher": { "@id": "https://darox.es/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://darox.es/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://darox.es/#webpage",
                  "url": "https://darox.es/",
                  "name": "Agencia de Branding y Diseño Web Profesional | DAROX",
                  "description": "Agencia de branding y diseño web en Burgos y España. Creamos identidades visuales, webs de alta conversión y automatizaciones CRM desde 490€.",
                  "inLanguage": "es-ES",
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "about": { "@id": "https://darox.es/#organization" },
                  "dateModified": "2026-04-24",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#hero-description", "#about-geo-text", "#servicios-intro"]
                  },
                  "breadcrumb": { "@id": "https://darox.es/#breadcrumb" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />
      {/* Fondo de vídeo: invisible en el Hero, aparece al desplazar */}
      {/* Vídeo de fondo: preload=none para no bloquear LCP. Visible solo tras scroll */}
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
      <Hero />
      <LogoCarousel />
      <About />

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
            No lo decimos nosotros. <span className="gradient-text">Lo demuestran los números.</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 w-full leading-relaxed">
            No estamos aquí para enseñarte &quot;diseños bonitos&quot;. Aquí tienes empresas reales que llegaron con problemas de ventas o visibilidad, y cómo las hemos posicionado usando estrategia pura y tecnología web que funciona.
          </p>
        </div>
      </section>

      <Results />
      <Benefits />
      <Services />
      <Questions />

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
            {posts.map((post) => (
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

