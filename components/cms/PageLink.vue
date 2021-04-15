<template>
  <div class="page-link">
    <v-btn
      v-if="type === 'Button'"
      :to="localePath(`/${slug}`)"
      nuxt
      exact
      color="primary"
      rounded
      outlined
      large
    >
      {{ text }}
    </v-btn>

    <nuxt-link
      v-else
      :to="localePath(`/${slug}`)"
      exact=""
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PageLink',

  props: {
    text: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'Button',
      validator: value => value === 'Button' || value === 'Link'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-link {
  text-align: center;

  a {
    font-size: 1.2rem;
  }
}
</style>
