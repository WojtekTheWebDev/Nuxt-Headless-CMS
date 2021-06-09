import { parseCMSBlock } from '@/helpers/CMS'

export default {
  computed: {
    header () {
      return {
        title: this.pageHeader.fields.title,
        backgroundImage: this.pageHeader.fields?.backgroundImage?.fields?.file?.url,
        backgroundColor: this.pageHeader.fields?.backgroundColor || 'white'
      }
    },

    contentBlocks () {
      return this.content?.map(parseCMSBlock) || []
    }
  }
}
