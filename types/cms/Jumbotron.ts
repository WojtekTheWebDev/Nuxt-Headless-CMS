import Theme from '@/types/cms/Theme'
import { PageLink } from '@/types/cms'

interface Jumbotron extends Theme {
  title: string,
  description: string,
  pageLinks: PageLink[]
}

export default Jumbotron
