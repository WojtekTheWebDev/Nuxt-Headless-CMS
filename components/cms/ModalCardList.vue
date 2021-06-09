<template>
  <div class="modal-card-list">
    <ComponentHeader :title="title" :subtitle="subtitle" />

    <v-row class="d-flex justify-center align-center">
      <v-col
        v-for="modalCard in modalCards"
        :key="modalCard.name"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <ModalCard
          :title="modalCard.title"
          :description="modalCard.description"
          :image="modalCard.image"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'
import ComponentHeader from '@/components/ui/ComponentHeader'
import ModalCard from '@/components/cms/ModalCard'

export default {
  name: 'ModalCardList',

  components: {
    ModalCard,
    ComponentHeader
  },

  mixins: [CMSMixin],

  props: {
    title: {
      type: String,
      default: ''
    },

    subtitle: {
      type: String,
      default: ''
    },

    modalCards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card-list {
  h2 {
    font-weight: 300;
    font-size: 2rem;
  }

  h3 {
    font-weight: 300;
    font-size: 1.5rem;
  }
}
</style>
