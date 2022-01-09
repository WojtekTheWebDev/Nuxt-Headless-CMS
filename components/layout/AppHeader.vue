<template>
  <v-app-bar
    app
    elevate-on-scroll
    dark
    color="headerBackground"
  >
    <v-container class="py-0 d-flex align-center">
      <PageLogo class="mr-3" />
      <AppHeaderContent />
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PageLogo from '@/components/layout/PageLogo.vue'
import AppHeaderContent from '@/components/layout/AppHeaderContent.vue'

export default defineComponent({
  name: 'AppHeader',

  components: {
    PageLogo,
    AppHeaderContent
  }
})
</script>
