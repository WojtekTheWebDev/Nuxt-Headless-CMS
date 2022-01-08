import { Asset } from 'contentful'

interface PageHeader {
  name: string;
  title: string;
  backgroundImage?: Asset;
  backgroundColor?: string;
}

export default PageHeader
