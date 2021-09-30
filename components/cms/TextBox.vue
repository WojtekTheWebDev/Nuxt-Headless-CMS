<template>
  <div
    class="text-box text-justify"
    :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
    v-html="markedDescription"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import TextBox from '@/types/cms/components/TextBox'
import useMarkedText from '~/composables/useMarkedText'

export default defineComponent({
  name: 'TextBox',

  props: {
    theme: {
      type: String as PropType<TextBox['theme']>,
      default: (): TextBox['theme'] => 'light',
      validate: (val: TextBox['theme']) => val === 'light' || val === 'dark'
    },
    description: {
      type: String as PropType<TextBox['description']>,
      default: (): TextBox['description'] => ''
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
.text-box {
  width: 100%;
}
</style>
