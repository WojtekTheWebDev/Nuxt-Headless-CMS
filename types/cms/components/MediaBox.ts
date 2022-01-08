import Theme from '~/types/cms/Theme'
import Image from '@/types/common/Image'

export interface Asset extends Image {
  type: string
}

interface MediaBox extends Partial<Theme> {
  asset: Asset,
  width?: number,
  height?: number,
  rounded?: boolean
}

export default MediaBox
