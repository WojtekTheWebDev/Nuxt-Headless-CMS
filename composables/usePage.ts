import {
  ssrPromise,
  onBeforeMount,
  useMeta,
  ref,
  computed,
  ssrRef,
  useContext
} from '@nuxtjs/composition-api'
import useContentBlocks from '@/composables/useContentBlocks'
import { ContentBlockReturnType, Meta, Page } from '~/types/cms'
import { Header, Section } from '@/types/cms/components'
import useMetaTags from '@/composables/useMetaTags'

const usePage = (apiUrl: string, key: string) => {
  const { error } = useContext()

  // Composables
  const { getSection } = useContentBlocks()
  const { getMetaTags } = useMetaTags()

  // Refs
  const header = ref<Header>()
  const meta = ref<Meta>()

  // Computed
  const contentBlocks = ref<ContentBlockReturnType<Section>[]>([])
  const metaTags = computed(() => meta.value ? getMetaTags(meta.value as Meta) : {})

  // Fetching page on server side
  const pagePromise = ssrPromise(async () => {
    const res = await fetch(apiUrl)
    const resJSON: Page = await res.json()
    const page = ssrRef<Page>(resJSON, key)
    return {
      status: res.status,
      page
    }
  }, key)

  // Resolving the promise with page data before component is mounted
  onBeforeMount(async () => {
    const pageRes = await pagePromise
    const { page, status } = pageRes

    if (status !== 200) {
      return error({ statusCode: status })
    }

    header.value = page.value.header
    contentBlocks.value = page.value.sections.map(getSection)
    meta.value = page.value.meta
  })

  // Set meta tags
  useMeta(() => metaTags.value)

  return {
    header,
    contentBlocks
  }
}

export default usePage
