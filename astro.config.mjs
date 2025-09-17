// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    // Cast to any to avoid cross-package Vite type identity conflicts under pnpm.
    // For a stricter type-safe version, add 'vite' as a devDependency and cast to import('vite').PluginOption.
    plugins: [/** @type {import('vite').PluginOption} */ (tailwindcss())],
  },

  adapter: netlify(),
});