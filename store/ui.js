export const state = () => ({
  navigationDrawerVisible: false
})

export const mutations = {
  TOGGLE_DRAWER (state, payload) {
    state.navigationDrawerVisible = payload
  }
}

export const actions = {
  toggleNavigationDrawer ({ commit }, payload) {
    commit('TOGGLE_DRAWER', payload)
  }
}
