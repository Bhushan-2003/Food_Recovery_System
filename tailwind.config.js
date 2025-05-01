/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A4365', // Deep blue for depth
        secondary: '#C05621', // Warm orange
        accent: '#2F855A', // Forest green
        success: '#168b37',
        warning: '#f59e0b',
        error: '#dc2626',
        light: '#EBF8FF', // Light blue background
        dark: '#1A365D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/foodbbbb.jpg')",
        'gradient-3d': 'linear-gradient(145deg,rgb(226, 232, 241) 0%,rgb(204, 207, 211) 100%)',
      },
      boxShadow: {
        '3d': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-3d': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};