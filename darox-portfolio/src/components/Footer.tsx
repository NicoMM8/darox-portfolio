import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface FooterProps {
  onInViewChange?: (inView: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });

  // Notifica el cambio de visibilidad al padre
  React.useEffect(() => {
    if (onInViewChange) onInViewChange(inView);
  }, [inView, onInViewChange]);

  return (
    <footer
      ref={ref}
      className={`relative w-full border-t border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.09)] to-[rgba(153,153,153,0.09)] pt-12 pb-6 px-4 ${
        inView ? "" : "backdrop-blur-lg"
      }`}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 w-full h-full -z-10 rounded-xl overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/Yup0Khoh6jiKcA1Ad9mojCjB7M.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        {/* Izquierda: Logo y texto */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <Link href="/" className="inline-block w-16 h-6 relative">
            <Image
              src="/images/logo.png"
              alt="Logo de DAROX, agencia de branding y diseño web"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full my-2" />
          <p className="text-sm text-white/60 leading-relaxed">
            Hecho con amor y pasión 💙
            <br />
            <span>- DAROX.</span>
          </p>
          {/* Newsletter */}
          <form
            className="mt-4 flex gap-2"
            action="https://formspree.io/f/xgvzbbry"
            method="POST"
          >
            <label htmlFor="footer-newsletter" className="sr-only">
              Introduce tu Email
            </label>
            <input
              id="footer-newsletter"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Introduce tu Email..."
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-[10px] border-4 border-white/15 bg-blue-700 about-shadow text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105 animate-fade-in-up w-full text-center"
            >
              Síguenos
            </button>
          </form>
        </div>
        {/* Centro: Páginas */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-base font-semibold text-white mb-2">Páginas</h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Portfolio
            </Link>
            <Link
              href="/contacto"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Contacto
            </Link>
            <Link
              href="/#faq"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Derecha: Social y Contacto */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-base font-semibold text-white mb-2">Social</h4>
          <div className="flex flex-col gap-2">
            <a
              href=":https://x.com/DaroxBrandMaker"
              target="_blank"
              rel="noopener"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Twitter (X)
            </a>
            <a
              href="https://www.instagram.com/darox.bm/"
              target="_blank"
              rel="noopener"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@daroxbrandmaker"
              target="_blank"
              rel="noopener"
              className="text-white/40 transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-400"
            >
              Youtube
            </a>
          </div>
          {/* Información de contacto */}
          <h4 className="text-base font-semibold text-white mb-2">Contacto</h4>
          <span className="text-white/60 text-sm">09001 Burgos, España</span>
          <span className="text-white/60 text-sm">Email: daroxbrandmaker@gmail.com</span>
        </div>
      </div>
      {/* Separador inferior */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full my-6" />
      {/* Copyright y links legales */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <span>© 2025 DAROX</span>
        <div className="flex gap-4">
          <Link href="/terms-conditions" className="hover:text-white">
            Términos & Condiciones
          </Link>
          <span className="w-6 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full mx-2 hidden md:inline-block" />
          <Link href="/privacy-policy" className="hover:text-white">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;