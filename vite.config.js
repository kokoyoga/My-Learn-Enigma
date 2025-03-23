import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./setupTests.js"],
  },
});
