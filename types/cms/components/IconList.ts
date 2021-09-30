import Theme from '~/types/cms/Theme'
import Image from '@/types/common/Image'

export interface IconBox {
  name: string,
  title: string,
  icon: Image
}

interface IconList extends Theme {
  title: string,
  icons: IconBox[]
}

export default IconList