import { Config, Page } from './types/contentModels'
import { PageFilter } from './types/utils'
import {
  getEntries,
  prepareRoutes,
  prepareAsset,
  preparePrivacyPolicy,
  prepareMeta,
  prepareHeader,
  prepareSections
} from './utils'
import { AllowNull } from '~/types/common'

const CONTENT_MODELS = {
  config: 'config',
  page: 'page'
}

export const getConfig = async (locale = '') => {
  const [entry] = await getEntries<Config>(CONTENT_MODELS.config, locale, null, 1)

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

export const getPageBySlug = async (slug: string, parentSlug: AllowNull<string> = null, locale = '') => {
  const filter: PageFilter = {
    'fields.slug': slug
  }

  if (parentSlug) {
    filter['fields.parentPage.fields.slug'] = parentSlug
  }

  const [entry] = await getEntries<Page>(CONTENT_MODELS.page, locale, filter, 1)
  const page = entry.fields

  return {
    meta: prepareMeta(page),
    header: prepareHeader(page),
    sections: prepareSections(page)
  }
}

export const getPageByName = async (name: string, locale = '') => {
  const filter: PageFilter = {
    'fields.name': name
  }

  const [entry] = await getEntries<Page>(CONTENT_MODELS.page, locale, filter, 1)
  const page = entry.fields

  return {
    meta: prepareMeta(page),
    header: prepareHeader(page),
    sections: prepareSections(page)
  }
}
