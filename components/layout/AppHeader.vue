<template>
  <v-app-bar
    app
    elevate-on-scroll
    dark
  >
    <PageLogo />

    <v-spacer />

    <Navigation />

    <LanguageSwitcher />
  </v-app-bar>
</template>

<script>
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import Navigation from '@/components/ui/Navigation'
import PageLogo from '@/components/ui/PageLogo'

export default {
  name: 'AppHeader',

  components: {
    LanguageSwitcher,
    Navigation,
    PageLogo
  }
}
</script>
