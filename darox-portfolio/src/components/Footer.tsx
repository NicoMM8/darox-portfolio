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
      className={`relative w-full border-t border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.09)] to-[rgba(153,153,153,0.09)] pt-12 pb-6 px-4 ${inView ? "" : "backdrop-blur-lg"
        }`}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 w-full h-full -z-10 rounded-xl overflow-hidden">
        <Image
          src="/images/footer-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 relative z-10">
        
        {/* Columna 1: Branding y Tagline */}
        <div className="flex flex-col gap-4 lg:col-span-4 pr-0 lg:pr-8">
          <Link href="/" className="inline-block w-24 h-8 relative mb-2">
            <Image
              src="/images/logo.ico"
              alt="Logo de DAROX Branding & Web"
              fill
              className="object-contain object-left"
            />
          </Link>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full my-1" />
          <p className="text-sm text-white/60 leading-relaxed max-w-sm mt-1">
            Diseñado y desarrollado en España.<br />
            <span className="block mt-2 text-white/40 font-medium">Construimos sistemas de alta conversión para negocios que no toleran la mediocridad.</span>
          </p>
        </div>

        {/* Columna 2: Servicios */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Servicios</h4>
          <div className="flex flex-col gap-3">
            <Link href="/servicios/branding-identidad" className="text-white/50 hover:text-white transition text-sm">
              Branding Estratégico
            </Link>
            <Link href="/servicios/desarrollo-web" className="text-white/50 hover:text-white transition text-sm">
              Ingeniería Web (UI/UX)
            </Link>
            <Link href="/servicios/automatizacion-ia-sistemas" className="text-white/50 hover:text-white transition text-sm">
              Automatización & IA
            </Link>
          </div>
        </div>

        {/* Columna 3: Empresa y SEO Local */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Empresa</h4>
          <div className="flex flex-col gap-3 mb-2">
            <Link href="/about" className="text-white/50 hover:text-white transition text-sm">
              La Agencia
            </Link>
            <Link href="/contacto" className="text-white/50 hover:text-white transition text-sm">
              Auditoría Gratuita
            </Link>
            <Link href="/portfolio" className="text-white/50 hover:text-white transition text-sm">
              Casos de Éxito
            </Link>
          </div>

          <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs mt-4">SEO Local</h4>
          <div className="flex flex-col gap-3">
            <Link href="/agencia-branding-burgos" className="text-white/50 hover:text-white transition text-sm">
              Agencia Branding Burgos
            </Link>
            <Link href="/agencia-branding-castilla-leon" className="text-white/50 hover:text-white transition text-sm">
              Agencia Branding Castilla y León
            </Link>
          </div>
        </div>

        {/* Columna 4: Contacto */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <p className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>09001 Burgos, España</span>
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contacto@darox.es" className="hover:text-white transition">contacto@darox.es</a>
            </p>
          </div>
          
          {/* Redes Sociales Iconos Limpios */}
          <div className="flex items-center gap-5 mt-4">
            <a href="https://x.com/DaroxBrandMaker" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition" aria-label="Twitter X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.918H5.078z"/></svg>
            </a>
            <a href="https://www.instagram.com/darox.bm/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.youtube.com/@daroxbrandmaker" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM10 15l5-3-5-3v6z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Separador inferior */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full my-6" />
      {/* Copyright y links legales */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <span>© {new Date().getFullYear()} DAROX</span>
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