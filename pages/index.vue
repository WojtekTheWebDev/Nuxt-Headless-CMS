><template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script lang="ts">
import { defineComponent, useContext, ssrPromise, onBeforeMount, useMeta, ref, computed } from '@nuxtjs/composition-api'
import StandardPage from '@/components/layout/StandardPage.vue'
import useContentBlocks from '@/composables/useContentBlocks'
import { ContentBlockReturnType, Meta, Page } from '~/types/cms'
import { Header, Section } from '~/types/cms/components'
import useMetaTags from '~/composables/useMetaTags'

export default defineComponent({
  name: 'HomePage',

  components: {
    StandardPage
  },

  setup () {
    // Composables
    const { i18n, store } = useContext()
    const { getSection } = useContentBlocks()
    const { getMetaTags } = useMetaTags()

    // Home page name
    const homePageName = store.state.config.homePageName

    // Refs
    const header = ref<Header>()
    const meta = ref<Meta>()

    // Computed
    const contentBlocks = ref<ContentBlockReturnType<Section>[]>([])
    const metaTags = computed(() => meta.value ? getMetaTags(meta.value as Meta) : {})

    // Fetching page on server side
    const pagePromise = ssrPromise(async () => {
      const res = await fetch(`${process.env.baseURL}/api/page/${homePageName}?locale=${i18n.localeProperties.code}&getByName=true`)
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
