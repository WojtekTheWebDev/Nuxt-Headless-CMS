<template>
  <article class="standard-page">
    <PageHeader
      :title="header.title"
      :background-image="header.backgroundImage"
      :background-color="header.backgroundColor"
      :show-header="header.showHeader"
      :aspect-ratio="header.aspectRatio"
    />

    <component
      :is="contentBlock.component"
      v-for="contentBlock in contentBlocks"
      :key="contentBlock.name"
      v-bind="contentBlock.props"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import PageHeader from '@/components/cms/PageHeader.vue'
import { Page } from '@/types/cms'
import { Section } from '~/types/cms/components'

export default defineComponent({
  name: 'StandardPage',

  components: {
    PageHeader
  },

  props: {
    header: {
      type: Object as PropType<Page['header']>,
      default: () => ({
        title: '',
        backgroundImage: '',
        backgroundColor: '',
        showHeader: false
      })
    },

    contentBlocks: {
      type: Array as PropType<Section['contentBlocks']>,
      default: (): Section['contentBlocks'] => []
    }
  }
})
</script>

<style lang="scss" scoped>
.standard-page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
