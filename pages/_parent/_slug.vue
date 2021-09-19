<template>
  <!-- <StandardPage :header="header" :content-blocks="contentBlocks" /> -->
  <div />
</template>

<script>
import metaTags from '@/helpers/metaTags'
// import StandardPage from '@/components/layout/StandardPage'

export default {
  name: 'CMSPage',

  // components: {
  //   StandardPage
  // },

  async asyncData ({ app, params, error }) {
    const res = await fetch(`${process.env.baseURL}/api/page/${params.slug}?locale=${app.i18n.localeProperties.code}&parentPage=${params.parent}`)

    if (res.status !== 200) { error({ statusCode: 404 }) }

    const { meta, header, contentBlocks } = await res.json()

    return {
      meta,
      header,
      contentBlocks
    }
  },

  head () {
    return metaTags(this.meta)
  }
}
</script>
