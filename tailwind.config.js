/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background layers — ultra-dark navy
        background: '#0B0F1A',
        surface: '#111827',
        'surface-elevated': '#1a2235',
        'surface-glass': 'rgba(17, 24, 39, 0.6)',

        // Accent system — electric blue + indigo
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
        'primary-glow': 'rgba(59, 130, 246, 0.15)',
        'accent-violet': '#6366F1',

        // Typography grading
        'text-heading': '#F1F5F9',
        'text-body': '#94A3B8',
        'text-muted': '#64748B',
        'text-dim': '#475569',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'sweep': 'sweep 3s ease-in-out infinite',
        'dot-move': 'dot-move 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(300%) rotate(-45deg)' },
        },
        'dot-move': {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
      },
    },
  },
  plugins: [],
}
