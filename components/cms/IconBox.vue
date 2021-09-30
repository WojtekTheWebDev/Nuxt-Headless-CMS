<template>
  <div class="icon-box">
    <img :src="iconSrc" :alt="icon.alt">
    <p class="text-center">
      {{ title }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { ArrayElement } from '@/types/common'
import { IconList } from '@/types/cms'

type IconBox = ArrayElement<IconList['icons']>;

export default defineComponent({
  name: 'IconBox',

  props: {
    name: {
      type: String as PropType<IconBox['name']>,
      default: (): IconBox['name'] => ''
    },
    title: {
      type: String as PropType<IconBox['title']>,
      default: (): IconBox['title'] => ''
    },
    icon: {
      type: Object as PropType<IconBox['icon']>,
      default: (): IconBox['icon'] => ({
        src: '',
        alt: ''
      })
    }
  },

  setup (props) {
    const iconSrc = computed(() => `${props.icon.src}?w=100&h=100`)

    return {
      iconSrc
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-box {
  img {
    height: 100px;
  }
}
</style>
