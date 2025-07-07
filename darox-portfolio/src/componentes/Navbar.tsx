import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/"><img src="/logo.svg" alt="DAROX" className="h-8" /></Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? '✕' : '☰'}
        </button>
        <ul className={`md:flex gap-6 text-white ${open ? 'block' : 'hidden'}`}>
          {['Inicio','Sobre','Portafolio','Contacto'].map(item => (
            <li key={item}>
              <Link href={item === 'Inicio' ? '/' : `#${item.toLowerCase()}`}>
                <a className="hover:text-accent">{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
