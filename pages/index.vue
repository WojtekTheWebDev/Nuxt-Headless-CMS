<template>
  <StandardPage id="home-page" :header="header" :content-blocks="contentBlocks" />
</template>

<script>
import { createClient } from '@/plugins/contentful'
import PageMixin from '@/mixins/PageMixin'
import StandardPage from '@/components/layout/StandardPage'

export default {
  name: 'HomePage',

  components: {
    StandardPage
  },

  mixins: [PageMixin],

  async asyncData ({ app, env, store, error }) {
    const client = createClient()
    const entries = await client.getEntries({
      content_type: env.pageContentModel,
      locale: app.i18n.localeProperties.code,
      include: env.contentfulIncludeLevel,
      'fields.name': store.getters['config/getHomePageName']
    })

    const page = entries.items[0] || null

    if (!page) { error({ statusCode: 404 }) }

    return {
      metaTitle: page?.fields?.metaTitle,
      metaDescription: page?.fields?.metaDescription,
      pageHeader: {
        ...page?.fields?.header,
        showHeader: page?.fields?.showHeader
      },
      content: page?.fields?.sections
    }
  },

  head () {
    return {
      title: this.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.metaDescription }
      ]
    }
  }
}
</script>
