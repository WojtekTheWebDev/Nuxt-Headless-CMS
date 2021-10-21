import { Asset, Entry } from 'contentful'
import { Page, ContactDetails, PrivacyPolicy } from './index'

interface Config {
  name: string;
  pageName: string;
  homePage: Entry<Page>;
  routing?: Entry<Page>[];
  logo: Asset;
  pageIcon: Asset;
  contactDetails: Entry<ContactDetails>;
  privacyPolicy: Entry<PrivacyPolicy>;
}

export default Config
