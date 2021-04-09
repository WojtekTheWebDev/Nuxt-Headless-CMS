<template>
  <section id="home-page">
    <PageHeader :title="header.title" :background-image="header.backgroundImage" />

    <component
      :is="contentBlock.component"
      v-for="contentBlock in contentBlocks"
      :key="contentBlock.name"
      v-bind="contentBlock.props"
    />
  </section>
</template>

<script>
import { createClient } from '@/plugins/contentful'
import CMSMixin from '@/mixins/CMSMixin'
import PageHeader from '@/components/cms/PageHeader'

export default {
  name: 'HomePage',

  components: {
    PageHeader
  },

  mixins: [CMSMixin],

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
      pageHeader: page?.fields?.header,
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
