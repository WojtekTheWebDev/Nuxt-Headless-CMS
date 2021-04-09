<template>
  <nav>
    <v-btn
      v-for="route in routes"
      :key="route.path"
      :to="localePath(`/${route.path}`)"
      nuxt
      exact
      text
      class="mx-3"
      rounded
    >
      {{ route.name }}
    </v-btn>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters({
      routes: 'config/getRoutes'
    })
  }
}
</script>
