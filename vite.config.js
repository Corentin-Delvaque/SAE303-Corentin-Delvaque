import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE303-Corentin-Delvaque",
  theme: {
    extend: {
      fontFamily: {
        marianne: ["Marianne", "sans-serif"],
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});

//npm install

//extension prettier + format

//extension Tailwind CSS IntelliSense dans VSCode

//npm run dev