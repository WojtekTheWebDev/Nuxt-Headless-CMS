import { Entry } from 'contentful'
import ContentfulPage from './ContentfulPage'
import { AllowedTypes } from '@/types/cms/components/PageLink'

interface ContentfulPageLink {
  name: string;
  text: string;
  page: Entry<ContentfulPage>;
  type: AllowedTypes;
}

export default ContentfulPageLink
