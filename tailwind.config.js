import { text } from "express";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainCanvas: "#030712",
        sidebar: "#101828",
        card: "#1f2937",
        border: "#1E2939",
        canvas: "#0f1419",
        text: "#F3F4F6",
        textSecondary: "#E5E7EB",
        buttonColor: "#1E2939",
        buttonBorder: "#364153",
        buttonHover: "#646F7F",
        iconColor: "#99A1AF",
        saveButton: "#2B7FFF",
        clearButtonText: '#D1D5DC',
        canvasColor: '#0A101D',
        savePresetColor: "#2B7FFF",
        colorBorderColor: "#4A5565",
        sliderBackgroundColor: "#3E495B",
        modalBackgroundColor: "#141D2B"
      },
      borderRadius: {
        canvas: "14px",
        buttonRadius: "10px",
        topButtonRadius: "8px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 30px rgba(59, 130, 246, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
