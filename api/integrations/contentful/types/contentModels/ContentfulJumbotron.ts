import { Entry } from 'contentful'
import PageLink from './ContentfulPageLink'

interface ContentfulJumbotron {
  name: string;
  title: string;
  description?: string;
  pageLinks?: Entry<PageLink>[]
}

export default ContentfulJumbotron
