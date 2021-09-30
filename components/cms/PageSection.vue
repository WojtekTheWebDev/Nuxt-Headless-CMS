<template>
  <v-card
    tag="section"
    class="page-section py-5"
    :class="{
      'dark-theme': theme === 'dark',
      'fill-height': fillHeight,
      'with-image': backgroundImage
    }"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    :dark="theme === 'dark'"
    flat
    tile
  >
    <v-container class="main-content">
      <h2 class="text-center mb-5">
        {{ title }}
      </h2>

      <div
        v-for="contentBlock in contentBlocks"
        :key="contentBlock.name"
        class="mb-5"
      >
        <component
          :is="contentBlock.component"
          v-bind="{ ...contentBlock.props, theme }"
        />
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Section from '@/types/cms/components/Section'

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<Section['theme']>,
      default: (): Section['theme'] => 'light',
      validate: (val: Section['theme']) => val === 'light' || val === 'dark'
    },
    title: {
      type: String as PropType<Section['title']>,
      default: (): Section['title'] => ''
    },
    contentBlocks: {
      type: Array as PropType<Section['contentBlocks']>,
      default: (): Section['contentBlocks'] => []
    },
    fillHeight: {
      type: Boolean as PropType<Section['fillHeight']>,
      default: (): Section['fillHeight'] => false
    },
    backgroundImage: {
      type: String as PropType<Section['backgroundImage']>,
      default: (): Section['backgroundImage'] => null
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.page-section {
  background-color: var(--v-lightBackground-base) !important;

  &.fill-height {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }

  &.with-image {
    background-size: cover;
    background-repeat: no-repeat;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 2rem;
    }
  }
}

.dark-theme {
  background-color: var(--v-darkBackground-base) !important;
}
</style>
