import ContactDetails from './ContactDetails'
import { Route, PrivacyPolicy } from '~/types/cms'
import { AllowNull, Image } from '~/types/common'

interface Config {
  pageName: AllowNull<string>;
  pageIcon: AllowNull<Image>;
  logo: AllowNull<Image>;
  homePageName: AllowNull<string>;
  routes: AllowNull<Route[]>;
  contactDetails: AllowNull<ContactDetails>;
  privacyPolicy: AllowNull<PrivacyPolicy>;
}

export default Config
