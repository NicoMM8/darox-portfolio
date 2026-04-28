import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../lib/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface PostProps {
  post: {
    slug: string;
    title: string;
    date: string;
    description: string;
    category: string;
    readTime: string;
    content: string;
    image?: string;
    ctaTitle?: string;
    ctaText?: string;
    ctaLinkText?: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

const extractText = (children: React.ReactNode): string => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (children !== null && typeof children === 'object' && 'props' in children) {
    const el = children as { props: { children?: React.ReactNode } };
    return extractText(el.props.children);
  }
  return '';
};

const slugify = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F]+/g, '-').replace(/(^-|-$)+/g, '');
};

type HeadingProps = React.ComponentPropsWithoutRef<'h2'>;
type ParaProps   = React.ComponentPropsWithoutRef<'p'>;
type UlProps     = React.ComponentPropsWithoutRef<'ul'>;
type LiProps     = React.ComponentPropsWithoutRef<'li'>;
type StrongProps = React.ComponentPropsWithoutRef<'strong'>;
type AnchorProps = React.ComponentPropsWithoutRef<'a'> & { href: string };
type BqProps     = React.ComponentPropsWithoutRef<'blockquote'>;
type TableProps  = React.ComponentPropsWithoutRef<'table'>;
type TheadProps  = React.ComponentPropsWithoutRef<'thead'>;
type ThProps     = React.ComponentPropsWithoutRef<'th'>;
type TdProps     = React.ComponentPropsWithoutRef<'td'>;
type ImgProps    = React.ComponentPropsWithoutRef<'img'>;

const components = {
  h2: (props: HeadingProps) => {
    const text = extractText(props.children);
    return <h2 id={slugify(text)} className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white leading-tight tracking-tight scroll-mt-32" {...props} />;
  },
  h3: (props: HeadingProps) => {
    const text = extractText(props.children);
    return <h3 id={slugify(text)} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-white leading-tight tracking-tight scroll-mt-32" {...props} />;
  },
  p:          (props: ParaProps)   => <p className="text-[1.15rem] md:text-xl text-white/80 leading-[1.8] mb-8 font-light" {...props} />,
  ul:         (props: UlProps)     => <ul className="list-disc list-inside text-[1.15rem] md:text-xl text-white/80 mb-8 space-y-3 font-light" {...props} />,
  li:         (props: LiProps)     => <li className="ml-4" {...props} />,
  strong:     (props: StrongProps) => <strong className="font-semibold text-white" {...props} />,
  a:          ({ href, ...rest }: AnchorProps) => <Link href={href} className="text-blue-400 hover:text-blue-300 border-b border-blue-400/30 hover:border-blue-400 transition-all" {...rest} />,
  blockquote: (props: BqProps)     => (
    <blockquote className="border-l-4 border-blue-500 pl-6 md:pl-8 py-2 my-10 italic text-[1.15rem] md:text-xl text-white/70 bg-gradient-to-r from-blue-900/20 to-transparent rounded-r-2xl" {...props} />
  ),
  table: (props: TableProps) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/10">
      <table className="w-full text-left border-collapse bg-white/5" {...props} />
    </div>
  ),
  thead: (props: TheadProps) => <thead className="bg-white/10 text-white uppercase text-xs tracking-wider" {...props} />,
  th:    (props: ThProps)    => <th className="px-6 py-4 font-bold border-b border-white/10" {...props} />,
  td:    (props: TdProps)    => <td className="px-6 py-4 text-white/80 border-b border-white/5" {...props} />,
  img:   (props: ImgProps)   => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      decoding="async"
      className="rounded-xl my-8 w-full"
      alt={props.alt ?? ''}
      {...props}
    />
  ),
};

