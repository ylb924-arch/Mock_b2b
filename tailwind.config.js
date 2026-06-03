/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        graphite: {
          950: '#060807',
          900: '#0a0f0d',
          850: '#0e1512',
          800: '#131c18',
          700: '#1b2822',
        },
        pulse: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(74, 222, 128, 0.18), 0 24px 80px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};
