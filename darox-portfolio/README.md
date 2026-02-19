# DAROX Portfolio

Sitio web oficial de **DAROX** — Agencia de Branding, Diseño Web y Marketing Digital.

## Stack

- [Next.js 15](https://nextjs.org/) — Framework React con Static Export
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [TailwindCSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — Animaciones
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## Instalación

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto copiando `.env.example`:

```bash
cp .env.example .env.local
```

Rellena las variables:

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Clave API de [Web3Forms](https://web3forms.com/) para el formulario de contacto |

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Build y Export estático

```bash
npm run build
```

Genera la carpeta `/out` lista para servir como sitio estático.

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (Navbar, Footer, Hero, etc.)
├── data/           # Datos estáticos (results.ts con los proyectos del portfolio)
├── estilos/        # CSS global (globals.css)
└── pages/          # Páginas Next.js
    ├── proyectos/  # Páginas individuales de cada proyecto
    ├── index.tsx   # Landing principal
    ├── about.tsx   # Sobre DAROX
    ├── portfolio.tsx
    └── contacto.tsx
public/
└── images/         # Imágenes y assets estáticos
```

## Añadir un nuevo proyecto al portfolio

1. Añade los datos del proyecto en `src/data/results.ts` (con un `slug` único)
2. Crea la página en `src/pages/proyectos/[tu-slug].tsx`
3. Añade las imágenes en `public/images/`

## Deploy

El proyecto usa `output: 'export'` en `next.config.ts`, generando un sitio completamente estático apto para cualquier hosting (Apache, Nginx, Vercel, Cloudflare Pages...).
