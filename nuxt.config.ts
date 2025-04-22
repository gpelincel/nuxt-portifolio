import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
