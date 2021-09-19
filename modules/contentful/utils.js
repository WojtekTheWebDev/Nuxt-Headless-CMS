import { prepareContent } from './factory.js'

export const createClient = () => {
  const contentful = require('contentful')

  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_TOKEN
  })
}

export const getEntries = async (contentType, locale = '', filter = null, limit = null, nestedLevels = 10) => {
  const client = createClient()

  const contentfulQuery = {
    content_type: contentType,
    include: nestedLevels,
    locale,
    limit
  }

  if (filter && Object.entries(filter).length > 0) {
    for (const [key, value] of Object.entries(filter)) {
      contentfulQuery[key] = value
    }
  }

  const entries = await client.getEntries(contentfulQuery)

  if (!entries.items) { throw new Error('Entry not found!') }

  return entries.items
}

export const prepareRoutes = (routes) => {
  return routes.map(
    ({ fields: route }) => ({ path: route.slug, name: route.name, title: route.title })
  )
}

export const prepareAsset = (asset) => {
  return { source: asset.fields.file.url, title: asset.fields.title }
}

export const preparePrivacyPolicy = (privacyPolicy) => {
  return {
    message: privacyPolicy.fields.message,
    acceptButtonText: privacyPolicy.fields.acceptButtonText,
    slug: privacyPolicy.fields.privacyPolicyPage.fields.slug,
    title: privacyPolicy.fields.privacyPolicyPage.fields.title
  }
}

export const prepareHeader = (page) => {
  const { header, showHeader } = page

  return {
    title: header.fields?.title || '',
    backgroundImage: header?.fields?.backgroundImage?.fields?.file?.url,
    backgroundColor: header?.fields?.backgroundColor || 'white',
    showHeader
  }
}

export const prepareMeta = (page) => {
  const { metaTitle, metaDescription } = page

  return {
    title: metaTitle,
    description: metaDescription,
    ogImage: '',
    ogURL: '',
    ogType: '',
    twitterCard: ''
  }
}

export const prepareSections = (page) => {
  const { sections } = page

  return sections.map(prepareContent)
}
