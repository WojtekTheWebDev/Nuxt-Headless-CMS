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
          :theme="theme"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import ComponentHeader from '@/components/ui/ComponentHeader.vue'
import ModalCard from '@/components/cms/ModalCard.vue'
import ModalCardList from '@/types/cms/components/ModalCardList'

export default defineComponent({
  name: 'ModalCardList',

  components: {
    ModalCard,
    ComponentHeader
  },

  props: {
    theme: {
      type: String as PropType<ModalCardList['theme']>,
      default: (): ModalCardList['theme'] => 'light',
      validate: (val: ModalCardList['theme']) => val === 'light' || val === 'dark'
    },
    title: {
      type: String as PropType<ModalCardList['title']>,
      default: (): ModalCardList['title'] => ''
    },
    subtitle: {
      type: String as PropType<ModalCardList['subtitle']>,
      default: (): ModalCardList['subtitle'] => ''
    },
    modalCards: {
      type: Array as PropType<ModalCardList['modalCards']>,
      default: (): ModalCardList['modalCards'] => []
    }
  }
})
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
