const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      `components/**/*.{vue,js}`,
      `src/*.js`, 
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        fuchsia: colors.fuchsia,
        secondary: "var(--secondary-color)",
        warning: "var(--warning-color)",
        success: "var(--success-color)",
        danger: "var(--danger-color)",
        glass: "var(--gray-color)",
        "border-shadow": "rgba( 255, 255, 255, 0.18 )",
      },
      screens: {
        mobile: "540px",
      },
      boxShadow: {
        "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
