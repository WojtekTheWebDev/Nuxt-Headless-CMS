<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in items"
      :key="item.name"
      icon="mdi-school"
      color="primary"
      fill-dot
    >
      <span slot="opposite" class="text--secondary">{{ item.subtitle }}</span>

      <v-card class="elevation-2 pa-3">
        <v-card-title>
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
</template>

<script>
export default {
  name: 'Timeline',

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
