import { Entry } from 'contentful'
import PageLink from './PageLink'

interface Jumbotron {
  name: string;
  title: string;
  description?: string;
  pageLinks?: Entry<PageLink>[]
}

export default Jumbotron
