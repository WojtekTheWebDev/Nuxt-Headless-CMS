import Theme from '@/types/cms/Theme'
import { Image } from '@/types/common'

interface Asset extends Image {
  type: string
}

interface MediaBox extends Theme {
  asset: Asset,
  width: number,
  height: number,
  rounded: boolean
}

export default MediaBox
