import { Header, Section } from './components'
import { ComponentUnion, FactoryReturnType, Meta } from '@/types/cms'

export interface PageSection extends Omit<Section, 'contentBlocks'> {
  contentBlocks: FactoryReturnType<ComponentUnion>[]
}

interface Page {
  meta: Meta,
  header: Header,
  sections: PageSection[]
}

export default Page
