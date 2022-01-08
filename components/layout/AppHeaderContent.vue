<template>
  <div class="app-header-content">
    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="d-flex align-center justify-end"
    >
      <v-app-bar-nav-icon @click="showDrawer" />
    </div>

    <div v-else class="d-flex align-center">
      <Navigation />
      <v-spacer />
      <ContactButtons dense :large="false" />
      <v-divider
        vertical
        class="py-1 mx-1"
      />
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import ContactButtons from '@/components/layout/ContactButtons.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import Navigation from '@/components/layout/Navigation.vue'

export default defineComponent({
  name: 'AppHeaderContent',

  components: {
    LanguageSwitcher,
    Navigation,
    ContactButtons
  },

  setup () {
    const { store } = useContext()
    const showDrawer = () => store.dispatch('ui/setNavigationDrawer', true)

    return {
      showDrawer
    }
  }
})
</script>

<style lang="scss" scoped>
.app-header-content {
  flex-grow: 1;

  > div {
    width: 100%;
  }
}
</style>
