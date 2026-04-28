import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { getAllPosts } from '../../lib/mdx';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
}

interface BlogProps {
  posts: Post[];
}

export default function BlogIndex({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Blog sobre Branding, Web y Automatización | DAROX</title>
        <meta
          name="description"
          content="Artículos sobre estrategias de branding, diseño web que convierte y automatización con IA para negocios en Burgos y España."
        />
        <link rel="canonical" href="https://darox.es/blog" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": "https://darox.es/blog/#blog",
              "name": "Blog de DAROX",
              "description": "Artículos sobre estrategias de branding, diseño web que convierte y automatización con IA.",
              "publisher": { "@id": "https://darox.es/#organization" },
              "blogPost": posts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "url": `https://darox.es/blog/${post.slug}`
              }))
            },
            {
              "@type": "ItemList",
              "@id": "https://darox.es/blog/#itemlist",
              "itemListElement": posts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "url": `https://darox.es/blog/${post.slug}`
                }
              }))
            },
            {
              "@type": "CollectionPage",
              "@id": "https://darox.es/blog/#webpage",
              "url": "https://darox.es/blog",
              "name": "Blog sobre Branding, Web y Automatización | DAROX",
              "isPartOf": { "@id": "https://darox.es/#website" },
              "breadcrumb": { "@id": "https://darox.es/blog/#breadcrumb" },
              "mainEntity": { "@id": "https://darox.es/blog/#itemlist" }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://darox.es/blog/#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://darox.es/blog" }
              ]
            }
          ]
        })}} />
      </Head>

      <Navbar />
      
      {/* Fondo global de video animado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center z-[-1] opacity-80 pointer-events-none"
      >
        <source src="/images/fondo2.mp4" type="video/mp4" />
      </video>

      <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              El <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-white/70">
              Estrategia, diseño y automatización explicados sin humo. 
              Para negocios que quieren escalar en serio.
            </p>
          </div>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group relative border border-white/10 bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Leer {post.title}</span>
                </Link>
                
                <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                  <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {post.description}
                </p>

                <span className="inline-flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Leer artículo →
                </span>
              </article>
            ))}

            {posts.length === 0 && (
              <p className="text-white/50 text-lg">No hay artículos publicados todavía.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'description',
    'category',
    'readTime',
  ]);

  return {
    props: { posts },
  };
}
