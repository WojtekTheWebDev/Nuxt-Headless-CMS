import { AllowNull } from '../common'
import { Config, Page } from '~/types/cms'

interface Integration {
  getConfig: (locale?: string) => Promise<Config>;
  getPageByName: (name: string, locale?: string) => Promise<Page>;
  getPageBySlug: (slug: string, parentSlug?: string, locale?: string) => Promise<Page>;
}

export default Integration
