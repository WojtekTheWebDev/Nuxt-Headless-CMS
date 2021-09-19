<template>
  <nav
    class="d-flex align-center"
    :class="{ 'flex-column': vertical }"
  >
    <v-btn
      v-if="showHomePage"
      :to="localePath(`/`)"
      nuxt
      exact
      rounded
      plain
      class="px-3"
      active-class="primary--text"
    >
      {{ $t('homePage') }}
    </v-btn>

    <v-btn
      v-for="route in routes"
      :key="route.path"
      :to="localePath(`/${route.path}`)"
      nuxt
      rounded
      plain
      active-class="primary--text"
      class="px-3"
    >
      {{ route.title }}
    </v-btn>

    <v-btn
      v-if="privacyPolicy && showPrivacyPolicy"
      :to="localePath(`/${privacyPolicy.slug}`)"
      nuxt
      exact
      rounded
      plain
      class="px-3"
      active-class="primary--text"
    >
      {{ privacyPolicy.title }}
    </v-btn>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',

  props: {
    showHomePage: {
      type: Boolean,
      default: false
    },

    showPrivacyPolicy: {
      type: Boolean,
      default: false
    },

    vertical: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      routes: ({ config }) => config.routes,
      privacyPolicy: ({ config }) => config.privacyPolicy
    })
  }
}
</script>
