module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#374151",
        secondary: "#DB2777",
        textColor: "#FFFFFF",
        "smoke-darkest": "rgba(0, 0, 0, 0.9)",
        "smoke-darker": "rgba(0, 0, 0, 0.75)",
        "smoke-dark": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
        "smoke-lighter": "rgba(0, 0, 0, 0.25)",
        "smoke-lightest": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        heading: ["Source Sans Pro"],
        body: ["Source Sans Pro"],
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
    },
  },
};
