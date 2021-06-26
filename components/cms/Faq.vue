<template>
  <div>
    <v-expansion-panels focusable inset>
      <v-expansion-panel
        v-for="item in items"
        :key="item.name"
        :class="theme === 'dark' ? 'faq-item-dark' : 'faq-item-light' "
      >
        <v-expansion-panel-header
          :class="theme === 'dark' ? 'faq-question-dark' : 'faq-question-light' "
          class="faq-question"
          color="primary"
        >
          {{ item.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="theme === 'dark' ? 'faq-answer-dark' : 'faq-answer-light' "
          class="faq-answer"
        >
          {{ item.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

import CMSMixin from '~/mixins/CMSMixin'

export default {
  name: 'Faq',

  components: {},

  mixins: [CMSMixin],
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

.faq-answer {
  padding-top: 10px;
}

.faq-question::before {
  opacity: 0 !important;
}

.faq-answer-dark {
  border-color: white;
  border-style: none solid solid;
  border-width: 1px;
  border-radius: 0 0 4px 4px;
}

.faq-question-dark {
  color: black;

  .theme--dark {
    color: black !important;
  }
}

.faq-item-dark{
  box-shadow: 0px 2px 1px 0px rgb(255 255 255 / 40%), 0px 2px 2px 0px rgb(255 255 255 / 30%), 0px 1px 2px 0px rgb(255 255 255 / 25%);
}
</style>
