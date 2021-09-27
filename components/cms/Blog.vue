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
            v-if="isImageInPage(page)"
            class="card-image"
            :src="getImageSrc(page)"
            :alt="page.image.alt"
          />
          <v-card-title>{{ page.title }}</v-card-title>
          <v-card-text>
            {{ page.description }}
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, PropType } from '@nuxtjs/composition-api'
import { ArrayElement } from '@/types/common'
import { Blog } from '@/types/cms'

export default defineComponent({
  name: 'Blog',

  props: {
    theme: {
      type: String as PropType<Blog['theme']>,
      default: 'light',
      validate: (val: Blog['theme']) => val === 'light' || val === 'dark'
    },

    pages: {
      type: Array as PropType<Blog['pages']>,
      default: () => []
    }
  },

  setup ({ pages }) {
    const { app } = useContext()
    console.log(pages)
    const getImageSrc = (page: ArrayElement<typeof pages>) => (`${page.image.src}?w=300`)
    const isImageInPage = (page: ArrayElement<typeof pages>) => 'image' in page && 'src' in page.image
    const getPageLink = (page: ArrayElement<typeof pages>) => (
      app.localePath(page.parentPageSlug
        ? `/${page.parentPageSlug}/${page.slug}`
        : `/${page.slug}`)
    )

    return {
      getImageSrc,
      isImageInPage,
      getPageLink
    }
  }
})
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
