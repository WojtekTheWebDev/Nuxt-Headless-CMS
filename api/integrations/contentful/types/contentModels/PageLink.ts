import { Entry } from 'contentful'
import Page from './Page'
import { AllowedTypes } from '@/types/cms/components/PageLink'

interface PageLink {
  name: string;
  text: string;
  page: Entry<Page>;
  type: AllowedTypes;
}

export default PageLink
