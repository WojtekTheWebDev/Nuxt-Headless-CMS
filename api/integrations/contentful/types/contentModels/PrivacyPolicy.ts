import { Entry } from 'contentful'
import Page from './Page'

interface PrivacyPolicy {
  name: string;
  message: string;
  acceptButtonText: string;
  privacyPolicyPage: Entry<Page>;
}

export default PrivacyPolicy
