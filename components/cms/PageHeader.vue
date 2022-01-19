<template>
  <header
    v-if="showHeader"
    class="page-header"
    :style="{ backgroundColor }"
  >
    <v-container class="pa-0">
      <v-parallax
        v-if="backgroundImage"
        :src="`${backgroundImage}?w=1440`"
      >
        <h1 class="text-center">
          {{ title }}
        </h1>
      </v-parallax>

      <div
        v-else
        class="page-header-no-img"
      >
        <h1 class="text-center">
          {{ title }}
        </h1>
      </div>
    </v-container>
  </header>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'

export default {
  name: 'PageHeader',

  mixins: [CMSMixin],

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
    },

    showHeader: {
      type: Boolean,
      default: true
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

  &-no-img {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: auto;
    max-width: 1140px;
    font-size: 4rem;
    color: white;
    font-weight: 300;
    text-shadow: 1px 1px 5px var(--v-secondary-base);
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }
}
</style>
