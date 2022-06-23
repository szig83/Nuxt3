import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "nagyontitkos",
    public: {
      apiBase: "salala", // Or a default value
    },
  },
});
