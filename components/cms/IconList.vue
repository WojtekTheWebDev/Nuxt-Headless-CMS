<template>
  <div class="icon-list mb-5">
    <h2 v-if="title" class="text-center mb-3">
      {{ title }}
    </h2>

    <v-row>
      <v-col
        v-for="icon in icons"
        :key="icon.name"
        cols="12"
        sm="6"
        md="3"
        lg="2"
        class="text-center"
      >
        <IconBox :title="icon.title" :icon="icon.icon" />
      </v-col>
    </v-row>
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
}
</style>
