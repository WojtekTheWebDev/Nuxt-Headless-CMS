<template>
  <div>
    <v-expansion-panels
      class="faq"
      inset
    >
      <v-expansion-panel
        v-for="item in items"
        :key="item.name"
        class="faq-item"
      >
        <v-expansion-panel-header
          class="faq-question"
        >
          {{ item.question }}
        </v-expansion-panel-header>

        <v-expansion-panel-content class="faq-answer">
          <v-divider class="pb-3" />

          {{ item.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

export default {
  name: 'Faq',

  components: {},

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

<style lang="scss" scoped>

.faq {
  &-question {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
