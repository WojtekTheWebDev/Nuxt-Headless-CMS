<template>
  <div class="modal-card pa-3">
    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#323330"
      overlay-opacity="0.9"
      :fullscreen="$vuetify.breakpoint.smAndDown"
    >
      <template #activator="{ on, attrs }">
        <div
          class="modal-card-activator"
          v-bind="attrs"
          v-on="on"
        >
          <ClickMe />
          <v-img class="image" contain :src="image.src" :alt="image.alt" />
          <h4 class="px-3">
            {{ title }}
          </h4>
        </div>
      </template>

      <v-card raised>
        <TRCloseButton @close="dialog = false" />
        <v-img class="align-end" :src="image.src" :alt="image.alt" />
        <v-card-title>{{ title }}</v-card-title>

        <v-card-text>{{ description }}</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TRCloseButton from '@/components/ui/TRCloseButton'
import ClickMe from '@/components/ui/ClickMe'

export default {
  name: 'ModalCard',

  components: {
    TRCloseButton,
    ClickMe
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    image: {
      type: Object,
      default: () => ({
        src: '',
        alt: ''
      })
    }
  },

  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss" scoped>
.modal-card {
  position: relative;
  width: 100%;

  &-activator {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    .image {
      transition: all 0.2s ease-in-out;
    }

    h4 {
      position: absolute;
      text-align: center;
      font-weight: 300;
      font-size: 2rem;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      background-color: var(--v-primary-base);

      .image {
        opacity: 0.5;
      }

      h4 {
        opacity: 1;
      }
    }
  }

}
</style>
