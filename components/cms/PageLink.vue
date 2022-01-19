<template>
  <div class="page-link">
    <v-btn
      v-if="type === 'Button'"
      :to="link"
      nuxt
      exact
      :color="theme === 'dark' ? 'primary' : 'secondary'"
      rounded
      outlined
      large
    >
      {{ text }}
    </v-btn>

    <nuxt-link
      v-else
      :class="theme === 'dark' ? 'dark-theme' : 'light-theme'"
      :to="link"
      exact
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'

export default {
  name: 'PageLink',

  mixins: [CMSMixin],

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
    },
    parentPageSlug: {
      type: String,
      default: null
    }
  },

  computed: {
    link () {
      return this.parentPageSlug ? this.localePath(`/${this.parentPageSlug}/${this.slug}`) : this.localePath(`/${this.slug}`)
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
