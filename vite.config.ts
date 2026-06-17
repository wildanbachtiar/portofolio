import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  base: repoName ? `/${repoName}/` : "/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
