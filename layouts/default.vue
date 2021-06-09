<template>
  <v-app>
    <AppHeader />

    <v-main>
      <nuxt />
    </v-main>

    <NavigationDrawer />
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import NavigationDrawer from '@/components/layout/NavigationDrawer'
import PageMixin from '@/mixins/PageMixin'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppHeader,
    AppFooter,
    NavigationDrawer
  },

  mixins: [PageMixin],

  head () {
    return {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: this.pageIcon }
      ]
    }
  },

  computed: {
    ...mapGetters({
      pageIcon: 'config/getPageIcon'
    })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
  overflow-y: hidden;
  font-family: 'Quicksand' sans-serif;
}
</style>
