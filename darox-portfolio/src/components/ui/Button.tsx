import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  // Extensibilidad para otros props como aria-label, disabled, etc.
} & Record<string, unknown>;

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  children,
  className = '',
  showArrow = false,
  ...props
}) => {
  // Base classes that apply to all variants
  const baseClasses = "relative inline-flex items-center justify-center tracking-wide transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] active:scale-[0.95]";
  
  // Specific styling per variant
  const variants = {
    primary: "px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg bg-gradient-to-r from-purple-700 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-105 hover:from-purple-600 hover:to-fuchsia-400",
    secondary: "px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-base sm:text-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:bg-white/10 hover:border-white/30",
    tertiary: "text-white/70 hover:text-white font-medium text-base md:text-lg relative after:pointer-events-none"
  };

  const Content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <span className={`ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.5 ${variant === 'tertiary' ? 'text-white' : ''}`}>
            &rarr;
          </span>
        )}
      </span>
      
      {/* Sweep Light Pseudo-element for Primary CTA */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full animate-[none] group-hover:animate-swipe bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 skew-x-12" />
      )}

      {/* Underline Hover for Tertiary CTA */}
      {variant === 'tertiary' && (
        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    // Handling internal vs external links
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
          {Content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {Content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {Content}
    </button>
  );
};
