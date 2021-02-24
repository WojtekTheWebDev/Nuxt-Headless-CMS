import localConfig from './local.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Nuxt Headless CMS',
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    contentfulSpace: process.env.CONTENTFUL_SPACE || localConfig.env.contentfulSpace || '',
    contentfulEnv: process.env.CONTENTFUL_ENV || localConfig.env.contentfulEnv || '',
    contentfulToken: process.env.CONTENTFUL_TOKEN || localConfig.env.contentfulToken || '',
    pageContentModel: process.env.CONTENTFUL_PAGE_CONTENT_MODEL || localConfig.env.pageContentModel || '',
    contentfulIncludeLevel: process.env.CONTENTFUL_INCLUDE_LEVEL || 5
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'gb',
        iso: 'en-GB'
      }
    ],
    defaultLocale: 'gb',
    vueI18n: {
      fallbackLocale: 'gb'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://cdn.contentful.com'
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
      themes: {}
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
