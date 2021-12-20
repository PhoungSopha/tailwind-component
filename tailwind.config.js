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
        "primary-lighten": "var(--primary-lighten)",
        "primary-dark": "var(--primary-dark)",

        fuchsia: colors.fuchsia,
        secondary: "var(--secondary-color)",
        "secondary-lighten": "var(--secondary-lighten)",
        "secondary-dark": "var(--secondary-dark)",

        warning: "var(--warning-color)",
        "warning-lighten": "var(--warning-lighten)",
        "warning-dark": "var(--warning-dark)",

        success: "var(--success-color)",
        "success-lighten": "var(--success-lighten)",
        "success-dark": "var(--success-dark)",

        danger: "var(--danger-color)",
        "danger-lighten": "var(--danger-lighten)",
        "danger-dark": "var(--danger-dark)",

        glass: "var(--gray-color)",
        "fist-color": "var(--first-color)",
        "text-color": "var(--text-color)",
        "text-color-light": "var(--text-color-light)",
        "title-color": "var(--title-color)",
        "border-shadow": "rgba( 255, 255, 255, 0.18 )",
      },
      screens: {
        mobile: "540px",
      },
      boxShadow: {
        "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
      },
      padding: {
        10: "10px",
        11: "11px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
