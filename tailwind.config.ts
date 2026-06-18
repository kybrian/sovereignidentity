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
        primary: "#E9E3D4",
        secondary: "#8C8575",
        tertiary: "#C9A15A",
        neutral: "#0A0A09",
        surface: "#131211",
        "on-primary": "#0A0A09",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", fontWeight: "500" }],
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "500" }],
        body: ["0.95rem", { lineHeight: "1.65", fontWeight: "400" }],
        label: ["0.72rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.16em" }],
      },
      borderRadius: {
        sm: "1px",
        md: "2px",
        lg: "3px",
        DEFAULT: "2px",
        none: "0px",
        full: "9999px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
