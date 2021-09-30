<template>
  <div class="icon-list">
    <ComponentHeader :title="title" />

    <v-row class="d-flex justify-center">
      <v-col
        v-for="icon in icons"
        :key="icon.name"
        cols="12"
        sm="6"
        md="3"
        lg="2"
        class="text-center"
      >
        <IconBox :title="icon.title" :icon="icon.icon" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import IconList from '@/types/cms/components/IconList'
import ComponentHeader from '@/components/ui/ComponentHeader.vue'
import IconBox from '@/components/cms/IconBox.vue'

export default defineComponent({
  name: 'IconList',

  components: {
    IconBox,
    ComponentHeader
  },

  props: {
    theme: {
      type: String as PropType<IconList['theme']>,
      default: (): IconList['theme'] => 'light',
      validate: (val: IconList['theme']) => val === 'light' || val === 'dark'
    },
    title: {
      type: String as PropType<IconList['title']>,
      default: (): IconList['title'] => ''
    },
    icons: {
      type: Array as PropType<IconList['icons']>,
      default: (): IconList['icons'] => []
    }
  }
})
</script>
