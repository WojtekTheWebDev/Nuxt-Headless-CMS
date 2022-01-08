<template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script lang="ts">
import { defineComponent, useContext, ssrPromise, onBeforeMount, useMeta, ref, computed, useRoute } from '@nuxtjs/composition-api'
import StandardPage from '@/components/layout/StandardPage.vue'
import useContentBlocks from '@/composables/useContentBlocks'
import { ContentBlockReturnType, Meta, Page } from '~/types/cms'
import { Header, Section } from '~/types/cms/components'
import useMetaTags from '~/composables/useMetaTags'

export default defineComponent({
  name: 'CMSPage',

  components: {
    StandardPage
  },

  setup () {
    // Composables
    const { i18n } = useContext()
    const { getSection } = useContentBlocks()
    const { getMetaTags } = useMetaTags()
    const route = useRoute()

    // Refs
    const header = ref<Header>()
    const contentBlocks = ref<ContentBlockReturnType<Section>[]>([])
    const meta = ref<Meta>()

    // Computed
    const parent = computed(() => route.value.params.parent)
    const slug = computed(() => route.value.params.slug)
    const metaTags = computed(() => meta.value ? getMetaTags(meta.value as Meta) : {})

    // Fetching page on server side
    const pagePromise = ssrPromise(async () => {
      const res = await fetch(`${process.env.baseURL}/api/page/${slug.value}?locale=${i18n.localeProperties.code}&parentPage=${parent.value}`)
      return res.json() as Promise<Page>
    })

    // Resolving the promise with page data before component is mounted
    onBeforeMount(async () => {
      const page = await pagePromise
      header.value = page.header
      contentBlocks.value = page.sections.map(getSection)
      meta.value = page.meta
    })

    // Set meta tags
    useMeta(() => metaTags.value)

    return {
      header,
      contentBlocks
    }
  },

  head: {}
})
</script>
