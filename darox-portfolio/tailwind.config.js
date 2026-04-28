// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%,100%': { transform: 'scale(1)'    },
          '50%':     { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        swipe: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        slideDown: {
          '0%': { top: '-10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '110%', opacity: '0' },
        }
      },
      animation: {
        pulseScale: 'pulseScale 1s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        swipe: 'swipe 2.5s ease-in-out infinite',
        fillBar: 'fillBar 4s linear forwards',
        slideDown: 'slideDown 4s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

