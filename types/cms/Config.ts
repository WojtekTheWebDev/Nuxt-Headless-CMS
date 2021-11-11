import ContactDetails from './ContactDetails'
import { Route, PrivacyPolicy } from '~/types/cms'
import { AllowNull, Image } from '~/types/common'

interface Config {
  pageName: string;
  pageIcon: Image;
  logo: Image;
  homePageName: string;
  routes: Route[];
  contactDetails: ContactDetails;
  privacyPolicy: PrivacyPolicy;
}

export default Config
