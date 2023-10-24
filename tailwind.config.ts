import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text: "#FCFCFC",
        texts: "#D9D9D9E5",
        section: "#FFCC00",
        dark: "#A3A3A3",
        hover: "#182222",
        primary: "#0E1416",
        form: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
