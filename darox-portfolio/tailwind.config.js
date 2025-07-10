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
      },
      animation: {
        pulseScale: 'pulseScale 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

