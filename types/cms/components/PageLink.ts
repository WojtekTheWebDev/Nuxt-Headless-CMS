import Theme from '~/types/cms/Theme'

export type AllowedTypes = 'Button' | 'Link'

interface PageLink extends Partial<Theme> {
  text: string,
  slug: string,
  type: AllowedTypes,
  parentPageSlug?: string
}

export default PageLink
