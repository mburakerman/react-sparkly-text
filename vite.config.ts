import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              fileName: false,
              displayName: true,
              meaninglessFileNames: ["index", "styles"],
            },
          ],
        ],
      },
    }),
    macrosPlugin(),
  ],
  server: {
    host: true,
    port: 8000,
  },
});
