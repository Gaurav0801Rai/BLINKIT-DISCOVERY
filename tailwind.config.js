/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blinkit: {
          yellow: '#F8CB46',
          green: '#0C831F',
          greenHover: '#0A6E1A',
          black: '#1F1B12',
          bg: '#F7F7F5',
          card: '#FFFFFF',
          mint: '#E7F1EF',
          muted: '#666158',
          border: '#E2DFD8',
          yellowLight: '#FFF8E1'
        },
        primary: '#F8CB46',
        secondary: '#0C831F',
        'on-surface': '#1F1B12',
        'on-surface-variant': '#666158',
        background: '#F7F7F5',
        surface: '#FFFFFF',
        'surface-container': '#F7F7F5',
        'surface-container-low': '#F0EFEA',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-high': '#EBE8E0',
        'surface-container-highest': '#E2DFD7',
        'primary-container': '#F8CB46',
        'on-primary-container': '#1F1B12',
        'secondary-container': '#DCFCE7',
        'on-secondary-container': '#0C831F',
        'outline': '#9E988D',
        'outline-variant': '#E2DFD8'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'phone': '0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 0 12px #1e1e1e, 0 0 0 14px #2c2c2c',
        'card': '0px 4px 20px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
