<template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script>
import getMetaTags from '@/helpers/metaTags'
import StandardPage from '@/components/layout/StandardPage'
import { getContentBlock } from '@/helpers/contentBlocks'

export default {
  name: 'CMSPage',

  components: {
    StandardPage
  },

  async asyncData ({ app, params, error }) {
    const res = await fetch(`${process.env.baseURL}/api/page/${params.slug}?locale=${app.i18n.localeProperties.code}&parentPage=${params.parent}`)

    if (res.status !== 200) { error({ statusCode: 404 }) }

    const { meta, header, sections } = await res.json()

    return {
      meta,
      header,
      sections
    }
  },

  head () {
    return getMetaTags(this.meta)
  },

  computed: {
    contentBlocks () {
      return this.sections.map(section => getContentBlock(section))
    }
  }
}
</script>
