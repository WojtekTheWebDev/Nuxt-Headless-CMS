import Theme from '@/types/cms/Theme'

export interface FaqItem {
  name: string,
  question: string,
  answer: string
}

interface Faq extends Theme {
  title: String,
  items: FaqItem[]
}

export default Faq
