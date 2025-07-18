// src/components/Navbar.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Nosotros', href: '/#sobre' },
    { label: 'Portafolio', href: '/portfolio' },
    { label: 'Contacto', href: '/contact' },
    { label: 'Preguntas', href: '/#faq' }
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
              <Image
                  src="/images/logo.png"
                  alt="Logo DAROX"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  priority
              />
            </div>

            {/* Menú escritorio */}
            <div className="hidden md:flex items-center space-x-8">
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
        {isMenuOpen && (
            <div className="md:hidden">
              <div className="
            px-2 pt-2 pb-3 space-y-1
            bg-black/40 backdrop-blur-sm
          ">
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
            </div>
        )}
      </nav>
  )
}

