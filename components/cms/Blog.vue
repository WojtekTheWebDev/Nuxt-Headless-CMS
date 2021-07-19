<template>
  <div class="blog">
    <div
      v-for="page in pages"
      :key="page.name"
      class="blog-page"
    >
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          outlined
          rounded
          :to="getPageLink(page)"
          nuxt
          exact
          :elevation="hover ? 5 : 0"
        >
          <v-img
            v-if="!!page.header"
            class="card-image"
            :src="getPageHeader(page)"
            :alt="getPageAlt(page)"
          />
          <v-card-title>{{ page.title }}</v-card-title>
          <v-card-text>
            {{ page.metaDescription }}
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'

export default {
  name: 'Blog',

  mixins: [CMSMixin],

  props: {
    pages: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    getPageHeader (page) {
      return page.header ? `${page.header.fields.backgroundImage.fields.file.url}?w=300` : null
    },

    getPageAlt (page) {
      return page.header?.fields?.backgroundImage?.fields?.title || ''
    },

    getPageLink (page) {
      return page.parentPage ? this.localePath(`/${page.parentPage?.fields?.slug}/${page.slug}`) : this.localePath(`/${page.slug}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.blog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &-page {
    width: 300px;
    height: 300px;
    margin: 1rem;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: 250px;
      height: 250px;
      margin: 1rem 0 1rem 0;
    }

    .v-card {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
