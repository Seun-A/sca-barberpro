import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bp": {
          // Used as bg-bp-dark, text-bp-gold, etc.
          black: "#1a1a1a",
          gold: "#d4af37",
          red: "#c41e3a",
          white: "#f8f9fa",
          gray: "#495057"
        },
        "primary": {
          DEFAULT: "#d1a347",
          50: "#fdf8ed",
          100: "#f9f0d4",
          200: "#f2e0a8",
          300: "#e8c96d",
          400: "#ddb54e",
          500: "#d1a347",
          600: "#b8862e",
          700: "#946824",
          800: "#704d1a",
          900: "#4a3312"
        },
        "primary-text": "#161412",
        "secondary": "#322e2a",
        "secondary-text": "#e0dbd1",
        "base-background": "#161412",
        "base-text": "#ebe7e0",
        "card": "#211f1c",
        "card-text": "#ebe7e0",
        "muted": "#2b2926",
        "muted-text": "#988c81",
        "danger": "#dc2828",
        "danger-text": "#fafafa",
        "border": "#37332f"
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-playfair)", "serif"],
    },
  },
  plugins: [],
};
export default config;
