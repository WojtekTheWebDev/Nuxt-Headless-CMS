import { Asset } from 'contentful'

interface ContentfulMediaBox {
  name: string;
  asset: Asset;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export default ContentfulMediaBox
