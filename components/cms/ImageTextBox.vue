<template>
  <div class="image-text-box">
    <v-row>
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <img
          :src="imageSrc"
          :alt="image.alt"
          :width="150"
          :height="150"
        >
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="8" class="px-5 text-justify">
        <div
          :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
          v-html="markedDescription"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import ImageTextBox from '@/types/cms/components/ImageTextBox'
import useMarkedText from '@/composables/useMarkedText'

export default defineComponent({
  name: 'ImageTextBox',

  props: {
    theme: {
      type: String as PropType<ImageTextBox['theme']>,
      default: (): ImageTextBox['theme'] => 'light',
      validate: (val: ImageTextBox['theme']) => val === 'light' || val === 'dark'
    },
    description: {
      type: String as PropType<ImageTextBox['description']>,
      default: (): ImageTextBox['description'] => ''
    },
    image: {
      type: Object as PropType<ImageTextBox['image']>,
      default: (): ImageTextBox['image'] => ({
        src: '',
        alt: ''
      })
    }
  },

  setup (props) {
    const markedDescription = useMarkedText(props.description)
    const imageSrc = computed(() => `${props.image.src}?w=150&h=150`)

    return {
      markedDescription,
      imageSrc
    }
  }
})
</script>
