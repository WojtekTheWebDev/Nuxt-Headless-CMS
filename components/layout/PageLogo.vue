<template>
  <nuxt-link :to="localePath('/')" exact class="home-page-navigation">
    <img class="mx-3" :src="logo.src" :alt="logo.alt" width="40" height="40">
    <span v-if="$vuetify.breakpoint.mdAndUp">{{ pageName }}</span>
  </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import { state } from '@/store/config'

export default defineComponent({
  name: 'PageLogo',

  setup () {
    const { store } = useContext()

    const configState = store.state.config as ReturnType<typeof state>

    return {
      pageName: computed(() => configState.homePageName),
      logo: computed(() => configState.logo)
    }
  }
})
</script>

<style lang="scss" scoped>
.home-page-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
}
</style>
