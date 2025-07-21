import React, { useState, useEffect } from "react";

const setCookiePrefs = (prefs: any) => {
  localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
};

const getCookiePrefs = () => {
  const prefs = localStorage.getItem('cookiePrefs');
  if (prefs) return JSON.parse(prefs);
  return { marketing: false, personalizadas: false, analitica: false };
};

// Switch fuera del componente principal
const Switch = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
  <button
    type="button"
    className={`ml-2 w-11 h-6 flex items-center rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-blue-700' : 'bg-gray-300'}`}
    onClick={onChange}
    aria-pressed={checked ? "true" : "false"}
    title={checked ? "Desactivar" : "Activar"}
  >
    <span
      className={`inline-block w-5 h-5 transform bg-white rounded-full shadow transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-1'}`}
    />
  </button>
);

export default function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [prefs, setPrefs] = useState({
    marketing: false,
    personalizadas: false,
    analitica: false,
  });

  useEffect(() => {
    const stored = getCookiePrefs();
    setPrefs(stored);
    if (!localStorage.getItem('cookiePrefs')) {
      setOpen(true);
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
  }, []);

  // Icono flotante
  if (!open && showIcon) {
    return (
      <button
        aria-label="Abrir centro de preferencias de cookies"
        className="w-14 h-14 fixed bottom-6 left-6 z-50 bg-white rounded-full shadow-lg p-3 flex items-center justify-center hover:scale-110 transition"
        onClick={() => setOpen(true)}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#A7F3D0"/>
          <path d="M21.5 8.5c-1.5-1.5-4.5-2-7 0-2.5 2-3 6-1 8.5 2 2.5 6.5 2.5 8.5 0 2-2.5 1.5-7-0.5-8.5z" fill="#2563eb"/>
          <circle cx="13" cy="15" r="1" fill="#fff"/>
          <circle cx="18" cy="13" r="1" fill="#fff"/>
          <circle cx="16" cy="18" r="1" fill="#fff"/>
        </svg>
      </button>
    );
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <div className="relative bg-black rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 overflow-y-auto max-h-[90vh] border border-white/10">
        {/* Botón cerrar */}
        <button
          onClick={() => { setOpen(false); setShowIcon(true); }}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl font-bold"
          aria-label="Cerrar centro de preferencias"
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-4 text-blue-400">Centro de Preferencias de Privacidad</h2>
        <p className="mb-6 text-white/80">
          Cuando visita sitios web, estos pueden almacenar o recuperar datos en su navegador. Este almacenamiento suele ser necesario para la funcionalidad básica del sitio web. El almacenamiento puede usarse para marketing, análisis y personalización del sitio, como almacenar sus preferencias. La privacidad es importante para nosotros, por lo que tiene la opción de desactivar ciertos tipos de almacenamiento que pueden no ser necesarios para el funcionamiento básico del sitio web. El bloqueo de categorías puede afectar su experiencia en el sitio web.
        </p>
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <div className="flex items-center mb-1">
              <strong className="text-blue-400">Esenciales</strong>
              <span className="ml-2 text-xs text-gray-400">Siempre activas</span>
            </div>
            <p className="text-xs text-gray-400">Estos elementos son necesarios para habilitar la funcionalidad básica del sitio web.</p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <strong className="text-blue-400">Marketing</strong>
              <Switch
                checked={prefs.marketing}
                onChange={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
              />
            </div>
            <p className="text-xs text-gray-400">Estos elementos se utilizan para ofrecer publicidad relevante y medir la efectividad de las campañas.</p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <strong className="text-blue-400">Personalizadas</strong>
              <Switch
                checked={prefs.personalizadas}
                onChange={() => setPrefs(p => ({ ...p, personalizadas: !p.personalizadas }))}
              />
            </div>
            <p className="text-xs text-gray-400">Permiten recordar sus elecciones y proporcionar funciones personalizadas.</p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <strong className="text-blue-400">Analítica</strong>
              <Switch
                checked={prefs.analitica}
                onChange={() => setPrefs(p => ({ ...p, analitica: !p.analitica }))}
              />
            </div>
            <p className="text-xs text-gray-400">Ayudan a comprender cómo interactúan los visitantes con el sitio.</p>
          </div>
        </div>
        <hr className="my-6 border-white/10" />
        <button
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full border-2 border-blue-400 shadow transition-all text-lg"
          onClick={() => {
            setCookiePrefs(prefs);
            setOpen(false);
            setShowIcon(true);
          }}
        >
          Confirmar mis preferencias y cerrar
        </button>
      </div>
    </div>
  );
}