import { ActionTree, MutationTree } from 'vuex/types'
import { RootState } from '~/store'

export const state = () => ({
  navigationDrawerVisible: false
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  SET_DRAWER (state, payload: boolean) {
    state.navigationDrawerVisible = payload
  }
}

export const actions: ActionTree<State, RootState> = {
  setNavigationDrawer ({ commit }, payload: boolean) {
    commit('SET_DRAWER', payload)
  }
}
