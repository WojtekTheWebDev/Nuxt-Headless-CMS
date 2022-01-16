<template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script lang="ts">
import { defineComponent, useContext, ssrPromise, onBeforeMount, useMeta, ref, computed, useRoute } from '@nuxtjs/composition-api'
import StandardPage from '@/components/layout/StandardPage.vue'
import usePage from '@/composables/usePage'

export default defineComponent({
  name: 'CMSPage',

  components: {
    StandardPage
  },

  setup () {
    // Composables
    const { i18n } = useContext()
    const route = useRoute()

    const slug = route.value.params.slug
    const locale = i18n.localeProperties.code
    const apiUrl = `${process.env.baseURL}/api/page/${slug}?locale=${locale}`
    const key = `$${slug}_${locale}`

    const { header, contentBlocks } = usePage(apiUrl, key)

    return {
      header,
      contentBlocks
    }
  },

  head: {}
})
</script>
