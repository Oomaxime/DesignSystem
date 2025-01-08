/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-default": "var(--default-font-color)",
        "cta-primary-default": "var(--cta-primary-bg-default)",
        "cta-primary-hover": "var(--cta-primary-bg-hover)",
        "input-bg": "var(--input-text-background)",
      }
    },
  },
  plugins: [],
}