export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** PWA configuration
   */
  pwa: {
    meta: {
      name: 'PomStat',
      nativeUI: true
    },
    manifest: {
      name: 'PomStat',
      short_name: 'PomStat',
      description: 'A minimalist pomodoro application.',
      lang: 'en',
      display: 'standalone',
      background_color: '#141434'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#141434' },
  /*
   ** Global CSS
   */
  css: [
    './assets/fonts/roboto.css',
    './assets/css/cssgg.css',
    './assets/css/global.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['./plugins/notificationRequest.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Server configuration
   */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
