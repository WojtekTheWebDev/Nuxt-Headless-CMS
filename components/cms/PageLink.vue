<template>
  <div class="page-link">
    <v-btn
      v-if="type === 'Button'"
      :to="link"
      nuxt
      exact
      :color="theme === 'dark' ? 'primary' : 'secondary'"
      rounded
      outlined
      large
    >
      {{ text }}
    </v-btn>

    <nuxt-link
      v-else
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
      :to="link"
      exact
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, useContext } from '@nuxtjs/composition-api'
import PageLink from '@/types/cms/components/PageLink'

export default defineComponent({
  name: 'PageLink',

  props: {
    text: {
      type: String as PropType<PageLink['text']>,
      default: (): PageLink['text'] => ''
    },
    theme: {
      type: String as PropType<PageLink['theme']>,
      default: (): PageLink['theme'] => 'light',
      validate: (val: PageLink['theme']) => val === 'light' || val === 'dark'
    },
    slug: {
      type: String as PropType<PageLink['slug']>,
      default: (): PageLink['slug'] => ''
    },
    type: {
      type: String as PropType<PageLink['type']>,
      default: (): PageLink['type'] => 'Button',
      validator: (value: PageLink['type']) => value === 'Button' || value === 'Link'
    },
    parentPageSlug: {
      type: String as PropType<PageLink['text']>,
      default: (): PageLink['parentPageSlug'] => undefined
    }
  },

  setup (props) {
    const app = useContext()
    const link = computed(() => props.parentPageSlug
      ? app.localePath(`/${props.parentPageSlug}/${props.slug}`)
      : app.localePath(`/${props.slug}`))

    return {
      link
    }
  }
})
</script>

<style lang="scss" scoped>
.page-link {
  text-align: center;

  a {
    font-size: 1.2rem;
  }
}
</style>
