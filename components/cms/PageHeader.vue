<template>
  <header class="page-header mb-5">
    <v-parallax :src="backgroundImage">
      <h1 class="text-center">
        {{ title }}
      </h1>
    </v-parallax>
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
@import '~vuetify/src/styles/settings/_variables';

.page-header {
  width: 100%;
  display: flex;
  align-items: center;

  .v-parallax {
    width: 100%;
    height: 500px;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 300px;
    }
  }

  h1 {
    font-size: 5rem;
    color: white;
    font-weight: 300;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }
}
</style>
