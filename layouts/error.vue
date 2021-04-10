<template>
  <v-app>
    <v-container class="d-flex flex-column align-center justify-center pa-10">
      <h1 class="mb-3">
        {{ pageError.title }}
      </h1>

      <p class="mb-3">
        {{ pageError.message }}
      </p>

      <v-btn
        color="secondary"
        rounded
        outlined
        x-large
        :to="localePath(`/`)"
        nuxt
        exact
        class="my-3"
      >
        {{ $t('homePage') }}
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data () {
    return {
      pageNotFound: {
        title: this.$t('pageNotFoundTitle'),
        message: this.$t('pageNotFoundMessage')
      },
      otherError: this.$t('otherErrorTitle'),
      message: this.$t('otherErrorMessage')
    }
  },

  head () {
    return {
      title: this.pageError.title,
      meta: [
        { hid: 'description', name: 'description', content: this.pageError.message }
      ]
    }
  },

  computed: {
    pageError () {
      return this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

h1 {
  font-size: 5rem;
}

p {
  font-size: 2rem;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
}
}
</style>
