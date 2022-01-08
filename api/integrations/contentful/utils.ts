import { createClient, ContentfulClientApi, Asset } from 'contentful'
import { prepareContent } from './factory'
import { AllowedFilterKeys, ContentfulQuery, QueryFilter } from './types/utils'
import { Config, Page } from './types/contentModels'
import { AllowNull, Image } from '~/types/common'
import { Meta, PrivacyPolicy, Route } from '~/types/cms'
import { PageSection } from '~/types/cms/Page'
import { Header } from '~//types/cms/components'

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

export const prepareRoutes = (routes: Config['routing']): Route[] => {
  return routes?.map(
    ({ fields: route }) => ({ path: route.slug, name: route.name, title: route.title })
  ) || []
}

export const prepareAsset = (asset: Asset): Image => {
  return { src: asset.fields.file.url, alt: asset.fields.title }
}

export const preparePrivacyPolicy = (privacyPolicy: Config['privacyPolicy']): PrivacyPolicy => {
  return {
    message: privacyPolicy.fields.message,
    acceptButtonText: privacyPolicy.fields.acceptButtonText,
    slug: privacyPolicy.fields.privacyPolicyPage.fields.slug,
    title: privacyPolicy.fields.privacyPolicyPage.fields.title
  }
}

export const prepareHeader = (page: Page): Header => {
  const { header, showHeader } = page

  return {
    title: header.fields.title,
    backgroundImage: header.fields.backgroundImage?.fields?.file?.url,
    backgroundColor: header.fields.backgroundColor,
    showHeader: showHeader || true
  }
}

export const prepareMeta = (page: Page): Meta => {
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

export const prepareSections = (page: Page): PageSection[] => {
  const { sections } = page
  return sections?.map((section) => {
    return {
      name: section.fields.name,
      title: section.fields.title,
      fillHeight: section.fields.fillHeight,
      backgroundImage: section.fields.backgroundImage?.fields.file.url,
      theme: section.fields.theme || 'light',
      contentBlocks: section.fields.contentBlocks.map(prepareContent)
    }
  }) || []
}