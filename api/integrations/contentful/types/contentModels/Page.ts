import { Entry } from 'contentful'
import PageHeader from './PageHeader'
import Section from './Section'

interface Page {
  name: string;
  title: string;
  description?: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  header: Entry<PageHeader>
  showHeader?: boolean;
  sections?: Entry<Section>[];
  parentPage?: Entry<Page>
}

export default Page
