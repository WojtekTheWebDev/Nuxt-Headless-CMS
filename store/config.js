export const state = () => ({
  routes: null,
  logo: null,
  pageIcon: null,
  pageName: null,
  homePageName: null,
  contactDetails: null,
  privacyPolicy: null
})

export const getters = {
  getPageIcon (state) {
    return state.pageIcon + '?w=30&h=30'
  },

  getLogo (state) {
    return state.logo + '?w=50&h=50'
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

  SET_HOME_PAGE_NAME (state, payload) {
    state.homePageName = payload
  },

  SET_CONTACT_DETAILS (state, payload) {
    state.contactDetails = payload
  },

  SET_PRIVACY_POLICY (state, payload) {
    state.privacyPolicy = payload
  }
}

export const actions = {
  async init ({ commit }) {
    const res = await fetch(`${process.env.baseURL}/api/config?locale=${this.$i18n.locale}`)

    if (res.status !== 200) { return }

    const { routes, logo, pageIcon, homePageName, pageName, contactDetails, privacyPolicy } = await res.json()

    commit('SET_ROUTES', routes)
    commit('SET_LOGO', logo)
    commit('SET_PAGE_ICON', pageIcon)
    commit('SET_PAGE_NAME', pageName)
    commit('SET_HOME_PAGE_NAME', homePageName)
    commit('SET_CONTACT_DETAILS', contactDetails)
    commit('SET_PRIVACY_POLICY', privacyPolicy)
  },

  async translateState ({ commit }, locale) {
    const config = await fetch(`http://localhost:3000/api/config?locale=${locale}`)

    const { routing, privacyPolicy } = config

    if (!routing) { return }

    commit('SET_ROUTES', routing.map(page => page.fields))
    commit('SET_PRIVACY_POLICY', privacyPolicy ? privacyPolicy.fields : null)
  }
}
