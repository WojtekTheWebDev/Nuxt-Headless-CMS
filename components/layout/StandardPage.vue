<template>
  <article class="standard-page">
    <PageHeader
      :title="header.title"
      :background-image="header.backgroundImage"
      :background-color="header.backgroundColor"
      :show-header="header.showHeader"
    />

    <component
      :is="contentBlock.component"
      v-for="contentBlock in contentBlocks"
      :key="contentBlock.name"
      v-bind="contentBlock.props"
    />
  </article>
</template>

<script>
import PageHeader from '@/components/cms/PageHeader'

export default {
  name: 'StandardPage',

  components: {
    PageHeader
  },

  props: {
    header: {
      type: Object,
      default: () => ({
        title: '',
        backgroundImage: '',
        backgroundColor: '',
        showHeader: false
      })
    },

    contentBlocks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.standard-page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
