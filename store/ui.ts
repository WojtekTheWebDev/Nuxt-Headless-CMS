import { ActionTree, MutationTree } from 'vuex/types'
import { RootState } from '~/store'

export const state = () => ({
  navigationDrawerVisible: false
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  TOGGLE_DRAWER (state, payload: boolean) {
    state.navigationDrawerVisible = payload
  }
}

export const actions: ActionTree<State, RootState> = {
  toggleNavigationDrawer ({ commit }, payload: boolean) {
    commit('TOGGLE_DRAWER', payload)
  }
}
