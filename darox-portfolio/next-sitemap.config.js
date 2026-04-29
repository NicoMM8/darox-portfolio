/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://darox.es',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/privacy-policy', '/terms-conditions'],
  // Añadir páginas de SEO local y blog no detectadas automáticamente
  additionalPaths: async (config) => [
    await config.transform(config, '/agencia-branding-burgos'),
    await config.transform(config, '/agencia-branding-castilla-leon'),
    await config.transform(config, '/blog'),
  ],
  transform: async (config, path) => {
    // Prioridades diferenciadas por sección
    const priorities = {
      '/': 1.0,
      '/servicios/branding-identidad': 0.9,
      '/servicios/desarrollo-web': 0.9,
      '/servicios/automatizacion-ia-sistemas': 0.9,
      '/agencia-branding-burgos': 0.85,
      '/agencia-branding-castilla-leon': 0.85,
      '/blog': 0.8,
      '/contacto': 0.8,
      '/about': 0.75,
      '/portfolio': 0.7,
    }
    return {
      loc: path,
      changefreq: path.startsWith('/blog/') ? 'monthly' : 'weekly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}