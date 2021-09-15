import {
  getEntries,
  prepareRoutes,
  prepareAsset,
  preparePrivacyPolicy,
  prepareMeta,
  prepareHeader,
  prepareContentBlocks
} from './utils.js'

const CONTENT_MODELS = {
  config: 'config',
  page: 'page'
}

export const getConfig = async (locale = '') => {
  const [entry] = await getEntries(CONTENT_MODELS.config, locale, null, 1)

  const {
    routing,
    logo,
    pageIcon,
    pageName,
    homePage,
    contactDetails,
    privacyPolicy
  } = entry.fields

  return {
    pageName,
    pageIcon: prepareAsset(pageIcon),
    logo: prepareAsset(logo),
    homePage: homePage.fields.name,
    routes: prepareRoutes(routing),
    contactDetails: contactDetails.fields,
    privacyPolicy: preparePrivacyPolicy(privacyPolicy)
  }
}

export const getPage = async (slug, parentSlug = null, locale = '') => {
  let filter = {
    'fields.slug': slug
  }

  filter = Object.seal(filter)

  if (parentSlug) {
    filter['fields.parentPage.fields.slug'] = parentSlug
  }

  const [entry] = await getEntries(CONTENT_MODELS.page, locale, filter, 1)

  return {
    meta: prepareMeta(entry),
    pageHeader: prepareHeader(entry),
    contentBlocks: prepareContentBlocks(entry)
  }
}
