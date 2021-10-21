import Theme from '~/types/cms/Theme'
import Image from '@/types/common/Image'

export interface ModalCard extends Theme {
  name: string
  title: string,
  description: string,
  image: Image
}

interface ModalCardList extends Partial<Theme> {
  title: string,
  subtitle: string,
  modalCards: ModalCard[]
}

export default ModalCardList
