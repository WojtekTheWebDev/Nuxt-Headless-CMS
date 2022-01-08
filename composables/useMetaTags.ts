import { Meta } from '~/types/cms'

const useMetaTags = () => {
  const getMetaTags = (meta: Meta) => {
    return {
      title: meta.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: meta.title },
        { hid: 'description', name: 'description', content: meta.description },
        { hid: 'og:description', property: 'og:description', content: meta.description },
        { hid: 'og:image', property: 'og:image', content: meta.ogImage },
        { hid: 'og:url', property: 'og:url', content: meta.ogURL },
        { hid: 'og:type', property: 'og:type', content: meta.ogType },
        { hid: 'twitter:card', property: 'twitter:card', content: meta.twitterCard }
      ]
    }
  }

  return {
    getMetaTags
  }
}

export default useMetaTags
