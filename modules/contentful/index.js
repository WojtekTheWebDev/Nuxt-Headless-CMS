import {
  getEntries,
  prepareRoutes,
  prepareAsset,
  preparePrivacyPolicy,
  prepareMeta,
  prepareHeader,
  prepareSections
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
    homePageName: homePage.fields.name,
    routes: prepareRoutes(routing),
    contactDetails: contactDetails.fields,
    privacyPolicy: preparePrivacyPolicy(privacyPolicy)
  }
}

export const getPageBySlug = async (slug, parentSlug = null, locale = '') => {
  const filter = {
    'fields.slug': slug
  }

  if (parentSlug) {
    filter['fields.parentPage.fields.slug'] = parentSlug
  }

  const [entry] = await getEntries(CONTENT_MODELS.page, locale, filter, 1)
  const page = entry.fields

  return {
    meta: prepareMeta(page),
    header: prepareHeader(page),
    sections: prepareSections(page)
  }
}

export const getPageByName = async (name, locale = '') => {
  const filter = {
    'fields.name': name
  }

  const [entry] = await getEntries(CONTENT_MODELS.page, locale, filter, 1)
  const page = entry.fields

  return {
    meta: prepareMeta(page),
    header: prepareHeader(page),
    sections: prepareSections(page)
  }
}
