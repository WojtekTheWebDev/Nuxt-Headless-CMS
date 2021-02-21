<template>
  <v-app>
    <AppHeader />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  },

  data () {
    return {

    }
  }
}
</script>
