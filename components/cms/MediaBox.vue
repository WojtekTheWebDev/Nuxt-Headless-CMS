<template>
  <div class="media-box mb-5">
    <video
      v-if="isVideo"
      :width="width ? width : 500"
      :height="height ? height : null"
      controls="controls"
    >
      <source :src="asset.file.url" type="video/mp4">
    </video>

    <img
      v-else-if="isImage"
      :class="{ rounded }"
      :src="imageURL"
      :alt="asset.title"
      :width="width ? width : 500"
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
      default: () => ({})
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
      return this.asset.file.contentType.includes('image')
    },
    isVideo () {
      return this.asset.file.contentType.includes('video')
    },
    imageURL () {
      return `${this.asset.file.url}?h=500`
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
