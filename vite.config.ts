import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repository (username.github.io/<repo>),
  // set the base to the repo name so built asset paths are prefixed correctly.
  base: "/tabletops/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
