<template>
  <div
    class="text-box text-justify"
    :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
    v-html="markedDescription"
  />
</template>

<script>
import marked from 'marked'
import CMSMixin from '@/mixins/CMSMixin'

export default {
  name: 'TextBox',

  mixins: [CMSMixin],

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
