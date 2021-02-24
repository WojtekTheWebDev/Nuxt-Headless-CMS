<template>
  <header class="page-header mb-5" :style="{ 'background-image': `url(${ backgroundImage })` }">
    <v-container>
      <h1 class="text-center">
        {{ title }}
      </h1>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',

  props: {
    title: {
      type: String,
      default: ''
    },

    backgroundImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 5rem;
    color: white;
    font-weight: 300;
  }
}
</style>
