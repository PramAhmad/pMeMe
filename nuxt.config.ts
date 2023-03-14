// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: ['@nuxtjs/supabase'],
     postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
  },
   css: [
      '~/assets/css/main.css',
      '@fortawesome/fontawesome-svg-core/styles.css'
   ],
})
