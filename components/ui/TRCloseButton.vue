<template>
  <v-btn
    class="tr-close-button"
    icon
    :dark="dark"
    @click="$emit('close')"
  >
    <v-icon>mdi-close</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'TRCloseButton',

  props: {
    dark: {
      type: Boolean,
      default: true
    }
  },

  emits: ['close']
}
</script>

<style lang="scss" scoped>
.tr-close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}
</style>
