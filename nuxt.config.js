export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devchat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  srcDir: 'src/',
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',
    'boxicons/css/boxicons.min.css',
    '@/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/theme', '@/plugins/vuesax', '@/plugins/firestore'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: '~/components/LoadingBar',

  router: {
    prefetchLinks: false,
    middleware: ['auth'],
  },

  env: {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: process.env.GOOGLE_AUTH_DOMAIN,
    projectId: process.env.GOOGLE_PROJECT_ID,
    storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
    messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
    appId: process.env.GOOGLE_APP_ID,
    measurementId: process.env.GOOGLE_MEASUREMENT_ID,
  },
}
