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

          {{ getAnswer(item) }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Faq, { FaqItem } from '@/types/cms/components/Faq'
import useMarkedText from '~/composables/useMarkedText'

export default defineComponent({
  name: 'Faq',

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
  },

  setup () {
    const getAnswer = (item: FaqItem) => useMarkedText(item.answer)

    return {
      getAnswer
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
