import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: "16px",
    },
    fontFamily: {
      primary: "var(--font-libre-baskerville)",
    },
    extend: {
      colors: {
        primary: "#7d7d7d",
        lightGray: "#e5e5e5",
        lighterGray: "#f3f3f3",
      },
      screens: {
        sm: "500px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
