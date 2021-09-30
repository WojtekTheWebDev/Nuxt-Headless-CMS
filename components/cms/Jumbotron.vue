<template>
  <div class="jumbotron">
    <h2 class="jumbotron-title">
      {{ title }}
    </h2>
    <div class="jumbotron-description" v-html="markedDescription" />
    <div class="jumbotron-page-links">
      <PageLink
        v-for="pageLink in pageLinks"
        :key="pageLink.slug"
        :theme="theme"
        :text="pageLink.text"
        :type="pageLink.type"
        :slug="pageLink.slug"
        :parent-page-slug="pageLink.parentPageSlug"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import PageLink from '@/components/cms/PageLink.vue'
import Jumbotron from '@/types/cms/components/Jumbotron'
import useMarkedText from '~/composables/useMarkedText'

export default defineComponent({
  name: 'Jumbotron',

  components: {
    PageLink
  },

  props: {
    theme: {
      type: String as PropType<Jumbotron['theme']>,
      default: (): Jumbotron['theme'] => 'light',
      validate: (val: Jumbotron['theme']) => val === 'light' || val === 'dark'
    },
    title: {
      type: String as PropType<Jumbotron['title']>,
      default: (): Jumbotron['title'] => ''
    },
    description: {
      type: String as PropType<Jumbotron['description']>,
      default: (): Jumbotron['title'] => ''
    },
    pageLinks: {
      type: Array as PropType<Jumbotron['pageLinks']>,
      default: (): Jumbotron['pageLinks'] => []
    }
  },

  setup (props) {
    const markedDescription = useMarkedText(props.description)

    return {
      markedDescription
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.jumbotron {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &-title {
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }

  &-description {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }

  &-page-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .page-link {
      margin: 1rem;
    }
  }
}
</style>
