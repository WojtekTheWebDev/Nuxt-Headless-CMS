import { computed, useContext, useMeta } from '@nuxtjs/composition-api'

export const usePageIcon = () => {
  const { store } = useContext()
  const pageIcon = computed<string>(() => store.getters['config/getPageIcon'])

  const metaIcon = computed(() => ({ link: [{ rel: 'icon', type: 'image/x-icon', href: pageIcon.value }] }))

  return {
    pageIcon,
    metaIcon
  }
}

export default usePageIcon
