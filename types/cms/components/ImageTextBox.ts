import Theme from '~/types/cms/Theme'
import Image from '@/types/common/Image'

interface ImageTextBox extends Theme {
  description: string,
  image: Image
}

export default ImageTextBox
