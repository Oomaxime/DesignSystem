/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Activer le mode sombre basé sur une classe
  theme: {
    extend: {
      colors: {
        // Couleurs par défaut
        "font-default": "var(--default-font-color)",
        "bg-default": "var(--default-bg-color)",
        "font-dark": "var(--dark-font-color)",
        "bg-dark": "var(--dark-bg-color)",

        // CTA
        "cta-primary-default": "var(--cta-primary-bg-default)",
        "cta-primary-hover": "var(--cta-primary-bg-hover)",
        "cta-primary-inactive": "var(--cta-primary-bg-inactive)",
        "cta-primary-font": "var(--cta-primary-font-color)",

        "dark-cta-primary-default": "var(--dark-cta-primary-bg-default)",
        "dark-cta-primary-hover": "var(--dark-cta-primary-bg-hover)",
        "dark-cta-primary-inactive": "var(--dark-cta-primary-bg-inactive)",

        // Input
        "input-bg": "var(--input-text-background)",
        "dark-input-bg": "var(--dark-input-text-background)",
        "input-border": "var(--input-border-color)",
        "input-border-active": "var(--input-border-color-active)",
        "input-placeholder-default": "var(--input-placeholder-color-default)",
        "input-placeholder-active": "var(--input-placeholder-color-active)",
        "input-border-focus": "var(--input-border-color-focus)",

        // Alert
        "error": "var(--error-color)",

        // Icon
        "icon-default": "var(--icon-color)",
        "icon-hover": "var(--icon-color-hover)",
        "icon-active": "var(--icon-color-active)",

        // Toggle
        "toggle-bg": "var(--toggle-bg)",
        "toggle-pin-bg": "var(--toggle-pin-bg)",
        "toggle-shadow": "var(--toggle-shadow)",

        // Avatar
        "avatar-border": "var(--avatar-border-color)",
        "dark-avatar-border": "var(--dark-avatar-border-color)",

        // Link
        "link-default": "var(--link-color)",
        "dark-link-default": "var(--dark-link-color)",
      },
      borderRadius: {
        // CTA primary
        "cta-primary": "var(--cta-primary-border-radius)",

        // Input
        "input": "var(--input-border-radius)",
      },
      padding: {
        // CTA primary
        "cta-primary": "var(--cta-primary-padding)",

        // Input
        "input": "var(--input-padding)",
      },
      fontSize: {
        // Typographie
        "main-title": "var(--main-title-font-size)",
        "tagline": "var(--tagline-font-size)",
        "text-button": "var(--text-button-font-size)",
        "text-accent": "var(--text-accent-font-size)",
        "text-large": "var(--text-large-font-size)",
        "text-regular": "var(--text-regular-font-size)",
      },
      fontWeight: {
        // Typographie
        "main-title": "var(--main-title-font-weight)",
        "tagline": "var(--tagline-font-weight)",
        "text-button": "var(--text-button-font-weight)",
        "text-accent": "var(--text-accent-font-weight)",
        "text-large": "var(--text-large-font-weight)",
        "text-regular": "var(--text-regular-font-weight)",
      },
      lineHeight: {
        // Typographie
        "main-title": "var(--main-title-line-height)",
        "tagline": "var(--tagline-line-height)",
        "text-button": "var(--text-button-line-height)",
        "text-accent": "var(--text-accent-line-height)",
        "text-large": "var(--text-large-line-height)",
        "text-regular": "var(--text-regular-line-height)",
      },
      boxShadow: {
        // Toggle
        "toggle": "var(--toggle-shadow)",
      },
    },
  },
  plugins: [],
};
