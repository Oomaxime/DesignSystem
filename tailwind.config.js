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
        // Couleurs de base
        "font-default": "var(--default-font-color)",

        // CTA primary
        "cta-primary-default": "var(--cta-primary-bg-default)",
        "cta-primary-hover": "var(--cta-primary-bg-hover)",
        "cta-primary-inactive": "var(--cta-primary-bg-inactive)",

        // Input
        "input-bg": "var(--input-text-background)",
      },
      borderRadius: {
        // CTA primary
        "cta-primary-radius": "var(--cta-primary-border-radius)",
      },

      padding: {
        // CTA primary
        "cta-primary-padding": "var(--cta-primary-padding)",
      },
    },
  },
  plugins: [],
}