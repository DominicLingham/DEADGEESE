// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'v-gsap-nuxt', '@nuxt/image', 'nuxt-splide'],
  app: {
    head: {
      title: 'DEADGEESE',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ]
    }
  },
  splide: {
    theme: 'default'
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      taiwindcss: {},
      autoprefixer: {}
    }
  }
})