module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: true,
    content: [
      "./pages/*.js",
      "./pages/*.jsx",
      "./components/*.jsx",
      "./components/main-section/*.jsx",
    ],
  },
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
