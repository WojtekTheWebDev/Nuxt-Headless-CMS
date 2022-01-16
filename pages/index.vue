><template>
  <StandardPage :header="header" :content-blocks="contentBlocks" />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import StandardPage from '@/components/layout/StandardPage.vue'
import usePage from '@/composables/usePage'

export default defineComponent({
  name: 'HomePage',

  components: {
    StandardPage
  },

  setup () {
    const { i18n, store } = useContext()

    const homePageName = store.state.config.homePageName
    const locale = i18n.localeProperties.code
    const apiUrl = `${process.env.baseURL}/api/page/${homePageName}?locale=${locale}&getByName=true`
    const key = `${homePageName}_${locale}`

    const { header, contentBlocks } = usePage(apiUrl, key)

    return {
      header,
      contentBlocks
    }
  },

  head: {}
})
</script>
