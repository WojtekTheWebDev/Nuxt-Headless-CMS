import { computed, useContext, useMeta } from '@nuxtjs/composition-api'

export const usePageIcon = () => {
  const { store } = useContext()
  const pageIcon = computed<string>(() => store.getters['config/getPageIcon'])

  useMeta(() => ({ link: [{ rel: 'icon', type: 'image/x-icon', href: pageIcon }] }))

  return {
    pageIcon
  }
}

export default usePageIcon
