import { Asset, Entry } from 'contentful'
import {
  ContentfulPage,
  ContentfulContactDetails,
  ContentfulPrivacyPolicy
} from '~/api/integrations/contentful/types/contentModels'

interface ContentfulConfig {
  name: string;
  pageName: string;
  homePage: Entry<ContentfulPage>;
  routing?: Entry<ContentfulPage>[];
  logo: Asset;
  pageIcon: Asset;
  contactDetails: Entry<ContentfulContactDetails>;
  privacyPolicy: Entry<ContentfulPrivacyPolicy>;
}

export default ContentfulConfig
