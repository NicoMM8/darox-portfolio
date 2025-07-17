import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface FooterProps {
  onInViewChange?: (inView: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Ajusta el porcentaje visible para activar
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
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full my-2" />
          <p className="text-sm text-white/60 leading-relaxed">
            Hecho con amor y pasión💙
            <br />
            <span>- DAROX.</span>
          </p>
          {/* Newsletter */}
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email...."
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 border-2 border-white/15 rounded-xl px-4 py-2 text-white font-semibold shadow hover:bg-blue-800 transition"
            >
              Subscribe Us
            </button>
          </form>
        </div>
        {/* Centro: Páginas */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-base font-semibold text-white mb-2">Páginas</h4>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Contact
            </Link>
            <Link
              href="/#faq"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              FAQ
            </Link>
          </div>
        </div>
        {/* Derecha: Social */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h4 className="text-base font-semibold text-white mb-2">Social</h4>
          <div className="flex flex-col gap-2">
            <a
              href="https://x.com/MandroDesign"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Twitter (X)
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-white transition bg-clip-text bg-gradient-to-r from-white to-gray-400"
            >
              Youtube
            </a>
          </div>
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