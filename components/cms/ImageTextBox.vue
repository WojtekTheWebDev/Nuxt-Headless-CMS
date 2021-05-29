<template>
  <div class="image-text-box">
    <v-row>
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        sm="12"
        md="6"
        lg="4"
      >
        <img
          :src="imageURL"
          :alt="image.title"
          :width="150"
          :height="150"
        >
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="8" class="px-5 text-justify">
        <div v-html="markedDescription" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'ImageTextBox',

  props: {
    description: {
      type: String,
      default: ''
    },

    image: {
      type: Object,
      default: () => ({
        src: '',
        type: '',
        title: ''
      })
    }
  },

  computed: {
    markedDescription () {
      return marked(this.description)
    },

    imageURL () {
      return `${this.image.src}?w=150&h=150`
    }
  }
}
</script>
