<template>
  <header class="page-header mb-5" :style="{ backgroundColor }">
    <v-container class="pa-0">
      <v-parallax :src="`${backgroundImage}?w=1440`">
        <h1 class="text-center px-10">
          {{ title }}
        </h1>
      </v-parallax>
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
    },

    backgroundColor: {
      type: String,
      default: 'white'
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
  }

  h1 {
    margin: auto;
    max-width: 1140px;
    font-size: 5rem;
    color: white;
    font-weight: 300;
    text-shadow: 1px 1px 5px var(--v-secondary-base);
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }
}
</style>
