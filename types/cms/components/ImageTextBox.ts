import Theme from '~/types/cms/Theme'
import Image from '@/types/common/Image'

interface ImageTextBox extends Partial<Theme> {
  description: string,
  image: Image
}

export default ImageTextBox
