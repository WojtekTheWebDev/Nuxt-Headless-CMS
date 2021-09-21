><template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import getMetaTags from '@/helpers/metaTags'
// import StandardPage from '@/components/layout/StandardPage'
import { getContentBlock } from '@/helpers/contentBlocks'

export default {
  name: 'HomePage',

  // components: {
  //   StandardPage
  // },

  async asyncData ({ app, store, error }) {
    const homePageName = store.state.config.homePageName
    console.log(`${process.env.baseURL}/api/page/${homePageName}?locale=${app.i18n.localeProperties.code}&getByName=true`)
    const res = await fetch(`${process.env.baseURL}/api/page/${homePageName}?locale=${app.i18n.localeProperties.code}&getByName=true`)

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
      return this.sections.map(getContentBlock)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
