import { Asset } from 'contentful'

interface MediaBox {
  name: string;
  asset: Asset;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export default MediaBox
