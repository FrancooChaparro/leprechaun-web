/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tiny: "385px",
      xs: "480px",
      sm: "670px",
      md: "768px",
      lg: "1024px",
      xm: "1150px",
      xl: "1280px",
      large: "1365px",
      "2xl": "1536px",
      "2.5xl": "1800px",
      "3xl": "1920px",
    },
    colors: {
      primarywhite: "#ffffff",
      primaryblack: "#000000",
      bknav: "#fff",
      navcolor: "#1f1f24",  customgray: 'rgba(209, 209, 209, 0.5)',
    },
    extend: {
      outline: {
        outlinebtn: '1px inset #1f1f24',
      },
      animation: {
        fadeOut: 'fadeOut 0.4s ease forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        } },
      fontFamily: {
        custom: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
    
  variants: {
    extend: {
      outline: ['focus'], // Asegúrate de que el estilo esté disponible en el estado de focus, si es necesario
    },
  },
  },
  plugins: [],
}
 
