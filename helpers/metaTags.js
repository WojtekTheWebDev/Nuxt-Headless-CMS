export default (data) => {
  return {
    title: data.metaTitle,
    meta: [
      { hid: 'og:title', property: 'og:title', content: data.title },
      { hid: 'description', name: 'description', content: data.description },
      { hid: 'og:description', property: 'og:description', content: data.description },
      { hid: 'og:image', property: 'og:image', content: data.ogImage },
      { hid: 'og:url', property: 'og:url', content: data.ogURL },
      { hid: 'og:type', property: 'og:type', content: data.ogType },
      { hid: 'twitter:card', property: 'twitter:card', content: data.twiterCard }
    ]
  }
}
