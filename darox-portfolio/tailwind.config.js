module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)'
      },
      boxShadow: {
        neon: '0 0 20px var(--color-primary)'
      }
    }
  },
  plugins: []
};
