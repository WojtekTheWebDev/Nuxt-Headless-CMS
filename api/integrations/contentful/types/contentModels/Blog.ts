import { Entry } from 'contentful'
import Page from './Page'

interface Blog {
  name: string;
  pages: Entry<Page>[]
}

export default Blog
