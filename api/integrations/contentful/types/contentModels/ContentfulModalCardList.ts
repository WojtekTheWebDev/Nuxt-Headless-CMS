import { Entry } from 'contentful'
import ModalCard from './ContentfulModalCard'

interface ContentfulModalCardList {
  name: string;
  title?: string;
  subtitle?: string;
  modalCards: Entry<ModalCard>[]
}

export default ContentfulModalCardList
