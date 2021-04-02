<template>
  <v-icon
    v-if="!(mobileOnly && !$vuetify.breakpoint.smAndDown)"
    class="click-me"
    :small="$vuetify.breakpoint.smAndDown"
  >
    mdi-gesture-tap
  </v-icon>
</template>

<script>
export default {
  name: 'ClickMe',

  props: {
    mobileOnly: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.click-me {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}
</style>
