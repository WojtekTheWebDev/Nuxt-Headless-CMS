<template>
  <div
    class="text-box text-justify"
    v-html="markedDescription"
  />
</template>

<script>
import marked from 'marked'
export default {
  name: 'TextBox',

  props: {
    description: {
      type: String,
      default: ''
    }
  },

  computed: {
    markedDescription () {
      return marked(this.description)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-box {
  width: 100%;
}
</style>
