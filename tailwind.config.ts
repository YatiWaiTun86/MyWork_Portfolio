// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B0100", // Deep red
        accent: "#D7B15C", // Gold (optional, you might drop it)
        dark: "#333333", // Dark gray
        light: "#FFFFFF", // White
        sugarAlmond: "#935529", //
      },
    },
  },
  plugins: [],
};

export default config;
