import { Asset } from 'contentful'

interface ContentfulPageHeader {
  name: string;
  title: string;
  backgroundImage?: Asset;
  aspectRatio?: string;
  backgroundColor?: string;
  backgroundImageMobile?: Asset;
  aspectRatioMobile?: string;
}

export default ContentfulPageHeader
