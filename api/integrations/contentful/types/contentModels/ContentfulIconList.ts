import { Entry } from 'contentful'
import IconBox from './ContentfulIconBox'

interface ContentfulIconList {
  name: string;
  title?: string;
  icons: Entry<IconBox>[]
}

export default ContentfulIconList
