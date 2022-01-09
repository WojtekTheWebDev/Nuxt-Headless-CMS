import { Entry } from 'contentful'
import ContentfulPage from './ContentfulPage'

interface ContentfulBlog {
  name: string;
  pages: Entry<ContentfulPage>[]
}

export default ContentfulBlog
