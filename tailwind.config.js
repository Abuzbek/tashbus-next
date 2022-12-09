/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: [
        "'Inter', sans-serif",
      ],
      mulish: [
        "'Mulish', sans-serif",
      ],
      montserrat: [
        "'Montserrat', sans-serif",
      ],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "12px",
          paddingRight: "12px",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "998px",
          },
          "@screen xl": {
            maxWidth: "1098px",
          },
          "@screen 2xl": {
            maxWidth: "1248px",
          },
        },
      });
    },
  ],
};
