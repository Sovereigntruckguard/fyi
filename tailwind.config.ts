import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B1020",
        foreground: "#E5E7EB",
        brand: {
          50: "#F6F7FC",
          400: "#7990F2",
          500: "#4D67D8",
          700: "#2A3D8E",
          900: "#0C1538"
        },
        gold: "#BE9A5F"
      },
      maxWidth: {
        site: "1200px"
      }
    }
  },
  plugins: []
} satisfies Config;
