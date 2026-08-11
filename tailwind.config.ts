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
        navy: "#0B1F3A",
        emerald: "#0D9488",
        "emerald-soft": "#5EEAD4",
        cloud: "#F7F9FC",
        ink: "#0A0F1A",
        slate: "#64748B",
        gold: "#C6A75E",
      },
    },
  },
  plugins: [],
};

export default config;
