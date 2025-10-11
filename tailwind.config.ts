import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Blue for links and accents
          hover: "#1d4ed8",   // Darker blue for hover states
        },
        muted: {
          DEFAULT: "#6b7280", // Gray for secondary text
          light: "#9ca3af",   // Lighter gray
        },
        border: "#e5e7eb",    // Light gray for dividers
      },
      maxWidth: {
        content: "1000px",     // Optimal reading width (expanded)
      },
      fontSize: {
        base: ["1.125rem", { lineHeight: "1.75" }], // 18px, readable
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "1000px",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
