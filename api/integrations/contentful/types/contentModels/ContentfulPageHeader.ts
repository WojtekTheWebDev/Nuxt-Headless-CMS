import { Asset } from 'contentful'

interface ContentfulPageHeader {
  name: string;
  title: string;
  backgroundImage?: Asset;
  backgroundColor?: string;
}

export default ContentfulPageHeader
