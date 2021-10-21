import Theme from '~/types/cms/Theme'
import PageLink from '@/types/cms/components/PageLink'

interface Jumbotron extends Partial<Theme> {
  title: string,
  description: string,
  pageLinks: PageLink[]
}

export default Jumbotron
