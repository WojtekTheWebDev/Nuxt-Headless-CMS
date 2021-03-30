<template>
  <div class="language-display d-flex align-center justify-center">
    <span class="mr-3">{{ locale.code }}</span>
    <country-flag :country="locale.iso" size="small" />
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'LanguageDisplay',

  components: {
    CountryFlag
  },

  props: {
    locale: {
      type: Object,
      default: () => ({
        code: '',
        iso: ''
      })
    }
  }
}
</script>
