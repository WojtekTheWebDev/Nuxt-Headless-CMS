<template>
  <div class="media-box mb-5">
    <video
      v-if="isVideo"
      :width="width ? width : defaultWidth"
      :height="height ? height : null"
      controls="controls"
    >
      <source :src="asset.src" type="video/mp4">
    </video>

    <img
      v-else-if="isImage"
      :class="{ rounded }"
      :src="imageURL"
      :alt="asset.title"
      :width="width ? width : defaultWidth"
      :height="height ? height : null"
    >
  </div>
</template>

<script>
export default {
  name: 'MediaBox',

  props: {
    asset: {
      type: Object,
      default: () => ({
        src: '',
        type: '',
        title: ''
      })
    },

    width: {
      type: Number,
      default: 0
    },

    height: {
      type: Number,
      default: 0
    },

    rounded: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isImage () {
      return this.asset.type.includes('image')
    },
    isVideo () {
      return this.asset.type.includes('video')
    },
    imageURL () {
      const width = this.width ? this.width : this.defaultWidth
      const height = this.height ? this.height : null
      let imageURL = `${this.asset.src}?w=${width}`

      if (height) { imageURL += `h=${height}` }

      return imageURL
    },
    defaultWidth () {
      return this.$vuetify.breakpoint.smAndDown ? 300 : 500
    }
  }
}
</script>

<style lang="scss" scoped>
.media-box {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
