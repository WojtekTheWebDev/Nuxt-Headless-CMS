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

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Faq } from '@/types/cms'

export default defineComponent({
  name: 'Faq',

  components: {},

  props: {
    theme: {
      type: String as PropType<Faq['theme']>,
      default: (): Faq['theme'] => 'light',
      validate: (val: Faq['theme']) => val === 'light' || val === 'dark'
    },
    title: {
      type: String as PropType<Faq['title']>,
      default: (): Faq['title'] => ''
    },
    items: {
      type: Array as PropType<Faq['items']>,
      default: (): Faq['items'] => []
    }
  }
})
</script>

<style lang="scss" scoped>

.faq {
  &-question {
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
