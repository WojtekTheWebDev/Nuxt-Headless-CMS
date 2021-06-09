<template>
  <div class="modal-card">
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
          <p class="px-3">
            {{ title }}
          </p>
        </div>
      </template>

      <v-card raised>
        <TRCloseButton @close="dialog = false" />
        <v-img class="card-image align-end" :src="image.src" :alt="image.alt" />
        <v-card-title>{{ title }}</v-card-title>

        <v-card-text
          :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
          v-html="description"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import marked from 'marked'
import CMSMixin from '@/mixins/CMSMixin'
import ClickMe from '@/components/ui/ClickMe'
import TRCloseButton from '@/components/ui/TRCloseButton'

export default {
  name: 'ModalCard',

  components: {
    TRCloseButton,
    ClickMe
  },

  mixins: [CMSMixin],

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
  }),

  computed: {
    markedDescription () {
      return marked(this.description)
    }
  }
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

    p {
      color: #fff;
      text-shadow: 1px 1px 5px var(--v-secondary-base);
      position: absolute;
      text-align: center;
      font-weight: 500;
      font-size: 2rem;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      background-color: var(--v-primary-base);

      .image {
        opacity: 0.5;
      }

      p {
        opacity: 1;
      }
    }
  }
}
</style>
