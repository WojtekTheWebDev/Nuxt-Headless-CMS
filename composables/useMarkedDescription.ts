import { computed } from '@nuxtjs/composition-api'
import marked from 'marked'

export default (description: string) => {
  return computed(() => marked(description))
}
