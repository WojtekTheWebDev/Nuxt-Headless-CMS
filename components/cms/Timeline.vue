<template>
  <div class="timeline">
    <ComponentHeader :title="title" />

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="item in items"
        :key="item.name"
        icon="mdi-school"
        color="primary"
        fill-dot
      >
        <span slot="opposite" class="text--secondary">{{ item.subtitle }}</span>

        <v-card class="elevation-2 pa-3">
          <v-card-title class="keep-words">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle
            v-if="$vuetify.breakpoint.smAndDown"
            class="text-left"
          >
            {{ item.subtitle }}
          </v-card-subtitle>

          <v-card-text class="text-justify">
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ui/ComponentHeader'

export default {
  name: 'Timeline',

  components: {
    ComponentHeader
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
