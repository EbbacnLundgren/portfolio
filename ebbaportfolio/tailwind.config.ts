import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7fb",
          100: "#eceef7",
          200: "#d9def0",
          300: "#b9c3e3",
          400: "#8996cf",
          500: "#6674c4",
          600: "#4f58b2",
          700: "#424a95",
          800: "#383e79",
          900: "#2f355f"
        }
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
} satisfies Config;
