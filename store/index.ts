import { GetterTree, ActionTree, MutationTree } from 'vuex/types'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
}

export const mutations: MutationTree<RootState> = {
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('config/init')
  }
}
