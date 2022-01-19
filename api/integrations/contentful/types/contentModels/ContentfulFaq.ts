import { Entry } from 'contentful'
import ContentfulFaqItem from './ContentfulFaqItem'

interface ContentfulFaq {
  name: string;
  title?: string;
  items: Entry<ContentfulFaqItem>[];
}

export default ContentfulFaq
