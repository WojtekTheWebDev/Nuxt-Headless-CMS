<template>
  <div class="icon-box">
    <img :src="iconURL" :alt="icon.alt">
    <p class="text-center">
      {{ title }}
    </p>
  </div>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'

export default {
  name: 'IconBox',

  mixins: [CMSMixin],

  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: () => ({
        src: '',
        alt: ''
      })
    }
  },

  computed: {
    iconURL () {
      return `${this.icon.src}?w=100&h=100`
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-box {
  img {
    height: 100px;
  }
}
</style>
