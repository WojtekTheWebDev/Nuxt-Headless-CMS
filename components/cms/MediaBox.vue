<template>
  <div class="media-box">
    <video
      v-if="isVideo"
      :width="width ? width : defaultWidth"
      :height="height ? height : null"
      controls="controls"
    >
      <source :src="asset.src" type="video/mp4">
    </video>

    <img
      v-else-if="isImage"
      :class="{ 'img-rounded': rounded }"
      :src="imageSrc"
      :alt="asset.alt"
      :width="width ? width : defaultWidth"
      :height="height ? height : null"
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, useContext } from '@nuxtjs/composition-api'
import { MediaBox } from '@/types/cms'

export default defineComponent({
  name: 'MediaBox',

  props: {
    theme: {
      type: String as PropType<MediaBox['theme']>,
      default: (): MediaBox['theme'] => 'light',
      validate: (val: MediaBox['theme']) => val === 'light' || val === 'dark'
    },
    asset: {
      type: Object as PropType<MediaBox['asset']>,
      default: (): MediaBox['asset'] => ({
        src: '',
        alt: '',
        type: ''
      })
    },
    width: {
      type: Number as PropType<MediaBox['width']>,
      default: (): MediaBox['width'] => 0
    },
    height: {
      type: Number as PropType<MediaBox['height']>,
      default: (): MediaBox['height'] => 0
    },
    rounded: {
      type: Boolean as PropType<MediaBox['rounded']>,
      default: (): MediaBox['rounded'] => false
    }
  },

  setup (props) {
    const app = useContext()

    const isImage = computed(() => props.asset.type.includes('image'))
    const isVideo = computed(() => props.asset.type.includes('video'))
    const defaultWidth = computed(() => app.$vuetify.breakpoint.smAndDown ? 300 : 500)
    const imageSrc = computed(() => {
      const width = props.width ? props.width : defaultWidth
      const height = props.height ? props.height : null
      let imageURL = `${props.asset.src}?w=${width}`

      if (height) { imageURL += `h=${height}` }

      return imageURL
    })

    return {
      isImage,
      isVideo,
      defaultWidth,
      imageSrc
    }
  }
})
</script>

<style lang="scss" scoped>
.media-box {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-rounded {
    border-radius: 100%;
  }
}
</style>
