import tailwindcssAnimated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        ink: "#0a0b0d",
        sky: "#8bd5ff",
        mint: "#9be7c4",
      },
    },
  },
  darkMode: "class",
  plugins: [tailwindcssAnimated],
}
