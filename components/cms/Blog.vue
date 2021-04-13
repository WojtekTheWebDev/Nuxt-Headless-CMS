<template>
  <div class="blog">
    <div
      v-for="page in [...pages, ...pages]"
      :key="page.name"
      class="blog-page"
    >
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          outlined
          rounded
          :to="localePath(`/${page.slug}`)"
          nuxt
          exact
          :elevation="hover ? 5 : 0"
        >
          <v-img class="card-image" :src="getPageHeader(page)" :alt="page.header.fields.backgroundImage.fields.title" />
          <v-card-title>{{ page.title }}</v-card-title>
          <v-card-text class="">
            {{ page.metaDescription }}
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',

  props: {
    pages: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    getPageHeader (page) {
      return `${page.header.fields.backgroundImage.fields.file.url}?w=300`
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
