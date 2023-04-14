// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: ['@nuxtjs/supabase',"@nuxtjs/color-mode","@nuxtjs/tailwindcss"],
     postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
  },
   tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
   css: [
      '~/assets/css/main.css',
      '@fortawesome/fontawesome-svg-core/styles.css'
   ],
})
