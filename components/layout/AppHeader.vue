<template>
  <v-app-bar
    app
    elevate-on-scroll
    dark
  >
    <PageLogo />
    <AppHeaderContent />
  </v-app-bar>
</template>

<script>
import PageLogo from '@/components/ui/PageLogo'
import AppHeaderContent from '@/components/layout/AppHeaderContent'

export default {
  name: 'AppHeader',

  components: {
    PageLogo,
    AppHeaderContent
  }
}
</script>
