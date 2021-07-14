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

<script>
import ContactButtons from '@/components/layout/ContactButtons'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import Navigation from '@/components/layout/Navigation'

export default {
  name: 'AppHeaderContent',

  components: {
    LanguageSwitcher,
    Navigation,
    ContactButtons
  },

  methods: {
    showDrawer () {
      this.$store.dispatch('ui/toggleNavigationDrawer', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header-content {
  flex-grow: 1;

  > div {
    width: 100%;
  }
}
</style>
