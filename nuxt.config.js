export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Pmdr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // SEO
      { name: 'author', content: 'Start Again' },
      {
        name: 'description',
        content: 'An other minimalist pomodoro application.',
      },

      // Open Graph
      { property: 'og:locale', content: 'en-US' },
      { property: 'og:site_name', content: 'Pmdr' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://pmdr.lucasalt.fr' },
      { property: 'og:title', content: 'Pmdr' },
      {
        property: 'og:description',
        content: 'An other minimalist pomodoro application.',
      },
      { property: 'og:image', content: 'https://pmdr.lucasalt.fr/icon.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:alt', content: 'Pmdr logo' },
      { property: 'fb:app_id', content: '192187705385445' },

      // Twitter card
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@StartAgainCo' },
      { property: 'twitter:creator', content: '@StartAgainCo' },
      { property: 'twitter:title', content: 'Pmdr' },
      {
        property: 'twitter:description',
        content: 'An other minimalist pomodoro application.',
      },
      {
        property: 'twitter:image',
        content: 'https://pmdr.lucasalt.fr/icon.png',
      },
      { property: 'twitter:url', content: 'https://pmdr.lucasalt.fr' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** PWA configuration
   */
  pwa: {
    meta: {
      name: 'Pmdr',
      nativeUI: true,
    },
    manifest: {
      name: 'Pmdr',
      short_name: 'Pmdr',
      description: 'An other minimalist pomodoro application.',
      lang: 'en',
      display: 'standalone',
      background_color: '#e2f3f5',
    },
    workbox: {
      importScripts: ['custom-sw.js'],
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e2f3f5' },
  /*
   ** Global CSS
   */
  css: ['./assets/fonts/roboto.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/notificationRequest.js',
    // './plugins/notificationEvent.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
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
    extend(config, ctx) {},
  },
  /*
   ** Server configuration
   */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
