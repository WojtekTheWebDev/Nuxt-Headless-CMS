<template>
  <header
    v-if="showHeader"
    class="page-header"
    :style="{ backgroundColor }"
  >
    <v-container class="pa-0">
      <v-parallax
        v-if="backgroundImage"
        :src="`${backgroundImage}?w=1440`"
      >
        <h1 class="text-center">
          {{ title }}
        </h1>
      </v-parallax>

      <div
        v-else
        class="page-header-no-img"
      >
        <h1 class="text-center">
          {{ title }}
        </h1>
      </div>
    </v-container>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import PageHeader from '@/types/cms/PageHeader'

export default defineComponent({
  name: 'PageHeader',

  props: {
    title: {
      type: String as PropType<PageHeader['title']>,
      default: (): PageHeader['title'] => ''
    },
    backgroundImage: {
      type: String as PropType<PageHeader['backgroundImage']>,
      default: (): PageHeader['backgroundImage'] => ''
    },
    backgroundColor: {
      type: String as PropType<PageHeader['backgroundColor']>,
      default: (): PageHeader['backgroundColor'] => 'white'
    },
    showHeader: {
      type: Boolean as PropType<PageHeader['showHeader']>,
      default: (): PageHeader['showHeader'] => true
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

  .v-parallax {
    width: 100%;
  }

  &-no-img {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
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
