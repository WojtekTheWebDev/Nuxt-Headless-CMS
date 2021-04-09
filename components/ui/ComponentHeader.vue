<template>
  <div class="component-header">
    <h3 v-if="title" class="text-center mb-3">
      {{ title }}
    </h3>
    <h4 v-if="subtitle" class="text-center mb-3">
      {{ subtitle }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeader',

  props: {
    title: {
      type: String,
      default: ''
    },

    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.component-header {
  width: 100%;

  h3 {
    font-size: 2rem;
    font-weight: 300;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 300;
  }
}
</style>
