import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/majaklysz.github.io/", // Add this line
  plugins: [vue()],
});
