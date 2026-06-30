/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        background: '#020617',
        surface: 'rgba(255,255,255,0.08)',
        'primary-accent': '#00F5D4',
        'secondary-accent': '#FF2E88',
        'highlight': '#FFD700',
        'extra-accent': '#7CFF6B',
        'text-primary': '#FFFFFF',
        'text-secondary': '#CBD5E1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'mesh': 'mesh 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00F5D4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        mesh: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      backgroundImage: {
        'aurora': 'linear-gradient(135deg, rgba(0,245,212,0.15) 0%, rgba(255,46,136,0.15) 50%, rgba(124,255,107,0.15) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(0,245,212,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,46,136,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(124,255,107,0.15) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(255,215,0,0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0,245,212,0.15) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
