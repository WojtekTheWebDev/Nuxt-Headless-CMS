import { GetterTree, ActionTree, MutationTree } from 'vuex/types'
import { RootState } from '~/store'
import { Config } from '~/types/cms'

export const state = (): Config => ({
  routes: [],
  logo: { src: '', alt: '' },
  pageIcon: { src: '', alt: '' },
  pageName: '',
  homePageName: '',
  contactDetails: {},
  privacyPolicy: {
    message: '',
    acceptButtonText: '',
    slug: '',
    title: ''
  }
})

export type State = ReturnType<typeof state>

export const getters: GetterTree<State, RootState> = {
  getPageIcon (state) {
    return state.pageIcon ? `${state.pageIcon.src}?w=30&h=30` : ''
  },

  getLogo (state) {
    return state.logo ? `${state.logo}?w=50&h=50` : ''
  }
}

export const mutations: MutationTree<State> = {
  SET_ROUTES (state, payload: Config['routes']) {
    state.routes = payload
  },

  SET_LOGO (state, payload: Config['logo']) {
    state.logo = payload
  },

  SET_PAGE_ICON (state, payload: Config['pageIcon']) {
    state.pageIcon = payload
  },

  SET_PAGE_NAME (state, payload: Config['pageName']) {
    state.pageName = payload
  },

  SET_HOME_PAGE_NAME (state, payload: Config['homePageName']) {
    state.homePageName = payload
  },

  SET_CONTACT_DETAILS (state, payload: Config['contactDetails']) {
    state.contactDetails = payload
  },

  SET_PRIVACY_POLICY (state, payload: Config['privacyPolicy']) {
    state.privacyPolicy = payload
  }
}

export const actions: ActionTree<State, RootState> = {
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

    const { routes, privacyPolicy } = await config.json() as Config

    if (!routes) { return }

    commit('SET_ROUTES', routes)
    commit('SET_PRIVACY_POLICY', privacyPolicy)
  }
}
