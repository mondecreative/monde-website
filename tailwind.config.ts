import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#070707", graphite: "#111111" },
      fontFamily: { sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Helvetica Neue", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};

export default config;
