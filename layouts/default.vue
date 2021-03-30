<template>
  <v-app>
    <AppHeader />

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import CMSMixin from '@/mixins/CMSMixin'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppHeader
  },

  mixins: [CMSMixin],

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
