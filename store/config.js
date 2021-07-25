import { createClient } from '@/plugins/contentful'

export const state = () => ({
  routes: null,
  logo: null,
  pageIcon: null,
  pageName: null,
  homePage: null,
  contactDetails: null,
  privacyPolicy: null
})

export const getters = {
  getPageIcon (state) {
    return state.pageIcon.file.url + '?w=30&h=30'
  },

  getLogo (state) {
    return state.logo.file.url + '?w=50&h=50'
  },

  getRoutes (state) {
    return state.routes.map(route => ({ path: route.slug, name: route.title }))
  },

  getHomePageName (state) {
    return state.homePage.name
  }
}

export const mutations = {
  SET_ROUTES (state, payload) {
    state.routes = payload
  },

  SET_LOGO (state, payload) {
    state.logo = payload
  },

  SET_PAGE_ICON (state, payload) {
    state.pageIcon = payload
  },

  SET_PAGE_NAME (state, payload) {
    state.pageName = payload
  },

  SET_HOME_PAGE (state, payload) {
    state.homePage = payload
  },

  SET_CONTACT_DETAILS (state, payload) {
    state.contactDetails = payload
  },

  SET_PRIVACY_POLICY (state, payload) {
    state.privacyPolicy = payload
  }
}

export const actions = {
  async init ({ state, commit }) {
    const client = createClient()
    const entries = await client.getEntries({
      content_type: process.env.configContentModel,
      include: process.env.contentfulIncludeLevel,
      locale: this.$i18n.locale
    })

    if (!entries.total) { return }

    const { routing, logo, pageIcon, pageName, homePage, contactDetails, privacyPolicy } = entries.items[0].fields

    commit('SET_ROUTES', routing?.map(page => page.fields) || [])
    commit('SET_LOGO', logo.fields)
    commit('SET_PAGE_ICON', pageIcon.fields)
    commit('SET_PAGE_NAME', pageName)
    commit('SET_HOME_PAGE', homePage.fields)
    commit('SET_CONTACT_DETAILS', contactDetails.fields)
    commit('SET_PRIVACY_POLICY', privacyPolicy ? privacyPolicy.fields : null)
  },

  async translateState ({ commit }, locale) {
    const client = createClient()
    const entries = await client.getEntries({
      content_type: process.env.configContentModel,
      include: process.env.contentfulIncludeLevel,
      locale
    })

    if (!entries.total) { return }

    const { routing, privacyPolicy } = entries.items[0].fields

    if (!routing) { return }

    commit('SET_ROUTES', routing.map(page => page.fields))
    commit('SET_PRIVACY_POLICY', privacyPolicy ? privacyPolicy.fields : null)
  }
}
