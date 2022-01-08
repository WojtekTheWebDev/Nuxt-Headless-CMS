import { Entry } from 'contentful'
import IconBox from './IconBox'

interface IconList {
  name: string;
  title?: string;
  icons: Entry<IconBox>[]
}

export default IconList
