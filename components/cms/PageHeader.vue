<template>
  <header
    v-if="showHeader"
    class="page-header"
    :style="{ backgroundColor }"
  >
    <div
      class="d-flex align-center justify-center background-image"
      :style="{
        backgroundImage: backgroundImage && `url(${backgroundImage}?w=1440)`,
        aspectRatio
      }"
    >
      <h1 class="text-center">
        {{ title }}
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Header from '@/types/cms/components/Header'

export default defineComponent({
  name: 'PageHeader',

  props: {
    title: {
      type: String as PropType<Header['title']>,
      default: (): Header['title'] => ''
    },
    backgroundImage: {
      type: String as PropType<Header['backgroundImage']>,
      default: (): Header['backgroundImage'] => ''
    },
    backgroundColor: {
      type: String as PropType<Header['backgroundColor']>,
      default: (): Header['backgroundColor'] => 'white'
    },
    showHeader: {
      type: Boolean as PropType<Header['showHeader']>,
      default: (): Header['showHeader'] => true
    },
    aspectRatio: {
      type: String as PropType<Header['aspectRatio']>,
      default: (): Header['aspectRatio'] => 'initial'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.page-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .background-image {
    width: 100%;
    max-width: 1440px;
  }

  h1 {
    margin: auto;
    max-width: 1140px;
    font-size: 4rem;
    color: white;
    font-weight: 300;
    text-shadow: 1px 1px 5px var(--v-secondary-base);
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }
}
</style>
