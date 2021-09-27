export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Nuxt Headless CMS',
    title: 'Nuxt Headless CMS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },

  env: {
    baseURL: 'http://localhost:3000'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  loading: {
    color: '#f0db4f',
    height: '2px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  serverMiddleware: [
    '~/api/index.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  googleAnalytics: {
    id: process.env.GA_ID || ''
  },

  i18n: {
    locales: [{
      code: 'en',
      iso: 'gb'
    }],
    seo: true,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          homePage: 'Home page',
          siteMap: 'Site map',
          getInTouch: 'Get in touch',
          pageNotFoundTitle: 'Page not found!',
          pageNotFoundMessage: 'The page that you\'re looking for was not found.',
          otherErrorTitle: 'Oops, something\'s gone wrong!',
          otherErrorMessage: 'It\'s not you - it\'s us. Sorry for that.'
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Quicksand'
      }
    },
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#f0db4f',
          secondary: '#323330',
          info: '#323330',

          // Backgrounds
          lightBackground: '#ffffff',
          darkBackground: '#141414',
          headerBackground: '#141414',
          footerBackground: '#141414'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
