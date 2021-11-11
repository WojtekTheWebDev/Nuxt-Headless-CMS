<template>
  <v-app>
    <AppHeader />
    <PrivacyPolicy />

    <v-main>
      <nuxt />
    </v-main>
    <NavigationDrawer />
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue'
import PrivacyPolicy from '@/components/layout/PrivacyPolicy.vue'
import usePageIcon from '~/composables/usePageIcon'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    NavigationDrawer,
    PrivacyPolicy
  },

  setup () {
    usePageIcon()
  },

  head: {}
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
  overflow-y: hidden;
  font-family: 'Quicksand' sans-serif;
}
</style>
