import Theme from '@/types/cms/Theme'
import { AllowNull } from '@/types/common'

type AllowedTypes = 'Button' | 'Link'

interface PageLink extends Theme {
  text: string,
  slug: string,
  type: AllowedTypes,
  parentPageSlug: AllowNull<string>
}

export default PageLink
