<template>
  <div class="language-display d-flex align-center justify-center">
    {{ code }}

    <img class="ml-3" :src="`https://www.countryflags.io/${code}/flat/24.png`" :alt="`${code} flag`">
  </div>
</template>

<script>
export default {
  name: 'LanguageDisplay',

  props: {
    code: {
      type: String,
      required: true
    }
  }
}
</script>
