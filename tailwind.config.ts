import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Calidez analítica": pizarra oscuro + esmeralda
        pizarra: {
          950: "#0a0f0d",
          900: "#0f1714",
          850: "#131d19",
          800: "#18241f",
          700: "#1f312a",
          600: "#2a4138",
          500: "#3a5a4d",
        },
        esmeralda: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        acierto: "#22c55e",
        fallo: "#ef4444",
        ambar: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px -6px rgba(16, 185, 129, 0.35)",
        "glow-sm": "0 0 12px -4px rgba(16, 185, 129, 0.3)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-live": "pulse-live 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
