import { Entry, Asset } from 'contentful'
import ContentfulPageHeader from './ContentfulPageHeader'
import ContentfulSection from './ContentfulSection'

interface ContentfulPage {
  name: string;
  title: string;
  description?: string;
  metaTitle: string;
  metaDescription: string;
  openGraphImage: Asset,
  openGraphUrl: string,
  openGraphType: string,
  twitterCard: string,
  slug: string;
  header: Entry<ContentfulPageHeader>
  showHeader?: boolean;
  sections?: Entry<ContentfulSection>[];
  parentPage?: Entry<ContentfulPage>
}

export default ContentfulPage
