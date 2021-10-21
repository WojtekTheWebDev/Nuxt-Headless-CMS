import { Entry } from 'contentful'
import FaqItem from './FaqItem'

interface Faq {
  name: string;
  title?: string;
  items: Entry<FaqItem>[];
}

export default Faq
