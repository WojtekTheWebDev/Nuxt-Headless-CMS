import {
  Blog,
  Faq,
  IconList,
  ImageTextBox,
  Jumbotron,
  MediaBox,
  ModalCardList,
  PageLink,
  TextBox,
  Timeline,
  Section
} from './components'

type ComponentUnion = TextBox
  | MediaBox
  | Timeline
  | IconList
  | ModalCardList
  | Blog
  | PageLink
  | ImageTextBox
  | Faq
  | Jumbotron
  | Section

export default ComponentUnion
