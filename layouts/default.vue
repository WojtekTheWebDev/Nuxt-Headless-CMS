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

export default {
  components: {
    AppHeader
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
