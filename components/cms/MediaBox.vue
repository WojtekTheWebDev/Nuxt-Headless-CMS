<template>
  <div class="media-box mb-5">
    <video
      v-if="isVideo"
      :width="width ? width : 500"
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
      return `${this.asset.src}?h=500`
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
