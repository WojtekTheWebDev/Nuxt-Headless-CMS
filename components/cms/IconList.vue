<template>
  <div class="icon-list mb-5">
    <h2 v-if="title" class="text-center mb-3">
      {{ title }}
    </h2>

    <div class="icon-list-content">
      <IconBox v-for="icon in icons" :key="icon.name" :title="icon.title" :icon="icon.icon" />
    </div>
  </div>
</template>

<script>
import IconBox from '@/components/cms/IconBox'

export default {
  name: 'IconList',

  components: {
    IconBox
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    icons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list {
  h2 {
    font-size: 2rem;
    font-weight: 300;
  }

  &-content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
