<template>
  <section id="home-page">
    <PageHeader :title="header.title" :background-image="header.backgroundImage" />

    <template v-for="contentBlock in contentBlocks">
      <component :is="contentBlock.component" :key="contentBlock.name" v-bind="contentBlock.props" />
    </template>
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

  async asyncData ({ app, env, route, error }) {
    const client = createClient()

    const entries = await client.getEntries({
      content_type: env.pageContentModel,
      locale: app.i18n.localeProperties.code,
      include: env.contentfulIncludeLevel
    })
    const page = entries.items.find(entry => entry.fields.name === env.homePageId)

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
