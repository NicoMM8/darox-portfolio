// src/components/Navbar.tsx
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const links = [
    { label: 'Proyectos', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Filosofía', href: '/about' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'FAQ', href: '/#faq' }
  ]

  return (
    <nav className="
      fixed w-full z-50
      bg-black/30 backdrop-blur-md backdrop-saturate-150
      shadow-sm text-white
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.ico"
                alt="Logo de DAROX, agencia de branding y diseño web"
                width={32}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors">
              Inicio
            </Link>

            {/* Dropdown de Servicios Estilo Elite */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors flex items-center gap-1">
                Servicios
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                 {/* Invisible hover bridge */}
                 <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                 
                 <div className="bg-[#050505]/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col p-2 overflow-hidden">
                    <Link href="/servicios/branding-identidad" className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                        <span className="block text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">Branding Premium</span>
                        <span className="block text-xs text-zinc-500 mt-0.5">Identidad que vende sola.</span>
                    </Link>
                    <Link href="/servicios/desarrollo-web" className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                        <span className="block text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">Ingeniería Web</span>
                        <span className="block text-xs text-zinc-500 mt-0.5">Sistemas de Alta Conversión.</span>
                    </Link>
                    <Link href="/servicios/automatizacion-ia-sistemas" className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                        <span className="block text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">Automatización & IA</span>
                        <span className="block text-xs text-zinc-500 mt-0.5">Factura mientras duermes.</span>
                    </Link>
                 </div>
              </div>
            </div>

            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Abrir menú principal"
              className="p-2 rounded-md text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {
        isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="
            px-4 pt-4 pb-6 space-y-2
            bg-[#050505]/95 backdrop-blur-xl shadow-2xl
          ">
              <Link href="/" className="block px-3 py-2 text-base font-medium hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>

              {/* Botón Servicios en Móvil */}
              <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium hover:text-indigo-400 transition-colors text-left"
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-links móviles expuestos */}
              {isServicesOpen && (
                  <div className="pl-6 flex flex-col gap-1 border-l mx-3 border-white/10">
                      <Link href="/servicios/branding-identidad" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Branding Premium</Link>
                      <Link href="/servicios/desarrollo-web" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Ingeniería Web (UI/UX)</Link>
                      <Link href="/servicios/automatizacion-ia-sistemas" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Automatización & CRM</Link>
                  </div>
              )}

              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover:text-indigo-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div >
        )
      }
    </nav >
  )
}

