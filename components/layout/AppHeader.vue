<template>
  <v-app-bar
    app
    elevate-on-scroll
  >
    <v-toolbar-title>Nuxt Headless CMS</v-toolbar-title>

    <v-spacer />

    <LanguageSwitcher />
  </v-app-bar>
</template>

<script>
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

export default {
  name: 'AppHeader',

  components: {
    LanguageSwitcher
  }
}
</script>
