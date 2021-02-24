<template>
  <div class="text-box text-justify mb-5">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'TextBox',

  props: {
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text-box {
  width: 100%;
}
</style>