export default function Post({ post, mdxSource }: PostProps) {
  // Extraer Tabla de Contenidos automáticamente (solo H2 para simplificar)
  const toc = post.content
    .split('\n')
    .filter(line => line.match(/^##\s/))
    .map(line => {
      let text = line.replace(/^##\s/, '').trim();
      text = text.replace(/\*\*/g, ''); // Limpiar asteriscos de negrita si los hay
      const id = slugify(text);
      return { text, id };
    });

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>{post.title} | DAROX Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://darox.es/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} | DAROX Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://darox.es/blog/${post.slug}`} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content={post.image ? `https://darox.es${post.image}` : 'https://darox.es/images/fondo_hero.webp'} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="DAROX" />
        <meta property="article:section" content={post.category} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | DAROX Blog`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image ? `https://darox.es${post.image}` : 'https://darox.es/images/fondo_hero.webp'} />
        <meta name="twitter:site" content="@DaroxBrandMaker" />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "articleSection": post.category,
              "wordCount": Math.round(post.content.split(/\s+/).length),
              "url": `https://darox.es/blog/${post.slug}`,
              "datePublished": post.date,
              "dateModified": post.date,
              "inLanguage": "es-ES",
              "image": post.image ? `https://darox.es${post.image}` : 'https://darox.es/images/fondo_hero.webp',
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "article header"]
              },
              "author": {
                "@type": "Person",
                "name": "Darío Muñoz Miguel",
                "url": "https://darox.es/about",
                "sameAs": ["https://www.linkedin.com/in/darox/"]
              },
              "publisher": {
                "@type": "Organization",
                "name": "DAROX",
                "url": "https://darox.es",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://darox.es/images/logo_horizontal.webp"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://darox.es/blog/${post.slug}`
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://darox.es/blog" },
                  { "@type": "ListItem", "position": 3, "name": post.category, "item": `https://darox.es/blog/${post.slug}` }
                ]
              }
            })
          }}
        />
      </Head>

      <Navbar />
      
      {/* Fondo estático para máxima legibilidad */}
      <div className="fixed inset-0 w-full h-full bg-[#050505] z-[-1] pointer-events-none" />

      <article className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Columna Principal: Header + Contenido */}
          <div className="w-full lg:flex-1 max-w-4xl">
            {/* Header del post estilo Content-First */}
            <header className="mb-12">
            <div className="flex items-center gap-3 text-sm font-bold text-blue-500 uppercase tracking-widest mb-6">
              <Link href="/blog" className="text-white/40 hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span>{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-[1.15] tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-white/40 mb-10 font-medium">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {post.image && (
              <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/10 relative shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={post.image} 
                  alt={`Portada de ${post.title}`}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            )}
          </header>

          {/* Tabla de Contenidos (Versión Móvil - Acordeón) */}
          {toc.length > 0 && (
            <div className="block lg:hidden mb-12">
              <details className="group bg-white/[0.02] border border-white/5 rounded-xl [&_summary::-webkit-details-marker]:hidden overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <span>Índice del artículo</span>
                  </div>
                  <span className="transition duration-300 group-open:rotate-180 text-white/50">
                    <svg fill="none" height="20" width="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <div className="p-5 pt-2 border-t border-white/5 bg-black/20">
                  <ul className="space-y-3">
                    {toc.map((item, i) => (
                      <li key={i}>
                        <a href={`#${item.id}`} className="text-[1rem] text-white/60 hover:text-blue-400 transition-colors inline-block">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          )}

          {/* Contenido MDX */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote {...mdxSource} components={components} />
          </div>

          {/* Call to action final (Dinámico por post) */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] rounded-2xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {post.ctaTitle || "¿Preparado para escalar tu negocio?"}
                </h3>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                  {post.ctaText || "No hacemos webs bonitas que nadie visita. Construimos sistemas digitales que venden. Agenda una auditoría gratuita con nuestro equipo hoy."}
                </p>
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] border-4 border-white/15 bg-blue-700 about-shadow text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105"
                >
                  {post.ctaLinkText || "Solicitar Propuesta →"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Lateral Derecha: Tabla de Contenidos Desktop (Sticky) */}
        {toc.length > 0 && (
          <aside className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-32 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-all">
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6 pt-2">En este artículo</h4>
              <nav className="border-l border-white/10 pl-5">
                <ul className="space-y-4">
                  {toc.map((item, i) => (
                    <li key={i}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-[0.95rem] text-white/50 hover:text-white transition-colors block leading-snug"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}

      </div>
    </article>
  </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'description',
    'content',
    'category',
    'readTime',
    'image',
    'ctaTitle',
    'ctaText',
    'ctaLinkText'
  ]);

  const mdxSource = await serialize(post.content || '');

  return {
    props: {
      post,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
