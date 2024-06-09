// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: 'danielsarah.local',
    port: 443,
    https: {
      cert: './ssl/danielsarah.local.pem',
      key: './ssl/danielsarah.local-key.pem'
    }
  },
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/seo"
  ],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/auth',
      callback: '/',
      include: ['/data']
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    }

  },
  ui: {
    global: true
  },
  colorMode: {
    preference: 'dark'
  },
  site: {
    indexable: false,
    name: 'Daniel & Sara',
    description: 'Wedding',
    defaultLocale: 'en'
  }
})