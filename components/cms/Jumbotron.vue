<template>
  <div class="jumbotron">
    <h2 class="jumbotron-title">
      {{ title }}
    </h2>
    <div class="jumbotron-description" v-html="markedDescription" />
    <div class="jumbotron-page-links">
      <PageLink
        v-for="pageLink in pageLinks"
        :key="pageLink.slug"
        :theme="theme"
        :text="pageLink.text"
        :type="pageLink.type"
        :slug="pageLink.slug"
        :parent-page-slug="pageLink.parentPageSlug"
      />
    </div>
  </div>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'
import marked from 'marked'
import PageLink from '@/components/cms/PageLink'

export default {
  name: 'Jumbotron',

  components: {
    PageLink
  },

  mixins: [CMSMixin],

  props: {
    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    pageLinks: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    markedDescription () {
      return marked(this.description)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.jumbotron {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &-title {
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 3rem;
    }
  }

  &-description {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }

  &-page-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .page-link {
      margin: 1rem;
    }
  }
}
</style>
