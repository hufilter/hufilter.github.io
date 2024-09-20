const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {},
      // TODO: Add background-cycle animation
      // keyframes: {
      //   'background-cycle': {
      //     '0%': { backgroundColor: '#134E4A' },  // teal-950
      //     '25%': { backgroundColor: '#1E3A8A' }, // blue-900
      //     '50%': { backgroundColor: '#4B5563' }, // gray-700
      //     '75%': { backgroundColor: '#0F172A' }, // slate-900
      //     '100%': { backgroundColor: '#134E4A' }, // teal-950 (back to start)
      //   },
      // },
      // animation: {
      //   'bg-cycle': 'background-cycle 45s ease-in-out infinite',
      // },
    },
  },
  plugins: [],
};
