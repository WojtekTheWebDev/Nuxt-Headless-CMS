import { createClient, ContentfulClientApi } from 'contentful'
import { AllowNull, Image } from '../../../types/common'
import { Header, Meta, PrivacyPolicy, Route } from '../../../types/cms'
import { prepareContent } from './factory.js'
import { AllowedFilterKeys, ContentfulQuery, QueryFilter } from './types/utils'
import { ContentfulAsset, ContentfulPage, ContentfulPrivacyPolicy, ContentfulRoute } from './types/fields'

export const createContentfulClient = (): ContentfulClientApi => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE || '',
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_TOKEN || ''
  })
}

export const getEntries = async <T>(
  contentType: string,
  locale = '',
  filter: AllowNull<QueryFilter> = null,
  limit: AllowNull<number> = null,
  nestedLevels = 10
) => {
  const client = createContentfulClient()

  const contentfulQuery: ContentfulQuery = {
    content_type: contentType,
    include: nestedLevels,
    locale,
    limit
  }

  if (filter && Object.keys(filter).length > 0) {
    let key: AllowedFilterKeys
    for (key in filter) {
      const value = filter[key]
      contentfulQuery[key] = value
    }
  }

  const entries = await client.getEntries<T>(contentfulQuery)

  if (!entries.items) { throw new Error('Entry not found!') }

  return entries.items
}

export const prepareRoutes = (routes: ContentfulRoute[]): Route[] => {
  return routes.map(
    ({ fields: route }) => ({ path: route.slug, name: route.name, title: route.title })
  )
}

export const prepareAsset = (asset: ContentfulAsset): Image => {
  return { src: asset.fields.file.url, alt: asset.fields.title }
}

export const preparePrivacyPolicy = (privacyPolicy: ContentfulPrivacyPolicy): PrivacyPolicy => {
  return {
    message: privacyPolicy.fields.message,
    acceptButtonText: privacyPolicy.fields.acceptButtonText,
    slug: privacyPolicy.fields.privacyPolicyPage.fields.slug,
    title: privacyPolicy.fields.privacyPolicyPage.fields.title
  }
}

export const prepareHeader = (page: ContentfulPage): Header => {
  const { header, showHeader } = page

  return {
    title: header?.fields?.title || '',
    backgroundImage: header?.fields?.backgroundImage?.fields?.file?.url || null,
    backgroundColor: header?.fields?.backgroundColor || 'white',
    showHeader
  }
}

export const prepareMeta = (page: ContentfulPage): Meta => {
  const { metaTitle, metaDescription } = page

  return {
    title: metaTitle,
    description: metaDescription,
    ogImage: '',
    ogURL: '',
    ogType: '',
    twitterCard: 'summary_large_image'
  }
}

export const prepareSections = (page: ContentfulPage) => {
  const { sections } = page

  return sections.map(section => prepareContent(section.sys.contentType.sys.id as any, section))
}
