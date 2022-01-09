import { Entry } from 'contentful'
import ContentfulPage from './ContentfulPage'

interface ContentfulPrivacyPolicy {
  name: string;
  message: string;
  acceptButtonText: string;
  privacyPolicyPage: Entry<ContentfulPage>;
}

export default ContentfulPrivacyPolicy
