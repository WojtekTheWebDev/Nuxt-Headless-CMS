import { Entry } from 'contentful'
import ModalCard from './ModalCard'

interface ModalCardList {
  name: string;
  title?: string;
  subtitle?: string;
  modalCards: Entry<ModalCard>[]
}

export default ModalCardList
