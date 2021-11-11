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

<script lang="ts">
import { computed, defineComponent, PropType, useContext, useMeta } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'
import usePageIcon from '~/composables/usePageIcon'

export default defineComponent({
  layout: 'empty',

  props: {
    error: {
      type: Object as PropType<NuxtError>,
      default: (): NuxtError => ({})
    }
  },

  setup (props) {
    usePageIcon()

    const { i18n } = useContext()

    const pageNotFound = computed(() => ({
      title: i18n.t('pageNotFoundTitle') as string,
      message: i18n.t('pageNotFoundMessage') as string
    }))

    const otherError = computed(() => ({
      title: i18n.t('otherErrorTitle') as string,
      message: i18n.t('otherErrorMessage') as string
    }))

    const pageError = computed(() => props.error.statusCode === 404 ? pageNotFound.value : otherError.value)

    useMeta(() => ({
      title: pageError.value.title,
      meta: [
        { hid: 'description', name: 'description', content: pageError.value.message }
      ]
    }))

    return {
      pageError
    }
  },

  head: {}
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

h1 {
  font-size: 5rem;
  text-align: center;
}

p {
  font-size: 2rem;
  text-align: center;
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
