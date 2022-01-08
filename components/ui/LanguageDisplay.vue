<template>
  <div class="language-display d-flex align-center justify-center">
    <span class="mr-3">{{ locale.code }}</span>
    <country-flag :country="locale.iso" size="small" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import CountryFlag from 'vue-country-flag'
import { Locale } from '@/types/common'

export default defineComponent({
  name: 'LanguageDisplay',

  components: {
    CountryFlag
  },

  props: {
    locale: {
      type: Object as PropType<Locale>,
      default: (): Locale => ({
        code: '',
        iso: ''
      })
    }
  }
})
</script>
