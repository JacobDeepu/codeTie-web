import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://codetie.onrender.com", // Change this to your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
