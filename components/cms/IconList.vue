<template>
  <div class="icon-list">
    <ComponentHeader :title="title" />

    <v-row>
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

<script>
import IconBox from '@/components/cms/IconBox'
import ComponentHeader from '@/components/ui/ComponentHeader'

export default {
  name: 'IconList',

  components: {
    IconBox,
    ComponentHeader
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    icons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
