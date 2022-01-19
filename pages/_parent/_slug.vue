<template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  useRoute
} from '@nuxtjs/composition-api'
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

    const parent = computed(() => route.value.params.parent)
    const slug = computed(() => route.value.params.slug)
    const locale = i18n.localeProperties.code
    const apiUrl = `${process.env.baseURL}/api/page/${slug.value}?locale=${locale}&parentPage=${parent.value}`
    const key = `${parent.value}_${slug.value}_${locale}`

    const { header, contentBlocks } = usePage(apiUrl, key)

    return {
      header,
      contentBlocks
    }
  },

  head: {}
})
</script>
