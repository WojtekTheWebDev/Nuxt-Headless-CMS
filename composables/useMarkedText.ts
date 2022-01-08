import { computed } from '@nuxtjs/composition-api'
import marked from 'marked'

export default (text: string) => {
  return computed(() => marked(text))
}
