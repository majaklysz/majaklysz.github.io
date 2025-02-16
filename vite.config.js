import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({command}) => {
  const config = {
    plugins: [vue()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/majaklysz.github.io/";
  }

  return config;
});
